import { Link } from "react-router-dom";
import '../NavBar/NavBar.css'
const NavBar = () => {
    return (
      <div className='nav-cont'>
        <Link className='nav-link' to='/'>Home</Link>
        <Link className='nav-link' to='/aboutme'>About Me</Link>
        <Link className='nav-link' to='/contactme'>Contact Me</Link>
      </div>
    );
}

export default NavBar;