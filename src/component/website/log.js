import { NavLink } from "react-router-dom";

const Log = () => {
  return (
    <>
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/signin">
            Signin
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/signup">
            Signup
          </NavLink>
        </li>
      </ul>
    </>
  );
};
export default Log;
