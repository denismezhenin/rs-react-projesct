import { Provider } from "react-redux";
import setupStore from "./store";

const store = setupStore();

import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { App } from "./app";
import { characterAPI } from "./store/API";
import { HTML } from "./Html";

export async function render(url: string, opts: object) {
  await store.dispatch(characterAPI.endpoints.getCharacters.initiate(""));
  await Promise.all(store.dispatch(characterAPI.util.getRunningQueriesThunk()));
  const final = store.getState();
  const stream = renderToPipeableStream(
    <HTML preloadedState={final}>
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </HTML>,
    opts
  );
  return stream;
}
