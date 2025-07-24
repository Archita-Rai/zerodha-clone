import { Link } from "react-router-dom";
import "./Education.css";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-lg-7 col-xl-6 mb-5 text-center  ">
            <img
              src="media/images/education.svg"
              alt="Education Image"
              className="education-img"
            ></img>
        </div>
        <div className="col-12  col-lg-5 col-xl-6 px-3">
          <h1 className="mb-5 fs-2">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <Link to="/" className="text-decoration-none">
            Verify<i className="bi bi-arrow-right fw-light ms-1"></i>
          </Link>
          <p className="mt-5">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <Link to="/" className="text-decoration-none">
            TradingQ&A<i className="bi bi-arrow-right fw-light ms-1"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Education;
