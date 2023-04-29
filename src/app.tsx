import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/main";
import { AboutPage } from "./pages/about";
import { NotFound } from "./pages/404";
import { FormPage } from "./pages/form";
import { Layout } from "./components/layout";
import "./styles/style.scss";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="form" element={<FormPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
