import { ChangeEvent, Component } from "react";
import { tsQuerySelector } from "../constants/function";

// import ReactDOM from "react-dom/client";
// import { useState } from "react";
type MyProps = object;
type MyState = { value: string };

class SearchFrom extends Component<{ name: string }, { value: string }> {
  // value;

  constructor(props) {
    super(props);
    this.state = localStorage.getItem("search")
      ? { value: localStorage.getItem("search") }
      : { value: "" };
  }

  // value = localStorage.getItem("search") ? localStorage.getItem("search") : "";

  saveToLocalStorage(event: ChangeEvent): void {
    //convert input text to lower case
    if (!(event.target instanceof HTMLInputElement)) return;
    const { target } = event;
    this.setState({ value: target.value });
    // this.value = ;
    localStorage.setItem("search", this.state.value);
    // if (!e) return;
    // if (e != null) {
    // }
    // setInputText(lowerCase);
  }
  render() {
    return (
      <div className="form-wrapper">
        <div className="form">
          <input
            type="search"
            className="form-search"
            onChange={this.saveToLocalStorage}
            placeholder="Search products"
            value={this.state.value}
          />
          <button>Search</button>
        </div>
      </div>
    );
  }
}

export default SearchFrom;
