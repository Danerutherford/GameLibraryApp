import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Banner from "./Banner";
import GamesList from "./GamesList";
import NavBar from "./NavBar";

function App() {
  return (
    <div id='siteBg'>
      <Banner />
      <GamesList />
    </div>
  );
}

export default App;
