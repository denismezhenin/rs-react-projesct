import { Component } from "react";
import { Outlet, NavLink } from "react-router-dom";

export class Layout extends Component {
  render() {
    return (
      <>
        <header className="header" data-testid="header">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </header>
        <main className="wrapper">
          <Outlet />
        </main>
        <footer></footer>
      </>
    );
  }
}

export default Layout;
