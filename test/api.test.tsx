import "@testing-library/dom";
import React from "react";
import { describe, test, expect, it } from "vitest";
import { SearchCardBig } from "../src/components/searchCardBig";
import { MainPage } from "../src/pages/main";
import { cleanup } from "@testing-library/react";
import { renderWithProviders } from "./test-utils";
import { screen } from "@testing-library/react";

describe("Character big card", () => {
  it("renders card information correctly correctly", async () => {
    renderWithProviders(<SearchCardBig id={"1"} setPopUP={null} />);
    await screen.findByText(/Morty Smith/);
  });
});

describe("Main page", () => {
  it("renders small character cards correctly", async () => {
    renderWithProviders(<MainPage />);
    await screen.findByText(/Toxic Rick/);
    expect(await screen.findByText(/Toxic Rick/)).toBeDefined();
  });
});

describe("Character big card with bad id", () => {
  cleanup();
  test("renders error with bad request", async () => {
    await renderWithProviders(<SearchCardBig id={"0"} setPopUP={null} />);
    expect(await screen.findByText(/There is no such results/)).toBeDefined();
  });
});
