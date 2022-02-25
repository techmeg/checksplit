import React from "react";
import "./ButtonGroup.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className='nav'>
      <ul className='nav_list'>
        <li className='btn'>
          <Link to='/even'>Even Steven</Link>
        </li>
        <li className='btn'>
          <Link to='/driver'>Designated Driver</Link>
        </li>
        <li className='btn'>
          <Link to='/kids'>Kids Half</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
