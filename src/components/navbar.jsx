import { Link, NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="container-nav">

    <div className="panel-bg">

      <div className="nav-links">

        <span className="Bookstore-CMS Text-Style-3">
          Bookstore CMS
        </span>

        <Link to="/">
          <span className="items">
            BOOKS
          </span>

        </Link>

        <NavLink to="/Categories">
          <span className="items categories">
            CATEGORIES
          </span>
        </NavLink>

      </div>

      <img className="user-icon" src="../../public/128-1280406_view-user-icon-png-user-circle-icon-png.png" alt="img" />

    </div>
  </nav>
);

export default Navbar;
