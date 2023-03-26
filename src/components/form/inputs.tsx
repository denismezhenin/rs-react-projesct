import { Component } from "react";
import { FormInputProps } from "../../constants/constants";
import { country_list } from "./countyList";

export class FirstName extends Component<FormInputProps> {
  render() {
    const error = this.props ? this.props.message : null;
    return (
      <div className="">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          className={error ? "invalid" : ""}
        />
        <p className="error">{error ? error : null}</p>
      </div>
    );
  }
}

export class SecondName extends Component<FormInputProps> {
  render() {
    const error = this.props ? this.props.message : null;
    return (
      <div>
        <label htmlFor="secondName">Second Name</label>
        <input
          type="text"
          name="secondName"
          className={error ? "invalid" : ""}
        />
        <p className="error">{error ? error : null}</p>
      </div>
    );
  }
}

export class Country extends Component<FormInputProps> {
  countries = country_list.map((el, index) => (
    <option key={index} value={el}>
      {el}
    </option>
  ));
  render() {
    const error = this.props ? this.props.message : null;
    return (
      <div>
        <label htmlFor="country">Country</label>
        <select name="country" className={error ? "invalid" : ""}>
          <option value="">Please choose a country</option>
          {this.countries}
        </select>
        <p className="error">{error ? error : null}</p>
      </div>
    );
  }
}

export class Birthday extends Component<FormInputProps> {
  render() {
    const error = this.props ? this.props.message : null;
    return (
      <div>
        <label htmlFor="birthday">Your birthday</label>
        <input type="date" name="birthday" className={error ? "invalid" : ""} />
        <p className="error">{error ? error : null}</p>
      </div>
    );
  }
}

export class Sex extends Component<FormInputProps> {
  render() {
    const error = this.props ? this.props.message : null;
    return (
      <div>
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          name="sex"
          value="male"
          className={error ? "invalid" : ""}
        />
        <label htmlFor="female">Female</label>
        <input
          type="radio"
          name="sex"
          value="female"
          className={error ? "invalid" : ""}
        />
        <p className="error">{error ? error : null}</p>
      </div>
    );
  }
}

export class Agreement extends Component<FormInputProps> {
  render() {
    const error = this.props ? this.props.message : null;
    return (
      <div>
        <label htmlFor="agree">I consent to my personal data</label>
        <input type="checkbox" name="agree" />
        <p className="error">{error ? error : null}</p>
      </div>
    );
  }
}

export class FileUpload extends Component<FormInputProps> {
  render() {
    const error = this.props ? this.props.message : null;
    return (
      <div>
        <label htmlFor="file">Upload a picture</label>
        <input
          type="file"
          name="file"
          accept="image/*"
          className={error ? "invalid" : ""}
        />
        <p className="error">{error ? error : null}</p>
      </div>
    );
  }
}
