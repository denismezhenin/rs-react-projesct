import React, { RefObject } from "react";
import { Component } from "react";
import {
  IFormCard,
  IErrorObject,
  errorObject,
  IValidation,
  IValidatedData,
} from "../../constants/constants";
import FormCard from "./formCard";
import {
  FirstName,
  SecondName,
  Country,
  Birthday,
  Sex,
  FileUpload,
  Agreement,
} from "./inputs";
import { VALIDATION } from "./validation";

class FormLayout extends Component<
  Record<string, never>,
  { cards: Array<IFormCard>; errors: IErrorObject }
> {
  Form: RefObject<HTMLFormElement>;
  constructor(props: Record<string, never>) {
    super(props);
    this.Form = React.createRef();
    this.state = {
      cards: [],
      errors: errorObject,
    };
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!(this.Form.current instanceof HTMLFormElement)) return;
    const formData = new FormData(this.Form.current);
    const card: IFormCard = {
      id: this.state.cards.length,
      sex: "",
      firstName: "",
      secondName: "",
      country: "",
      birthday: "",
      agree: "",
      image: "",
    };
    for (const [key, value] of formData) {
      if (key === "file" && value instanceof File) {
        card["image"] = value.name ? URL.createObjectURL(value) : "";
      } else {
        card[key] = value;
      }
    }
    const error: IErrorObject = this.getErrors(card);
    if (Object.values(error).flat().length) {
      this.setState((prev) => ({ ...prev, errors: error }));
    } else {
      this.setState((prev) => ({ ...prev, errors: errorObject }));
      this.state.cards.push(card);
      this.Form.current?.reset();
      alert("User card has been created");
    }
  };

  getErrors = (form: IFormCard) =>
    Object.keys(form).reduce((acc, key) => {
      if (!VALIDATION[key as keyof typeof VALIDATION]) return acc;
      const errorsPerField = VALIDATION[key as keyof typeof VALIDATION]
        .map((validation: IValidation) => {
          return {
            isValid: validation.isValid(form[key] as string),
            message: validation.message,
          };
        })
        .filter((errorPerField: IValidatedData) => !errorPerField.isValid);

      return { ...acc, [key]: errorsPerField };
    }, {});

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} ref={this.Form} className="form">
          {this.state.errors.firstName!.length > 0 ? (
            <FirstName message={this.state.errors.firstName![0].message} />
          ) : (
            <FirstName message="" />
          )}
          {this.state.errors.secondName!.length > 0 ? (
            <SecondName message={this.state.errors.secondName![0].message} />
          ) : (
            <SecondName message="" />
          )}
          {this.state.errors.country!.length > 0 ? (
            <Country message={this.state.errors.country![0].message} />
          ) : (
            <Country message="" />
          )}
          {this.state.errors.birthday!.length > 0 ? (
            <Birthday message={this.state.errors.birthday![0].message} />
          ) : (
            <Birthday message="" />
          )}
          {this.state.errors.sex!.length > 0 ? (
            <Sex message={this.state.errors.sex![0].message} />
          ) : (
            <Sex message="" />
          )}
          <Agreement message="" />
          {this.state.errors.image!.length > 0 ? (
            <FileUpload message={this.state.errors.image![0].message} />
          ) : (
            <FileUpload message="" />
          )}
          <button>Submit</button>
        </form>
        <ul className="product-list list card-mode">
          {this.state.cards
            ? this.state.cards.map((item) => (
                <FormCard key={item.id} {...item} />
              ))
            : null}
        </ul>
      </>
    );
  }
}

export default FormLayout;
