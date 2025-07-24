import "./LeftSection.css"

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStrore,
}) {
  return (
    <div className="container mt-5">
      <div className="row mt-5 pt-5">
        <div className=" col-12 col-lg-6 ps-0 text-center">
          <img src={imageURL} className="left-prop-img"></img>
        </div>
        <div className=" col-12 col-lg-6 mt-lg-4 mt-xl-5 mt-5 mt-xl-5 ps-lg-5 text-center text-lg-start kite-img-info" style={{lineHeight:"2rem"}}>
          <h1>{productName}</h1>
          <p className="">{productDesription}</p>
          <div className="mt-3">
            <a href={tryDemo} className="text-decoration-none "> Try Demo
                <i className="bi bi-arrow-right fw-light text-primary"></i>
            </a>
            <a href={learnMore} className="text-decoration-none ms-5">Learn More
                <i className="bi bi-arrow-right fw-light text-primary"></i>
            </a>
          </div>
          <div className="mt-4">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg"></img>
            </a>
            <a href={appStrore} className="ms-4">
              <img src="media/images/appstoreBadge.svg"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
