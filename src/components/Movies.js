import React from "react";

const MoviesPage = () => {
  // Dummy data for movies
  const movies = [
    { title: "Movie 1", time: "2h", genres: ["Action", "Adventure"] },
    { title: "Movie 2", time: "1h 30m", genres: ["Comedy", "Romance"] },
    { title: "Movie 3", time: "2h 15m", genres: ["Drama", "Thriller"] },
  ];

  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
        <div key={index}>
          <h2>{movie.title}</h2>
          <p>Time: {movie.time}</p>
          <ul>
            {movie.genres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MoviesPage;
   
   


