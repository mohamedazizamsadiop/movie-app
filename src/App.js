import { useState } from "react";

import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Avatar",
      description: "Film de science-fiction",
      posterURL:
        "https://m.media-amazon.com/images/I/61OUGpUfAyL._AC_SY679_.jpg",
      rating: 5,
    },

    {
      title: "Titanic",
      description: "Film romantique",
      posterURL:
        "https://m.media-amazon.com/images/I/71y8Xn7fH-L._AC_SY679_.jpg",
      rating: 4,
    },

    {
      title: "Breaking Bad",
      description: "Série dramatique",
      posterURL:
        "https://m.media-amazon.com/images/I/81TA5vN8P-L._AC_SY679_.jpg",
      rating: 5,
    },
  ]);

  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState("");

  // Ajouter un film
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  // Filtrer les films
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title
        .toLowerCase()
        .includes(searchTitle.toLowerCase()) &&
      movie.rating >= searchRating
  );

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        🎬 Movie App
      </h1>

      <Filter
        searchTitle={searchTitle}
        setSearchTitle={setSearchTitle}
        searchRating={searchRating}
        setSearchRating={setSearchRating}
      />

      <AddMovie addMovie={addMovie} />

      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;