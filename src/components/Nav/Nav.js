import "./Nav.css";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav>
      <ul className='nav_list'>
        <li className='nav_link'>
          <Link to='/even'>Even</Link>
        </li>
        <li className='nav_link'>
          <Link to='/driver'>Driver</Link>
        </li>
        <li className='nav_link'>
          <Link to='/kids'>Kids</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
