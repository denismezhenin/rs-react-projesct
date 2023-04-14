import formReducer, { addUserCard } from "../src/store/formSlice";
import searchReducer, { setStateSearchValue } from "../src/store/searchSlice";
import { describe, expect, it } from "vitest";

const userCard = {
  firstName: "Pit",
  secondName: "Bronson",
  country: "Poland",
  sex: "male",
  birthday: "16-02-1990",
  agree: "yes",
  image: "new-image.jpg",
  id: 1,
};

const initialState = {
  userCards: [],
};

const searchInitialState = {
  searchValue: "",
};

describe("Form slice", () => {
  it("should return default value when passed an empty action", () => {
    const result = formReducer(initialState, { type: "" });
    expect(result).toEqual({ userCards: [] });
  });
  it("should add new user card after addUserCard action", () => {
    const action = { type: addUserCard.type, payload: userCard };
    const result = formReducer(initialState, action);
    expect(result.userCards[0]).toEqual(userCard);
  });
});
describe("Search slice", () => {
  it("should return default value when passed an empty action", () => {
    const result = searchReducer(searchInitialState, { type: "" });
    expect(result).toEqual({ searchValue: "" });
  });
  it("should add search value after setStateSearchValue action", () => {
    const action = { type: setStateSearchValue.type, payload: "rick" };
    const result = searchReducer(searchInitialState, action);
    expect(result.searchValue).toEqual("rick");
  });
});
