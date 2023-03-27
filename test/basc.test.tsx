import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/dom";
import React from "react";
import { describe, test, expect, it } from "vitest";
import App from "../src/app";
import Layout from "../src/components/layout";
import SearchForm from "../src/components/search";

describe("router test", () => {
  test("About page is rendering", async () => {
    render(<App />);
    const user = userEvent.setup();
    expect(screen.getByTestId("header")).toBeDefined;
    await user.click(screen.getByText(/about/i));
    expect(screen.getByText(/This should be information about us/)).toBeDefined;
  });
});

describe("router test", () => {
  test("Form page is rendering", async () => {
    render(<App />);
    const user = userEvent.setup();
    expect(screen.getByTestId("header")).toBeDefined;
    await user.click(screen.getByText("Form"));
    expect(screen.getByText(/Country/)).toBeDefined;
  });
});

describe("test search button", () => {
  it("render search button"),
    () => {
      render(<App />);
      expect(screen.getByRole("button")).toHaveTextContent("Search");
    };
});

describe("test search button", () => {
  it("render NavLink"),
    () => {
      render(<Layout />);
      expect(screen.getByText("home")).toBeInTheDocument;
    };
});

describe("Search input tests", () => {
  it("render Search input component", () => {
    render(<SearchForm />);
    const searchInput = screen.getByPlaceholderText(
      "Search products"
    ) as HTMLInputElement;
    expect(searchInput.placeholder).toBe("Search products");
  });
  it("Search input display what was written", () => {
    render(<SearchForm />);
    const searchInput = screen.getByTestId(
      "searchForm-input"
    ) as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "Apple" } });
    expect(searchInput.value).toBe("Apple");
  });
  it("Save Search input value in localStorage", () => {
    render(<SearchForm />);
    const searchInput = screen.getByTestId(
      "searchForm-input"
    ) as HTMLInputElement;
    fireEvent.keyDown(searchInput, { target: { value: "Apple" } });
    expect(window.localStorage.search).toBeDefined;
  });
});
