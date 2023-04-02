import { InputProps, SelectProps } from "../../constants/constants";

export const Input = (props: InputProps) => {
  return (
    <>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.type}
        id={props.name}
        className={props.helperText ? "error" : ""}
        value={props.value}
        {...props.register}
        data-testid={props.name}
      />
      {props.helperText && <p className="error">{props.helperText}</p>}
    </>
  );
};

export const SelectInput = (props: SelectProps) => {
  let countries;
  if (props.country_list) {
    countries = props.country_list.map((el, index) => (
      <option
        key={index}
        value={el}
        data-testid={index === 0 ? "select-option" : ""}
      >
        {el}
      </option>
    ));
  }
  return (
    <div>
      <label htmlFor={props.name} aria-labelledby={props.name}>
        {props.label}
      </label>
      <select
        id={props.name}
        data-testid={props.name}
        className={props.helperText ? "error" : ""}
        {...props.register}
      >
        <option value="">Please choose a country</option>
        {countries}
      </select>
      {props.helperText && <p className="error">{props.helperText}</p>}
    </div>
  );
};
