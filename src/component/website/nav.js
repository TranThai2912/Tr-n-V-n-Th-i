import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink
            exact
            className="nav-link active"
            activeClassName="active"
            aria-current="page"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" aria-current="page" exact to="/product">
            Product
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" aria-current="page" exact to="/contact">
            Contact with us
          </NavLink>
        </li>
      </ul>
    </>
  );
};
export default Nav;
