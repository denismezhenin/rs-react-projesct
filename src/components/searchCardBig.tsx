import { getCharacterByID } from "../utils/api";
import { useEffect, useState } from "react";
import { Spinner } from "./spinner";
import { Character, SearchCardBigProps } from "../constants/constants";

const SearchCardBig = (props: SearchCardBigProps) => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [card, setCard] = useState<Character>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsError(false);
        const data = await getCharacterByID(props.id);
        setCard(data);
      } catch (err) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  });

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : card ? (
        <div className="item_big_card">
          <span className="item_big_card__name">{card.name}</span>
          <span className="item_big_card__status">{card.species}</span>
          <div className="item_big_card__image-wrapper image-wrapper">
            <img
              src={card.image}
              alt="character"
              className="image-wrapper__img"
            />
          </div>
          <div className="item_big_card__information">
            <span>Gender: {card.gender}</span>
            <span>Location: {card.location.name}</span>
            <span>Species: {card.status}</span>
            <span>Number of Episodes: {card.episode.length}</span>
          </div>
          <div className="item_big_card__buttons-wrapper"></div>
          <div className="close" onClick={() => props.setPopUP(false)}></div>
        </div>
      ) : isError ? (
        <span className="error">There is no such results</span>
      ) : null}
    </>
  );
};

export default SearchCardBig;
