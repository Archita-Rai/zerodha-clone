import "./RightSection.css"

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row mt-5 pt-5">
        <div
          className=" col-12 col-lg-6 pt-5  text-center text-lg-start kite-img-info"
          style={{ lineHeight: "2rem" }}
        >
          <h1 className="pt-5">{productName}</h1>
          <p className="">{productDesription}</p>
          <div className="mt-3">
            <a href={learnMore} className="text-decoration-none">
              Learn More
              <i className="bi bi-arrow-right fw-light text-primary"></i>
            </a>
          </div>
        </div>
        <div className=" col-12 col-lg-6 ps-0  text-center">
          <img src={imageURL} className="right-prop-img"></img>
        </div>
         
      </div>
    </div>
  );
}

export default RightSection;
