import { Link, useHistory } from "react-router-dom";
import { isauthenticate, signout } from "../../auth";
import FilterSearch from "./filterSearch";


export default function Header(props) {
  const { username } = isauthenticate()
  const history = useHistory();

  return (
    <header className="navbar navbar-light sticky-top bg-white flex-md-nowrap p-0 shadow">
      <Link  className="navbar-brand col-md-3 col-lg-2 me-0 px-3 text-center" to="/admin">
        Apple
      </Link>        
      <FilterSearch />
      <span className="text-dark ms-3 inline-block ">{username ? username : ''}</span>
      <div className="navbar-nav">
        <div className="nav-item text-nowrap">
          <a className="nav-link px-3" href="#" onClick={() => signout(() => history.push("/"))}>
            Sign out
          </a>
        </div>
      </div>
    </header>
  );
}
