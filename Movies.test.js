
import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Movies from "../components/Movies";
import { movies } from "../data";

test("renders without any errors", () => {
  expect(() => render(<Movies />)).not.toThrow();
});

test("renders 'Movies Page' inside of a <h1 />", () => {
  render(<Movies />);
  const h1 = screen.getByRole("heading", { name: /Movies Page/i });
  expect(h1).toBeInTheDocument();
  expect(h1.tagName).toBe("H1");
});

test("renders each movie's title and time", () => {
  render(<Movies />);
  movies.forEach((movie) => {
    expect(screen.getByText(movie.title)).toBeInTheDocument();
    expect(screen.getByText(movie.time.toString())).toBeInTheDocument();
  });
});

test("renders a <li /> for each genre", () => {
  render(<Movies />);
  movies.forEach((movie) => {
    movie.genres.forEach((genre) => {
      expect(screen.getByText(genre)).toHaveTextContent(genre);
      expect(screen.getByText(genre).tagName).toBe("LI");
    });
  });
});

test("does not render a movie that is missing from the list", () => {
  const missingMovie = movies[0];
  const filteredMovies = movies.filter((movie) => movie !== missingMovie);
  render(<Movies movieList={filteredMovies} />);
  expect(screen.queryByText(missingMovie.title)).not.toBeInTheDocument();
});

test("does not render any movies when the list is empty", () => {
  render(<Movies movieList={[]} />);
  expect(screen.queryByRole("heading", { name: /Movies Page/i })).toBeInTheDocument();
  expect(screen.queryByText(/Time:/i)).not.toBeInTheDocument();
  expect(screen.queryByRole("list")).not.toBeInTheDocument();
});