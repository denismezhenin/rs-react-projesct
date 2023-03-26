import { Component } from "react";
import { productItems } from "../productItems";
import Card from "../components/card";
import SearchForm from "../components/search";
import FormLayout from "../components/form/formLayout";

class MainPage extends Component {
  // cards = productItems.products.map((item) => {
  //   return <Card key={item.id} {...item} />;
  // });

  render() {
    return (
      <div className="main">
        <FormLayout />
      </div>
    );
  }
}

export default MainPage;