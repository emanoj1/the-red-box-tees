import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link to="/" className="logo-wrap" aria-label="Go home">
            <img src="/TRBT-Logo-2048x512.png" alt="The Red Box Tees logo" className="logo" />
        </Link>
        <nav className="links">
          <NavLink to="/" end className={({isActive}) => isActive ? "link active" : "link"}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "link active" : "link"}>About</NavLink>
          <a className="btn" href="https://www.redbubble.com/people/theredboxtees/shop" target="_blank" rel="noreferrer">
            Visit The Store
          </a>
        </nav>
      </div>
    </header>
  );
}
