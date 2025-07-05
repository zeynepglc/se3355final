import { Link, useLocation } from "react-router-dom";
import "../styles.scss";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>Anasayfa</Link>
      <Link to="/movies" className={location.pathname === "/movies" ? "active" : ""}>Filmler</Link>
      <Link to="/watchlist" className={location.pathname === "/watchlist" ? "active" : ""}>İzleme Listem</Link>
      <Link to="/login" className={location.pathname === "/login" ? "active" : ""}>Giriş</Link>
      <Link to="/register" className={location.pathname === "/register" ? "active" : ""}>Kayıt</Link>
    </nav>
  );
};

export default Navbar;
