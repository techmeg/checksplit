import React from 'react';
import './Nav.css';
import Button from '../Button/Button';
import {Link} from 'react-router-dom';

function Nav () {
  
    return(
        <nav className="nav">
          <ul className="nav_list">
            <Link to='/even'>
              <Button id="/pages/even" value="Even Steven"/>
            </Link>
            <Link to='/driver'>
              <Button id="/pages/driver" value="Designated Driver"/>
            </Link>
            <Link to='/kids'>
              <Button id="kids" value="Kids Half"/>
            </Link>
          </ul>
        </nav>
    )
}

export default Nav