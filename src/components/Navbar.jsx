import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">🎬 CinePulse</h2>
      <div className="navbar-search">
        <input type="text" placeholder="Search movies..." />
      </div>
    </nav>
  );
}
