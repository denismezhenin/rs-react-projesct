import { ChangeEvent, Component } from "react";
import { MyProps } from "../constants/constants";

class SearchForm extends Component<MyProps, { value: string | null }> {
  constructor(props: MyProps) {
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
            data-testid="searchForm-input"
          />
          <button>Search</button>
        </div>
      </div>
    );
  }
}

export default SearchForm;
