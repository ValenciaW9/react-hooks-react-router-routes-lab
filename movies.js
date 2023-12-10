import React, { useState, useEffect } from "react";

function Movies() {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/movies')
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching movies');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Movies Page</h1>
      {movieList.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>Time: {movie.time}</p>
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Movies;