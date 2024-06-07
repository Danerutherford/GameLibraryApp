import headerImage from "../Images/HeaderImageDiscs.png"
const Banner = (props) => {
  return (
    <div className="row">
      <div className="col-5">
         <img src={headerImage}/>
      </div>

      <div className="col-7">
      <h3>Game Library</h3>
      </div>
    </div>
  )
};

export default Banner;
