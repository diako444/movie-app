import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <Hero />
      <main className="main-content">
        <p style={{ padding: "2rem 1rem", color: "var(--text-secondary)" }}>
          Next we will add filters and movie cards.
        </p>
      </main>
    </div>
  );
}

export default App;
