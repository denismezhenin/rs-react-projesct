import React, { RefObject } from "react";
import { ChangeEvent, Component } from "react";
import { MySearchProps } from "../../constants/constants";
import FormCard from "./foarmCard";
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

class FormLayout extends Component<Record<string, never>> {
  Form: RefObject<HTMLFormElement>;
  constructor(props: Record<string, never>) {
    super(props);
    this.Form = React.createRef();
    this.state = { cards: [], errors: {} };
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(this.Form.current)
    const formData = new FormData(this.Form.current);
    // const id = this.state.cards
    const card = {
      id: this.state.cards.length,
      sex: "",
    };
    // console.log(formData.entries())
    for (const [key, value] of formData) {
      if (key === "file") {
        // console.log(value.name)
        card["image"] = value.name ? URL.createObjectURL(value) : "";
      } else {
        card[key] = value;
      }
    }
    const error = this.getErrorFields(card)
    console.log(card)
    // console.log(error)
    // console.log(Object.values(error).flat().length)
    if (Object.values(error).flat().length) {
      this.setState((prev) => ({ ...prev, errors: error }));
    } else {
      this.setState((prev) => ({ ...prev }))
      this.state.cards.push(card);
      this.Form.current?.reset();
    }
    // this.setState((prev) => ({ ...prev, errors: error }));
    setTimeout(() => console.log(this.state), 0)
    // // this.state.cards.push(card);
    // // console.log(this.state)
    // this.Form.current?.reset()
    // console.log(card)
    // console.log(this.getErrorFields(card))

    // console.log(data.values())
    // for (const value of data.values()) {
    //   console.log(value)
    //   // console.log(1);
    // }
  };
  // cards = this.state.cards.map((item) => {
  //   return <FormCard key={item.id} {...item} />;
  // });
  getErrorFields = (form) =>
  Object.keys(form).reduce((acc, key) => {
    if (!VALIDATION[key]) return acc;

    const errorsPerField = VALIDATION[key]
      // get a list of potential errors for each field
      // by running through all the checks
      .map((validation) => ({
        isValid: validation.isValid(form[key]),
        message: validation.message,
      }))
      // only keep the errors
      .filter((errorPerField) => !errorPerField.isValid);

    return { ...acc, [key]: errorsPerField };
  }, {});

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} ref={this.Form}>
          {this.state.errors.firstName ? <FirstName {...this.state.errors.firstName} /> : <FirstName /> } 
          {this.state.errors.secondName ? <SecondName {...this.state.errors.secondName} /> : <SecondName /> }
          {this.state.errors.country ? <Country {...this.state.errors.country} /> : <Country /> }  
          {this.state.errors.birthday ? <Birthday {...this.state.errors.birthday} /> : <Birthday /> }  
          {this.state.errors.sex ? <Sex {...this.state.errors.sex} /> : <Sex /> }  
          <Agreement />
          {this.state.errors.image ? <FileUpload {...this.state.errors.image} /> : <FileUpload /> }  
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
// function cards(cards: any, arg1: never[]) {
//   throw new Error("Function not implemented.");
// }
