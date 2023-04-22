// import fs from "node:fs";
// import path from "node:path";
// import { fileURLToPath } from "node:url";
// import express from "express";

// const __dirname = path.dirname(fileURLToPath(import.meta.url));

// const isTest = process.env.VITEST;

// process.env.MY_CUSTOM_SECRET = "API_KEY_qwertyuiop";

// export async function createServer(
//   root = process.cwd(),
//   isProd = process.env.NODE_ENV === "production",
//       // @ts-ignore
//   hmrPort
// ) {
//         // @ts-ignore
//   const resolve = (p: string) => path.resolve(__dirname, p);

//   const indexProd = isProd
//     ? fs.readFileSync(resolve("dist/client/index.html"), "utf-8")
//     : "";

//   const app = express();

//   /**
//    * @type {import('vite').ViteDevServer}
//    */
//           // @ts-ignore
//   let vite;
//   if (!isProd) {
//             // @ts-ignore
//     vite = await (
//                 // @ts-ignore
//       await import("vite")
//     ).createServer({
//       root,
//       logLevel: isTest ? "error" : "info",
//       server: {
//         middlewareMode: true,
//         watch: {
//           // During tests we edit the files too fast and sometimes chokidar
//           // misses change events, so enforce polling for consistency
//           usePolling: true,
//           interval: 100,
//         },
//         hmr: {
//           port: hmrPort,
//         },
//       },
//       appType: "custom",
//     });
//     // use vite's connect instance as middleware
//             // @ts-ignore
//     app.use(vite.middlewares);
//   } else {
//     app.use((await import("compression")).default());
//     app.use(
//       (await import("serve-static")).default(resolve("dist/client"), {
//         index: false,
//       })
//     );
//   }

//   app.use("*", async (req, res) => {
//     try {
//       const url = req.originalUrl;

//       let template, render;
//       if (!isProd) {
//         // always read fresh template in dev
//         template = fs.readFileSync(resolve("index.html"), "utf-8");
//                   // @ts-ignore
//         template = await vite.transformIndexHtml(url, template);
//                   // @ts-ignore
//         render = (await vite.ssrLoadModule("/src/entry-server.tsx")).render;
//       } else {
//         template = indexProd;
//         // @ts-ignore
//         render = (await import("./dist/server/entry-server.tsx")).render;
//       }

//       const context = {};
//       const appHtml = render(url, {
//         onShellReady() {
//           appHtml.pipe(res);
//         },
//         onShellError() {
//           // do error handling
//         },
//         onAllReady() {
//                             // @ts-ignore
//           res.write(parts[1]);
//           res.end();
//         },
//                           // @ts-ignore
//         onError(err) {
//           console.error(err);
//         },
//       });
//         // @ts-ignore
//       if (context.url) {
//         // Somewhere a `<Redirect>` was rendered
//                 // @ts-ignore
//         return res.redirect(301, context.url);
//       }

//       const html = template.replace(`<!--app-html-->`, appHtml);

//       res.status(200).set({ "Content-Type": "text/html" }).end(html);
//     } catch (e) {
//                 // @ts-ignore
//       !isProd && vite.ssrFixStacktrace(e);
//                       // @ts-ignore
//       console.log(e.stack);
//                       // @ts-ignore
//       res.status(500).end(e.stack);
//     }
//   });
//           // @ts-ignore
//   return { app, vite };
// }

// if (!isTest) {
//                   // @ts-ignore
//   createServer().then(({ app }) =>
//     app.listen(5173, () => {
//       console.log("http://localhost:5173");
//     })
//   );
// }

// import express from "express";
// import fs from "fs";
// import path from "path";
// import { fileURLToPath } from "url";
// import renderApp from "./src/entry-server";
// import { createServer as createViteServer } from "vite";

// const __dirname = path.dirname(fileURLToPath(import.meta.url));

// const PORT = process.env.PORT || 3001;

// const html = fs
//   .readFileSync(path.resolve(__dirname, "./dist/client/index.html"))
//   .toString();

// const parts = html.split("not rendered");

// const app = express();

// app.use(
//   "/assets",
//   express.static(path.resolve(__dirname, "./dist/client/assets"))
// );
// app.use((req, res) => {
//   res.write(parts[0]);
//   const stream = renderApp(req.url, {
//     onShellReady() {
//       stream.pipe(res);
//     },
//     onShellError() {
//       // do error handling
//     },
//     onAllReady() {
//       res.write(parts[1]);
//       res.end();
//     },
//      // @ts-ignore
//     onError(err) {
//       console.error(err);
//     },
//   });
// });

// console.log(`listening on http://localhost:${PORT}`);
// app.listen(PORT);

import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import ReactDOMServer from "react-dom/server";
// import { createServer as createViteServer } from "vite";
import { vitest } from "vitest";
// @ts-ignore

// vite.ssrLoadModule
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3001;
const _createServer = async () => {
  const app = express();
  const cwd = process.cwd();
  const vite = await (
    await import("vite")
  ).createServer({
    // root.process.cwd(),
    root: cwd,
    server: {
      middlewareMode: true,
      hmr: true,
      // watch: {
      //   // During tests we edit the files too fast and sometimes chokidar
      //   // misses change events, so enforce polling for consistency
      //   usePolling: true,
      //   interval: 100,
      // },
    },
    appType: "custom",
    // hmr: {

    // }
    // hmr: {
    //   port: hmrPort,
    // },
  });
  app.use(vite.middlewares);
  app.use("*", async (req, res) => {
    try {
      const url = req.originalUrl;
      let template = fs.readFileSync(
        path.resolve(__dirname, "./index.html"),
        "utf-8"
      );
      template = await vite.transformIndexHtml(url, template);
      const html = template.split(`<!--app-html-->`);
      // console.log(html);
      // res.write(parts[0]);
      const { render } = await vite.ssrLoadModule("./src/entry-server.tsx");
      const stream: ReactDOMServer.PipeableStream = render(url, {
        // bootstrapModules: ["./src/entry-client.tsx"],
        onShellReady() {
          const firstPartData = html[0];
          res.write(firstPartData);
          stream.pipe(res);
        },
        onAllReady() {
          const restPartData = html.join("");
          res.write(restPartData);
          // res.end();
          // stream!.pipe(res);
        },
        onError(err) {
          console.error(err);
        },
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        vite.ssrFixStacktrace(e);
        console.error(e);
        res.status(500).end(e.message);
      }
    }
  });
  app.listen(PORT);
  console.log(`listening on http://localhost: ${PORT}`);
};
_createServer();
