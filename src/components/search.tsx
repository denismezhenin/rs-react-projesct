import { SearchFormData } from "../constants/constants";
import { useForm } from "react-hook-form";
import { Input } from "./form/inputs";

const SearchForm = () => {
  const value = localStorage.getItem("search")
    ? localStorage.getItem("search")
    : "";

  const { register, handleSubmit } = useForm<SearchFormData>();

  const onSubmit = (data: SearchFormData) => {
    if (data.search) {
      localStorage.setItem("search", data.search);
    }
  };

  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Search products"
          name="search"
          register={{
            ...register("search", {
              required: "Can't search empty value",
              value: value,
            }),
          }}
          type="search"
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
