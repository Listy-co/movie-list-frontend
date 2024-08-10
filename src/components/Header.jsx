import { Link } from "react-router-dom";
import '../assets/header.css';

const Header = (props) => {
  return (
      <nav className='nav'>
          <Link to="/">
              <div>Movie List!</div>
          </Link>
      </nav>
  );
}

export default Header;
