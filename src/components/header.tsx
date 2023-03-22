import React from "react";
import { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Main from "../pages/main";
import About from "../pages/about";
import NotFound from "../pages/404";

export class Header extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        ;
      </>
    );
  }
}
