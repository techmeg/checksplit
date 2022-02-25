import React from "react";
import "./ButtonGroup.css";
import { Link } from "react-router-dom";

function ButtonGroup() {
  return (
    <div className='btn-group'>
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
    </div>
  );
}

export default ButtonGroup;
