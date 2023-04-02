import { IProduct } from "../constants/constants";

const Card = (props: IProduct) => {
  return (
    <li className="list-tem item">
      <span className="item__name">{props.title}</span>
      <span className="item__price">{props.price}</span>
      <div className="item__image-wrapper image-wrapper">
        <img
          src={props.images[0]}
          alt="product"
          className="image-wrapper__img"
        />
      </div>
      <div className="item__information">
        <span>Category: {props.category}</span>
        <span>Price: {props.price}</span>
        <span>Rating: {props.rating}</span>
        <span>Brand: {props.brand}</span>
        <span>Discount: {props.discountPercentage}%</span>
        <span>Stock: {props.stock}</span>
      </div>
      <div className="item__buttons-wrapper"></div>
    </li>
  );
};

export default Card;
