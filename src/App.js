import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Home from "./Pages/Home.tsx";
import MovieList from "./Pages/Movielist.tsx";
import MovieDetails from "./Pages/Moviedetails.tsx";
import Toprated from "./Pages/Toprated.jsx";
import Actordetails from "./Pages/Actordetails.tsx";
import FavoriteActors from "./Pages/FavoriteActors.tsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/actor/:id" element={<Actordetails />} />
          <Route path="/top-rated" element={<Toprated />} />
          <Route path="/favorite-actors" element={<FavoriteActors />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;