import { ChangeEvent, useEffect, useState } from "react";

const SearchForm = () => {
  const value = (
    localStorage.getItem("search") ? localStorage.getItem("search") : ""
  ) as string;

  const [state, setState] = useState(value);

  useEffect(() => {
    return localStorage.setItem("search", state);
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const changeStateValue = (event: ChangeEvent) => {
    if (!(event.target instanceof HTMLInputElement)) return;
    const { target } = event;
    const value = target.value;
    setState(value);
  };

  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={onSubmit}>
        <input
          onChange={changeStateValue}
          type="search"
          placeholder="Search products"
          value={state}
          data-testid="search"
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
