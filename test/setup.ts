import { fetch, Headers, Request, Response } from "cross-fetch";

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

import "@testing-library/jest-dom";
import { server } from "./mocks/server";
import { characterAPI } from "../src/store/API";
import setupStore from "../src/store/index";

const store = setupStore({});

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

afterEach(() => {
  server.resetHandlers();
  store.dispatch(characterAPI.util.resetApiState());
});

afterAll(() => server.close());
