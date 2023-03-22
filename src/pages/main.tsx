import { Component } from "react";
import { productItems } from "../productItems";
import Card from "../components/card";
import SearchForm from "../components/search";
class MainPage extends Component {
  cards = productItems.products.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  render() {
    return (
      <div className="main">
        <SearchForm />
        <ul className="product-list list card-mode">{this.cards}</ul>
      </div>
    );
  }
}

export default MainPage;
