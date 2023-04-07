import {
  render,
  screen,
  userEvent,
  waitForElementToBeRemoved,
} from "./test-utils";
import "@testing-library/dom";
import React from "react";
import { describe, expect, it } from "vitest";
import SearchCardBig from "../src/components/searchCardBig";
import MainPage from "../src/pages/main";


describe("Character big card", () => {
  it("renders card information correctly correctly", async () => {
    await render(<SearchCardBig id={"1"} setPopUP={null} />);
    expect(await screen.findByText(/Morty Smith/)).toBeDefined();
  });
  it("renders card information correctly correctly", async () => {
    await render(<SearchCardBig id={"0"} setPopUP={null} />);
    expect(await screen.findByText(/There is no such results/)).toBeDefined();
  });
});

describe("Main page", () => {
  it("renders small character cards correctly", async () => {
    await render(<MainPage />);
    expect(await screen.findByText(/Toxic Rick/)).toBeDefined();
  });
});
