import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery'; 
import Popper from 'popper.js'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./App.css";
import Banner from "./Banner"
import GamesList from './GamesList';

function App() {

  return(
    <div>
      <Banner />
      <GamesList />
    
    </div>
  ) 
};

export default App
