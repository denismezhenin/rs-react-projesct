import { Routes, Route, BrowserRouter } from "react-router-dom";
import {MainPage} from "./pages/main";
import {AboutPage} from "./pages/about";
import {NotFound} from "./pages/404";
import {FormPage} from "./pages/form";
import {Layout} from "./components/layout";

export const App = () => {
  return (
    // <html>
    //   <head>
    //     <title>Server Rendered App</title>
    //   </head>
    //   <body>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="form" element={<FormPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>

    //   </body>
    // </html>
  );
};

