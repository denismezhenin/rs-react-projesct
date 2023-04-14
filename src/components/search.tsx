import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { SearchFormData, SearchFormProps } from "../constants/constants";
import { useAppDispatch } from "../store/reduxHooks";
import { setStateSearchValue } from "../store/searchSlice";

const SearchForm = (props: SearchFormProps) => {
  let value: string;
  const { register, handleSubmit } = useForm<SearchFormData>();
  const dispatch = useAppDispatch();

  const submitForm = (data: SearchFormData) => {
    localStorage.setItem("search", data.search);
    dispatch(setStateSearchValue(data.search));
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
            // onChange: changeStateSearchValue,
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
