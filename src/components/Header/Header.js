import "./Header.css";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav.js";
import { Context } from "../../Context";
import { useContext } from "react";

function Header(props) {
  const { resetData } = useContext(Context);

  return (
    <header className='header'>
      <Link to='/' className='logo' onClick={resetData}>
        Check / Split
      </Link>
      <Nav />
    </header>
  );
}

export default Header;
