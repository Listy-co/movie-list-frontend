import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className='nav'>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/add-movie">Add Movie</Link>
    </nav>
  );
}

export default Header;
