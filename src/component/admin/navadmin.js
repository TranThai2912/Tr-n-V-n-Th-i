import { NavLink } from "react-router-dom";

export const Nav = () => {
    return (
       <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse"
      >
        <div className="position-sticky pt-3 ">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink className="nav-link " to="/admin">
                <span data-feather="shopping-cart" />
                Products
              </NavLink>
            </li>
  
            <li className="nav-item ">
              <NavLink className="nav-link" to="/admin/category">
                <span data-feather="shopping-cart"/>
                Category
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
  