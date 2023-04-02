import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/dom";
import React from "react";
import { describe, test, expect, it } from "vitest";
import App from "../src/app";
import Layout from "../src/components/layout";
import SearchForm from "../src/components/search";
import FormPage from "../src/pages/form";
import FormCard from "../src/components/form/formCard";

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
    expect(screen.getByText(/Female/)).toBeDefined;
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
    const searchInput = screen.getByTestId("search") as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "Apple" } });
    expect(searchInput.value).toBe("Apple");
  });
  it("Save Search input value in localStorage", () => {
    render(<SearchForm />);
    const searchInput = screen.getByTestId("search") as HTMLInputElement;
    fireEvent.keyDown(searchInput, { target: { value: "Apple" } });
    expect(window.localStorage.search).toBeDefined;
  });
});

describe("form test", () => {
  test("Display warning when no data provided", async () => {
    render(<FormPage />);
    const FirstNameInput = screen.getByLabelText("First Name");
    const SecondNameInput = screen.getByLabelText("Second Name");
    const CountryInput = screen.getByTestId("country") as HTMLSelectElement;
    const DateInput = screen.getByLabelText("Your birthday");
    const SexInput = screen.getByLabelText("Male");
    const checkInput = screen.getByLabelText("I consent to my personal data");
    const fileInput = screen.getByTestId("file");
    fireEvent.keyDown(FirstNameInput, { target: { value: "Dzianis" } });
    fireEvent.keyDown(SecondNameInput, { target: { value: "Miazhenin" } });
    fireEvent.change(CountryInput, { target: { value: "Belarus" } });
    fireEvent.keyDown(DateInput, { target: { value: "2023-03-22" } });
    fireEvent.click(SexInput);
    fireEvent.click(checkInput);
    const file = new File(["background"], "background.jpg", {
      type: "image/jpg",
    });
    fireEvent.change(fileInput, {
      target: { files: [file] },
    });
    fireEvent.click(screen.getByText(/Submit/i));
    expect(CountryInput.value).to.equal("Belarus");
  });
});

describe("Form card", () => {
  it("renders form data correctly", () => {
    const mockUser = {
      firstName: "Dzianis",
      secondName: "Miazhenin",
      country: "Belarus",
      sex: "male",
      birthday: "2023-03-22",
      agree: "yes",
      image: "home.png",
    };
    render(<FormCard {...mockUser} />);
    expect(screen.getByText(/Dzianis/)).toBeDefined;
    expect(screen.getByText(/Country: Belarus/)).toBeDefined;
    expect(screen.getByText(/Birthday: 2023-03-22/)).toBeDefined;
    expect(screen.getByText(/Sex: male/)).toBeDefined;
    const img = screen.getByRole("img") as HTMLImageElement;
    expect(img.src).toContain("home.png");
  });
});
