import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/dom";
import React from "react";
import { describe, test, expect, it, vi } from "vitest";
import { App } from "../src/app";
import { Layout } from "../src/components/layout";
import { FormPage } from "../src/pages/form";
import { FormCard } from "../src/components/form/formCard";
import * as reduxHooks from "react-redux";
import { SearchForm } from "../src/components/search";
import { FormLayout } from "../src/components/form/formLayout";
import * as searchActions from "../src/store/searchSlice";
import * as formActions from "../src/store/formSlice";

vi.mock("react-redux");
const mockDispatch = vi.spyOn(reduxHooks, "useDispatch");
const mockSelector = vi.spyOn(reduxHooks, "useSelector");

describe("test search button", () => {
  it("render search button"),
    () => {
      render(<App />);
      expect(screen.getByRole("button")).toHaveTextContent("Search");
    };
  it("render search input with value from redux store"),
    () => {
      mockSelector.mockReturnValue("rick");
      render(<App />);
      expect(screen.getByRole("button")).toHaveTextContent("rick");
    };
});

describe("router test", () => {
  it("Form page is rendering"),
    async () => {
      render(<App />);
      const user = userEvent.setup();
      expect(screen.getByTestId("header")).toBeDefined;
      expect(screen.getByText("2023")).toBeDefined;
      expect(screen.getByRole("footer")).toBeDefined;
      expect(screen.getByRole("header")).toBeDefined;
      await user.click(screen.getByText("FORM"));
      expect(screen.getByText(/Female/)).toBeDefined;
    };
});
describe("router test", () => {
  it("About page is rendering"),
    async () => {
      render(<App />);
      const user = userEvent.setup();
      await user.click(screen.getByText(/about/i));
      expect(screen.getByText(/This should be information about us/))
        .toBeDefined;
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
    render(<SearchForm searchValue="" />);
    const searchInput = screen.getByPlaceholderText(
      "Search for characters"
    ) as HTMLInputElement;
    expect(searchInput.placeholder).toBe("Search for characters");
  });
  it("Search input display what was written", () => {
    render(<SearchForm searchValue="" />);
    const searchInput = screen.getByTestId("search") as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "Apple" } });
    expect(searchInput.value).toBe("Apple");
  });
  it("should use a dispatch in component", () => {
    const dispatch = vi.fn();
    const mockSetSearchValue = vi.spyOn(searchActions, "setStateSearchValue");
    mockDispatch.mockReturnValue(dispatch);
    render(<SearchForm searchValue="" />);
    const searchInput = screen.getByTestId("search") as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "rick" } });
    expect(searchInput.value).toBe("rick");
    fireEvent.click(screen.getByRole("button"));
    expect(dispatch).toHaveBeenCalled;
    expect(mockSetSearchValue).toHaveBeenCalled;
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

describe("Form page", () => {
  const mockUser = {
    firstName: "Dzianis",
    secondName: "Miazhenin",
    country: "Belarus",
    sex: "male",
    birthday: "2023-03-22",
    agree: "yes",
    image: "home.png",
  };
  const mockState = [mockUser];
  it("renders form card correctly", () => {
    render(<FormCard {...mockUser} />);
    expect(screen.getByText(/Dzianis/)).toBeDefined;
    expect(screen.getByText(/Country: Belarus/)).toBeDefined;
    expect(screen.getByText(/Birthday: 2023-03-22/)).toBeDefined;
    expect(screen.getByText(/Sex: male/)).toBeDefined;
    const img = screen.getByRole("img") as HTMLImageElement;
    expect(img.src).toContain("home.png");
  });
  it("renders form page with a card from a redux store correctly", () => {
    mockSelector.mockReturnValue(mockState);
    render(<FormLayout />);
    expect(screen.findByText(/Dzianis/)).toBeDefined;
    expect(screen.findByText(/Country: Belarus/)).toBeDefined;
    expect(screen.findByText(/Birthday: 2023-03-22/)).toBeDefined;
    expect(screen.findByText(/Sex: male/)).toBeDefined;
    expect(screen.findByAltText(/Dzianis/)).toBeDefined;
  });
  it("use dispatch  correctly", () => {
    const dispatch = vi.fn();
    const mockAddUserCard = vi.spyOn(formActions, "addUserCard");
    mockDispatch.mockReturnValue(dispatch);
    render(<FormLayout />);
    fireEvent.click(screen.getByText(/Submit/i));
    expect(dispatch).toHaveBeenCalled;
    expect(mockAddUserCard).toHaveBeenCalled;
  });
});
