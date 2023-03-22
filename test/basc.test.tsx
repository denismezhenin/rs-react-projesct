import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { describe, test, expect, it } from "vitest";
import App from "../src/app";

// describe("router test", () => {
//   test("Full app rendering/navigating", async () => {
//     render(<App />);
//     // const user = userEvent.setup();
//     // expect(screen.getByTestId("header")).toBeDefined;
//     // await user.click(screen.getByText(/about/));
//     // expect(screen.getByText(/This should be information about us/)).toBeDefined;
//   });
// });
