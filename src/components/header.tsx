import { NavLink } from "react-router-dom";
import { HEADER_NAV } from "../constants/UI";

export const Header = () => {
  return (
    <header className="header" data-testid="header">
      <NavLink to="/" className="nav-link">
        {HEADER_NAV.HOME}
      </NavLink>
      <NavLink to="/about" className="nav-link">
        {HEADER_NAV.ABOUT}
      </NavLink>
      <NavLink to="/form" className="nav-link">
        {HEADER_NAV.FORM}
      </NavLink>
    </header>
  );
};
