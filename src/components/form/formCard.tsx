import { IFormCard } from "../../constants/constants";

const FormCard = (props: IFormCard) => {
  return (
    <li className="list-tem item">
      <span className="item__name">
        Name:
        {props.firstName} {props.secondName}
      </span>
      <span className="item__price">Sex: {props.sex}</span>
      <div className="item__image-wrapper image-wrapper">
        <img src={props.image} alt="product" className="image-wrapper__img" />
      </div>
      <div className="item__information">
        <span>Country: {props.country}</span>
        <span>Birthday: {props.birthday}</span>
        <span>Agreement: {props.agree ? "yes" : "no"}</span>
      </div>
      <div className="item__buttons-wrapper"></div>
    </li>
  );
};

export default FormCard;
