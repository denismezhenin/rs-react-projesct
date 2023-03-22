import { Component } from "react";
import { IProduct } from "../constants/constants";

class Card extends Component<IProduct> {
  render() {
    return (
      <li className="list-tem item">
        <span className="item__name">{this.props.title}</span>
        <span className="item__price">{this.props.price}</span>
        <div className="item__image-wrapper image-wrapper">
          <img
            src={this.props.images[0]}
            alt="product"
            className="image-wrapper__img"
          />
        </div>
        <div className="item__information">
          <span>Category: {this.props.category}</span>
          <span>Price: {this.props.price}</span>
          <span>Rating: {this.props.rating}</span>
          <span>Brand: {this.props.brand}</span>
          <span>Discount: {this.props.discountPercentage}%</span>
          <span>Stock: {this.props.stock}</span>
        </div>
        <div className="item__buttons-wrapper"></div>
      </li>
    );
  }
}

export default Card;
