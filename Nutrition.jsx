import SearchForm from './SearchForm';
import Foods from './Foods';
import AddFood from './AddFood';

// API Key and ID
const apiKey = "15dacb960b2aa4adaf8db032f7c21bf5";
const apiId = "2d8685e9";

export default function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" component={SearchForm} />
          <Route path="/foods" component={Foods} />
          <Route path="/form" component={FormComponent} />
        </Switch>
      </>
    </Router>
  );
}