import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/main";
import AboutPage from "./pages/about";
import NotFound from "./pages/404";
import Layout from "./components/layout";

class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </>
    );
  }
}

export default App;
