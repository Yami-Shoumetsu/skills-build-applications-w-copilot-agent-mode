import { Link, Routes, Route } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center py-5">
      <h1>OctoFit Tracker</h1>
      <p className="lead">Welcome to the React 19 + Vite frontend for OctoFit.</p>
    </div>
  );
}

function About() {
  return (
    <div className="py-5">
      <h2>About OctoFit</h2>
      <p>Track workouts, teams, and leaderboards in a modern multi-tier app.</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="container py-4">
      <nav className="navbar navbar-expand-lg navbar-light bg-light rounded-3 mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">OctoFit</Link>
          <div>
            <Link className="nav-link d-inline-block me-3" to="/">Home</Link>
            <Link className="nav-link d-inline-block" to="/about">About</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
