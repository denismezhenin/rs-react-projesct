import { setupServer } from "msw/node";
import { handlers } from "./hendlers";

export const server = setupServer(...handlers);
