import { Gallery } from "react-grid-gallery";
import { images as IMAGES } from "../Images/GameImages.ts";
import GameDisplayItem from "./GameListDisplayItem.jsx";

const GameList = (props) => {
  return (
    <div className='container'>
      <div className='row'>
        {/* For loop through list of game from file or db file, 5 items
        start new line */}
        <div className='col-sm'>test</div>
        <div className='col-sm'>test</div>
        <div className='col-sm'>test</div>
        <div className='col-sm'>test</div>
      </div>
    </div>
  );
};

export default GameList;
