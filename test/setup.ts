import { fetch, Headers, Request, Response } from "cross-fetch";

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

// import { server } from "./mocks/server";

// beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());
import "@testing-library/jest-dom";
import { server } from "./mocks/server";
import {
  characterAPI,
  useGetCharactersQuery,
  useGetParticularCharacterQuery,
} from "../src/store/API";
import setupStore from "../src/store/index";

const store = setupStore({});

// Establish API mocking before all tests.
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
  server.resetHandlers();
  // This is the solution to clear RTK Query cache after each test
  store.dispatch(characterAPI.util.resetApiState());
});

// Clean up after the tests are finished.
afterAll(() => server.close());
