import { IFormCard } from "../../constants/constants";
import { USER_CARD } from "../../constants/UI";

const FormCard = (props: IFormCard) => {
  return (
    <li className="list-tem item">
      <span className="item__name">
        {USER_CARD.NAME}
        {props.firstName} {props.secondName}
      </span>
      <span className="item__price">Sex: {props.sex}</span>
      <div className="item__image-wrapper image-wrapper">
        <img src={props.image} alt="product" className="image-wrapper__img" />
      </div>
      <div className="item__information">
        <span>
          {" "}
          {USER_CARD.COUNTRY}
          {props.country}
        </span>
        <span>
          {" "}
          {USER_CARD.BIRTHDAY}
          {props.birthday}
        </span>
        <span>
          {" "}
          {USER_CARD.AGREE}
          {props.agree ? "yes" : "no"}
        </span>
      </div>
      <div className="item__buttons-wrapper"></div>
    </li>
  );
};

export default FormCard;
