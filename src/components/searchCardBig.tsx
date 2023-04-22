import { Spinner } from "./spinner";
import { SearchCardBigProps } from "../constants/constants";
import { PAGES, SEARCH_CARD } from "../constants/UI";
import { useGetParticularCharacterQuery } from "../store/API";

export const SearchCardBig = (props: SearchCardBigProps) => {
  const { data, isLoading, isError } = useGetParticularCharacterQuery(props.id);

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

