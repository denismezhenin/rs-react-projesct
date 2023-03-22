import { ChangeEvent, Component } from "react";
import { MySearchProps } from "../constants/constants";

class SearchForm extends Component<MySearchProps, { value: string | null }> {
  constructor(props: MySearchProps) {
    super(props);
    this.state = localStorage.getItem("search")
      ? { value: localStorage.getItem("search") }
      : { value: "" };
  }

  saveToLocalStorage = (event: ChangeEvent) => {
    if (!(event.target instanceof HTMLInputElement)) return;
    const { target } = event;
    const value = target.value;
    localStorage.setItem("search", value);
    this.setState({ value: value });
  };

  render() {
    return (
      <div className="form-wrapper">
        <div className="form">
          <input
            onChange={this.saveToLocalStorage}
            type="text"
            placeholder="Search products"
            value={this.state.value ? this.state.value : ""}
          />
          <button>Search</button>
        </div>
      </div>
    );
  }
}

export default SearchForm;
