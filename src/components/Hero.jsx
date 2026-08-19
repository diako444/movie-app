import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-tag">Featured Spotlight</span>
        <h1 className="hero-title">CinePulse</h1>
        <p className="hero-desc">
          Discover, search, and explore movies with a fast, responsive, and clean interface.
        </p>
        <div className="hero-actions">
          <button type="button" className="btn btn-accent">
            Explore Movies
          </button>
          <button type="button" className="btn btn-glass">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
