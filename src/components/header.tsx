import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header" data-testid="header">
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/about" className="nav-link">
        About
      </NavLink>
      <NavLink to="/form" className="nav-link">
        Form
      </NavLink>
    </header>
  );
};
