
import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";

interface Actor {
  id: number;
  name: string;
  image?: string; // Image is optional to avoid issues
}

const FavoriteActors = () => {
  const [favoriteActors, setFavoriteActors] = useState<Actor[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favoriteActors") || "[]"; // Ensuring it's always a string
    try {
      const favorites: Actor[] = JSON.parse(storedFavorites);
      setFavoriteActors(Array.isArray(favorites) ? favorites : []);
    } catch (error) {
      console.error("Error parsing favorite actors from localStorage:", error);
      setFavoriteActors([]); // Fallback in case of error
    }
  }, []);

  // Remove actor from favorites
  const removeFavorite = (id: number) => {
    const updatedFavorites = favoriteActors.filter((actor) => actor.id !== id);
    setFavoriteActors(updatedFavorites);
    localStorage.setItem("favoriteActors", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-3xl font-bold mb-6">Favorite Actors</h1>

      {favoriteActors.length === 0 ? (
        <p className="text-gray-400 text-lg text-center">
          No favorite actors yet. Start adding your favorites!
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {favoriteActors.map((actor) => (
            <div key={actor.id} className="bg-gray-800 p-4 rounded-lg shadow-md text-center">
              <Link to={`/actor/${actor.id}`} className="block">
                <img
                  src={actor.image || "https://via.placeholder.com/150"}
                  alt={actor.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border border-gray-700"
                  onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/150")}
                />
                <h3 className="text-lg font-semibold">{actor.name}</h3>
              </Link>
              <button
                onClick={() => removeFavorite(actor.id)}
                className="mt-3 px-4 py-1 bg-red-500 text-white text-sm rounded-lg hover:bg-red-700 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteActors;
