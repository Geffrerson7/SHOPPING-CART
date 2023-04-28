import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="gradient-custom">
      <nav>
        <Link to="/" className="text-light">Home</Link>
        <a href="#" className="text-light">About</a>
        <Link to="/cart" className="text-light">Ir al Carrito</Link>
      </nav>
    </header>
  );
}