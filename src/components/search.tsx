import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { SearchFormData, SearchFormProps } from "../constants/constants";

const SearchForm = (props: SearchFormProps) => {
  let value: string;
  const { register, handleSubmit } = useForm<SearchFormData>();
  const submitForm = (data: SearchFormData) => {
    localStorage.setItem("search", data.search);
    props.setQuery(data.search);
  };

  const changeStateSearchValue = (event: ChangeEvent) => {
    if (!(event.target instanceof HTMLInputElement)) return;
    const { target } = event;
    value = target.value;
    props.setSearchValue(value);
  };

  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={handleSubmit(submitForm)}>
        <input
          type="search"
          placeholder="Search for characters"
          {...register("search", {
            onChange: changeStateSearchValue,
            value: props.searchValue,
          })}
          data-testid="search"
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
