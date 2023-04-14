import SearchForm from "../components/search";
import { useState } from "react";
import SearchCard from "../components/searchCard";
import { PopUP } from "../components/popUp";
import SearchCardBig from "../components/searchCardBig";
import { Spinner } from "../components/spinner";
import { PAGES } from "../constants/UI";
import { useGetCharactersQuery } from "../store/API";
import { useAppSelector } from "../store/reduxHooks";
const MainPage = () => {
  const [childrenId, setChildrenID] = useState("0");
  const [popUp, setPopUp] = useState(false);

  const query = useAppSelector((state) => state.searchValue.searchValue);
  const { data, isLoading, isError } = useGetCharactersQuery(query);

  const cards = data ? (
    <ul className="product-list list card-mode">
      {data.results.map((el) => (
        <SearchCard
          key={el.id}
          {...el}
          setChildrenID={setChildrenID}
          setPopUp={setPopUp}
        />
      ))}
    </ul>
  ) : null;

  return (
    <>
      <SearchForm searchValue={query} />
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <span className="error">{PAGES.ERROR}</span>
      ) : (
        cards
      )}
      {popUp && (
        <PopUP status={popUp} setPopUP={setPopUp}>
          {<SearchCardBig id={childrenId} setPopUP={setPopUp} />}
        </PopUP>
      )}
    </>
  );
};

export default MainPage;
