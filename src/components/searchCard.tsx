import { SearchCardProp } from "../constants/constants";

const SearchCard = (props: SearchCardProp) => {
  const handleSubmit = () => {
    props.setChildrenID(String(props.id));
    props.setPopUp(true);
  };
  return (
    <li className="list-tem item" id={String(props.id)} onClick={handleSubmit}>
      <span className="item__name">{props.name}</span>
      <span className="item__price">{props.species}</span>
      <div className="item__image-wrapper image-wrapper">
        <img src={props.image} alt="character" className="image-wrapper__img" />
      </div>
    </li>
  );
};

export default SearchCard;
