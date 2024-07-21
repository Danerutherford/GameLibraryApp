import { Gallery } from "react-grid-gallery";
import { images as IMAGES } from "../Images/GameImages.ts";
import Game from "./GamesObject.jsx";

const GameList = (props) => {
  return (
    <div>
      <div class='row'>
        {/* For loop through list of game from file or db file */}
        <Game />
      </div>
    </div>
  );
};

export default GameList;
