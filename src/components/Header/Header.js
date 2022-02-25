import "./Header.css";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav.js";

function Header(props) {
  return (
    <header className='header'>
      <Link to='/' className='logo'>
        Check / Split
      </Link>
      <Nav />
    </header>
  );
}

export default Header;
