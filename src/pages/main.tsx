import { productItems } from "../productItems";
import Card from "../components/card";
import SearchForm from "../components/search";
const MainPage = () => {
  const cards = productItems.products.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div className="main">
      <SearchForm />
      <ul className="product-list list card-mode">{cards}</ul>
    </div>
  );
};

export default MainPage;
