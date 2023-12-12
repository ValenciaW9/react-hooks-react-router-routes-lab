import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import App from "../components/App";

test("renders the <NavBar /> component", () => {
  render(<App />);
  expect(screen.getByText(/Home/)).toBeInTheDocument();
  expect(screen.getByText(/Movies/)).toBeInTheDocument();
  expect(screen.getByText(/Directors/)).toBeInTheDocument();
  expect(screen.getByText(/Actors/)).toBeInTheDocument();
});

test('renders the Home component using the <Route path="/">', () => {
  const history = createMemoryHistory();
  history.push("/");
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  expect(screen.getByText(/Home Page/)).toBeInTheDocument();
});

test('renders the Movies component using the <Route path="/movies">', () => {
  const history = createMemoryHistory();
  history.push("/movies");
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  expect(screen.getByText(/Movies Page/)).toBeInTheDocument();
});

test('renders the Directors component using the <Route path="/directors">', () => {
  const history = createMemoryHistory();
  history.push("/directors");
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  expect(screen.getByText(/Directors Page/)).toBeInTheDocument();
});

test('renders the Actors component using the <Route path="/actors">', () => {
  const history = createMemoryHistory();
  history.push("/actors");
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  expect(screen.getByText(/Actors Page/)).toBeInTheDocument();
});