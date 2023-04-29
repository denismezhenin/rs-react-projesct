import express from "express";
import ReactDOMServer from "react-dom/server";

const PORT = process.env.PORT || 3001;
const _createServer = async () => {
  const app = express();
  const cwd = process.cwd();
  const vite = await (
    await import("vite")
  ).createServer({
    root: cwd,
    server: {
      middlewareMode: true,
      hmr: true,
    },
    appType: "custom",
  });
  app.use(vite.middlewares);
  const { render } = await vite.ssrLoadModule("./src/entry-server.tsx");
  app.use("/static", express.static("static"));

  app.use("*", async (req, res) => {
    try {
      const url = req.originalUrl;
      const stream: ReactDOMServer.PipeableStream = await render(url, {
        onShellReady() {
          res.setHeader("content-type", "text/html");
          stream.pipe(res);
        },
        onError(err) {
          console.error(err);
        },
        bootstrapModules: ["./src/entry-client.tsx"],
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
