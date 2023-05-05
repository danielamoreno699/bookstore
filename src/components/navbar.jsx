import { Link, NavLink } from 'react-router-dom';


 const Navbar = () => {
  return (
    <nav className='container-nav'>
    
    <h3>BOOKSTORE</h3>
  
    <div className='nav-links'>
    <li>
    <Link
        className="navbar-brand home-page"
        to="/"
      >
        Books
      </Link>
    </li>
    <li>
    <NavLink
        className="nav-item nav-link"
        to="/Categories"
      >
        Categories
      </NavLink>

    </li>
      
     
    </div>  
    </nav>
  )
}

export default Navbar