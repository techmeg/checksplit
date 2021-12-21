import './Header.css'
import {Link} from 'react-router-dom'

function Header (props) {
    return(
        <header className={props.theme}>
         <Link to="/" className="logo">S / $</Link>
      </header>
    )
}

export default Header;