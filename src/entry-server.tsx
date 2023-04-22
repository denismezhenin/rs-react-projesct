// import {
//   renderToPipeableStream,
//   RenderToPipeableStreamOptions,
// } from "react-dom/server";
import { Provider } from "react-redux";
// import { Location } from "react-router-dom";
// import { StaticRouter } from "react-router-dom/server";
// import App from "./app";
import setupStore from "./store";

const store = setupStore();

// export default function render(
//   url: string | Partial<Location>,
//   opts: RenderToPipeableStreamOptions | undefined
// ) {
//   const stream = renderToPipeableStream(
//     <Provider store={store}>
//       <StaticRouter location={url}>
//         <App />
//       </StaticRouter>
//       ,
//     </Provider>,
//     opts
//   );
//   return stream;
// }

import ReactDOMServer, { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { App } from "./app";
import { useAppSelector } from "./store/reduxHooks";
import { characterAPI } from "./store/API";
// @ts-ignore
export function render(url, opts) {
  // const cards = useAppSelector((state) => state.userCards.userCards);
  // console.log(store)
  // const data = await Promise.all(
  //   store.dispatch(characterAPI.util.getRunningQueriesThunk())
  // );
  // console.log(data)
  const stream = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    opts
  );
  return stream;
}
