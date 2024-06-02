
const Banner = (props) => {
  return (
    <div className="row md-4">
      <div className="col-5">
      {props.headerText}
      </div>

      <div className="col-5">
      {props.headerText}
      </div>
    </div>
  )
};

export default Banner;
