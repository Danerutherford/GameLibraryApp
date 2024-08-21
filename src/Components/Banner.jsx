import headerImage from "../Images/HeaderImageDiscs.png";
import "bootstrap-icons/font/bootstrap-icons.css";

const bannerStyles = {
  header: {
    background: "#031624",
    borderRadius: "0%"
  },
  titleText: {
    font: "Open Sans",
    fontSize: 30,
    color: "White",
  },
  icon:{
    color: "white",
    fontSize: 45
  },
  searchBar:{
    width: 450
  }
}


const Banner = (props) => {
  return (
    <div className="d-flex flex-row " style={bannerStyles.header}>
    
            <div className="col-4 d-inline-flex">
              <div>
                <span class="bi bi-mask" style={bannerStyles.icon}></span>
              </div>
              <div className="py-3 px-2">
                <p style={bannerStyles.titleText}>Game Library</p>
              </div>
            </div>
            <div className="col-4 d-inline-flex justify-content-center align-items-end">
              <div className="py-2">
                <input style={bannerStyles.searchBar}></input>
              </div>
            </div>
            <div className="d-inline-flex"></div>

    </div>

  );
};

export default Banner;
