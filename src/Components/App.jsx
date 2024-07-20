import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import Banner from "./Banner";
import GamesList from "./GamesList";
import NavBar from "./NavBar";

function App() {
  return (
    <div>
      <Banner />
      <NavBar />
      <GamesList />
    </div>
  );
}

export default App;
