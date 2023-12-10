import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import App from "../components/App";

test("renders the <NavBar /> component", () => {
  render(
    <Router history={createMemoryHistory()}>
      <App />
    </Router>
  );
  expect(screen.getByRole("navigation", { name: /navbar/i })).toBeInTheDocument();
});

test('renders the Home component using the <Route path="/">', () => {
  const history = createMemoryHistory();
  history.push("/");
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  expect(screen.getByRole("heading", { name: /home page/i })).toBeInTheDocument();
});

test('renders the Actors component using the <Route path="/actors">', () => {
  const history = createMemoryHistory();
  history.push("/actors");
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  expect(screen.getByRole("heading", { name: /actors page/i })).toBeInTheDocument();
});

test('renders the Directors component using the <Route path="/directors">', () => {
  const history = createMemoryHistory();
  history.push("/directors");
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  expect(screen.getByRole("heading", { name: /directors page/i })).toBeInTheDocument();
});

test('renders the Movies component using the <Route path="/movies">', () => {
  const history = createMemoryHistory();
  history.push("/movies");
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  expect(screen.getByRole("heading", { name: /movies page/i })).toBeInTheDocument();
});