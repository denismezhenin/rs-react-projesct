import { Component } from "react";
import { country_list } from "./countyList";

export class FirstName extends Component {
  render() {
    const error = this.props ? this.props[0] : null;
    return (
      <>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" />
        <p>{error ? error.message : null}</p>
      </>
    );
  }
}

export class SecondName extends Component {
  render() {
    const error = this.props ? this.props[0] : null;
    return (
      <div>
        <label htmlFor="secondName" >Second Name</label>
        <input type="text" name="secondName"  />
        <p>{error ? error.message : null}</p>
      </div>
    );
  }
}

export class Country extends Component {
  countries = country_list.map((el, index) => (
    <option key={index} value={el}>
      {el}
    </option>
  ));
  render() {
    const error = this.props ? this.props[0] : null;
    return (
      <div>
        <label htmlFor="country">Country</label>
        <select name="country">
          <option value="">Please choose a country</option>
          {this.countries}
        </select>
        <p>{error ? error.message : null}</p>
      </div>
    );
  }
}

export class Birthday extends Component {
  render() {
    const error = this.props ? this.props[0] : null;
    return (
      <div>
        <label htmlFor="birthday">Your birthday</label>
        <input type="date" name="birthday" />
        <p>{error ? error.message : null}</p>
      </div>
    );
  }
}

export class Sex extends Component {
  render() {
    const error = this.props ? this.props[0] : null;
    return (
      <div>
        <label htmlFor="male">Male</label>
        <input type="radio" name="sex" value="male" />
        <label htmlFor="female">Female</label>
        <input type="radio" name="sex" value="female" />
        <p>{error ? error.message : null}</p>
      </div>
    );
  }
}

export class Agreement extends Component {
  render() {
    const error = this.props ? this.props[0] : null;
    return (
      <div>
        <label htmlFor="agree">I consent to my personal data</label>
        <input type="checkbox" name="agree" />
        <p>{error ? error.message : null}</p>
      </div>
    );
  }
}

export class FileUpload extends Component {
  render() {
    const error = this.props ? this.props[0] : null;
    return (
      <div>
        <label htmlFor="file">Upload a picture</label>
        <input type="file" name="file" accept="image/*" />
        <p>{error ? error.message : null}</p>
      </div>
    );
  }
}
