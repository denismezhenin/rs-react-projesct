import SearchForm from "../components/search";
import { useEffect, useState } from "react";
import { getCharacters } from "../utils/api";
import SearchCard from "../components/searchCard";
import { PopUP } from "../components/popUp";
import SearchCardBig from "../components/searchCardBig";
import { Spinner } from "../components/spinner";
import { AllCharacters } from "../constants/constants";
import { PAGES } from "../constants/UI";
import { useGetCharactersQuery } from "../store/API";
const MainPage = () => {
  const value = (
    localStorage.getItem("search") ? localStorage.getItem("search") : ""
  ) as string;
  // const [data, setData] = useState<AllCharacters>();
  const [searchValue, setSearchValue] = useState(value);
  // const [isError, setIsError] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState(value);
  const [childrenId, setChildrenID] = useState("0");
  const [popUp, setPopUp] = useState(false);

  const { data, isLoading, isError } = useGetCharactersQuery(query);
  console.log(data);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     // try {
  //     //   setData(undefined);
  //     //   setIsLoading(true);
  //     //   setIsError(false);
  //     //   const data = await getCharacters(query);
  //     //   setData(data);
  //     // } catch (err) {
  //     //   setIsError(true);
  //     // }
  //     // setIsLoading(false);
  //   };
  //   fetchData();
  // }, [query]);

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
      <SearchForm
        setSearchValue={setSearchValue}
        setQuery={setQuery}
        searchValue={searchValue}
      />
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
