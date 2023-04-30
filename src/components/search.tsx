import { useForm } from "react-hook-form";
import { SearchFormData, SearchFormProps } from "../constants/constants";
import { useAppDispatch } from "../store/reduxHooks";
import { setStateSearchValue } from "../store/searchSlice";

export const SearchForm = (props: SearchFormProps) => {
  const { register, handleSubmit } = useForm<SearchFormData>();
  const dispatch = useAppDispatch();

  const submitForm = (data: SearchFormData) => {
    dispatch(setStateSearchValue(data.search));
  };

  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={handleSubmit(submitForm)}>
        <input
          type="search"
          placeholder="Search for characters"
          {...register("search", {
            value: props.searchValue,
          })}
          data-testid="search"
        />
        <button>Search</button>
      </form>
    </div>
  );
};
