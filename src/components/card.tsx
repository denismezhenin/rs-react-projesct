import { IProduct } from "../constants/constants";
import { PRODUCT_CARD } from "../constants/UI";

export const Card = (props: IProduct) => {
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
        <span>
          {PRODUCT_CARD.Category}
          {props.category}
        </span>
        <span>
          {PRODUCT_CARD.Price}
          {props.price}
        </span>
        <span>
          {PRODUCT_CARD.Rating}
          {props.rating}
        </span>
        <span>
          {PRODUCT_CARD.Brand}
          {props.brand}
        </span>
        <span>
          {PRODUCT_CARD.Discount}
          {props.discountPercentage}%
        </span>
        <span>
          {PRODUCT_CARD.Stock}
          {props.stock}
        </span>
      </div>
      <div className="item__buttons-wrapper"></div>
    </li>
  );
};

