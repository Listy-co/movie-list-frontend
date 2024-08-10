import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import AddMovie from "./components/AddMovie";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <MovieList />
      <Footer />
    </div>
  );
}

export default App;
