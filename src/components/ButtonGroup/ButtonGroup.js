import React from "react";
import "./ButtonGroup.css";
import { Link } from "react-router-dom";

function ButtonGroup() {
  return (
    <ul className='btn-group'>
      <li className='btn'>
        <Link to='/even'>Even Steven</Link>
      </li>
      <li className='btn'>
        <Link to='/driver'>Designated Driver</Link>
      </li>
      <li className='btn'>
        <Link to='/kids'>Kids Pay Half</Link>
      </li>
    </ul>
  );
}

export default ButtonGroup;
