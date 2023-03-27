import React from "react";
import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/main";
import About from "../pages/about";
import NotFound from "../pages/404";
import FormPage from "../pages/form";

export class Header extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        ;
      </>
    );
  }
}
