import { Component } from "react";
// import { IProduct } from "../../constants/constants";

class FormCard extends Component {

  render() {
    return (
      <li className="list-tem item">
        <span className="item__name">Name:
          {this.props.firstName} {this.props.secondName}
        </span>
        <span className="item__price">Sex: {this.props.sex}</span>
        <div className="item__image-wrapper image-wrapper">
          <img
            src={this.props.image}
            alt="product"
            className="image-wrapper__img"
          />
        </div>
        <div className="item__information">
          <span>Country: {this.props.country}</span>
          <span>Birthday: {this.props.birthday}</span>
          <span>Agreement: {this.props.agree ? "yes" : "no"}</span>
          {/* <span>Brand: {this.props.brand}</span>
          <span>Discount: {this.props.discountPercentage}%</span>
          <span>Stock: {this.props.stock}</span> */}
        </div>
        <div className="item__buttons-wrapper"></div>
      </li>
    );
  }
}

export default FormCard;
