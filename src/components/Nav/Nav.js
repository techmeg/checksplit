import "./Nav.css";
import { Link } from "react-router-dom";
import { Context } from "../../Context";
import { useContext } from "react";

function Nav(props) {
  const { resetData } = useContext(Context);
  return (
    <nav>
      <ul className='nav_list'>
        <li className='nav_link'>
          <Link to='/even' onClick={resetData}>
            Even
          </Link>
        </li>
        <li className='nav_link'>
          <Link to='/driver' onClick={resetData}>
            Driver
          </Link>
        </li>
        <li className='nav_link'>
          <Link to='/kids' onClick={resetData}>
            Kids
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
