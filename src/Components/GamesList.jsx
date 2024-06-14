import { Gallery } from "react-grid-gallery";
import { images as IMAGES } from "../Images/GameImages.ts";


const GameList = () =>{
    return(
        <div className="grid">
           <Gallery images ={IMAGES} />
        </div>
        )
};
    
export default GameList;
