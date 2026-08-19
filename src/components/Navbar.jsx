import './Navbar.css';

function Navbar({ searchTerm, onSearchChange }) {
  const handleChange = (event) => {
    const sanitizedValue = event.target.value
      .replace(/[<>]/g, '')
      .slice(0, 80);

    onSearchChange(sanitizedValue);
  };

  return (
    <header className="navbar">
      <a className="navbar__logo" href="/">
        CineMax
      </a>

      <label className="navbar__search">
        <span className="sr-only"></span>

        <input
          type="search"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search movies..."
          maxLength={80}
          autoComplete="off"
        />
      </label>
    </header>
  );
}

export default Navbar;
