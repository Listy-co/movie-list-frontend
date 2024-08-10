import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";

function App() {

  return (
    <div className="App">
      
      <Header />
      <Home />
      <MovieList />
      <AddMovie />
      
    </div>
  );
}

export default App;
