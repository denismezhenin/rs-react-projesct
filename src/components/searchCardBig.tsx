import { getCharacterByID } from "../utils/api";
import { useEffect, useState } from "react";
import { Spinner } from "./spinner";
import { Character, SearchCardBigProps } from "../constants/constants";
import { PAGES, SEARCH_CARD } from "../constants/UI";
import { useGetParticularCharacterQuery } from "../store/API";

const SearchCardBig = (props: SearchCardBigProps) => {
  // const [isError, setIsError] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  // const [card, setCard] = useState<Character>();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setIsError(false);
  //       const data = await getCharacterByID(props.id);
  //       setCard(data);
  //     } catch (err) {
  //       setIsError(true);
  //     }
  //     setIsLoading(false);
  //   };
  //   fetchData();
  // });

  const { data, isLoading, isError } = useGetParticularCharacterQuery(props.id);
  // const card = null
  // console.log(data)

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : data ? (
        <div className="item_big_card">
          <span className="item_big_card__name">{data.name}</span>
          <span className="item_big_card__status">{data.species}</span>
          <div className="item_big_card__image-wrapper image-wrapper">
            <img
              src={data.image}
              alt="character"
              className="image-wrapper__img"
            />
          </div>
          <div className="item_big_card__information">
            <span>
              {SEARCH_CARD.GENDER}
              {data.gender}
            </span>
            <span>
              {SEARCH_CARD.LOCATION}
              {data.location.name}
            </span>
            <span>
              {SEARCH_CARD.STATUS}
              {data.status}
            </span>
            <span>
              {SEARCH_CARD.EPISODES}
              {data.episode.length}
            </span>
          </div>
          <div className="item_big_card__buttons-wrapper"></div>
          <div className="close" onClick={() => props.setPopUP(false)}></div>
        </div>
      ) : isError ? (
        <span className="error">{PAGES.ERROR}</span>
      ) : null}
    </>
  );
};

export default SearchCardBig;
