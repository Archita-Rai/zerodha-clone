import "./Award.css";
function Award() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className=" col-12 ps-1 col-md-12 ms-md-3 ms-lg-0 col-lg-6 p-md-5 ps-lg-0 ps-xl-5">
          <img
            src="media/images/largestBroker.svg"
            alt="Largerst Broker Image"
            className="award-img"
          ></img>
        </div>
        <div className="col-12 col-lg-6 p-5 mt-5 p-lg-2 ps-lg-5 ps-xl-0 ">
          <h2>Largest stock broker in India</h2>
          <p className="mb-5">
            
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Future and Options</p>
                </li>
                <li>
                  <p>Commodity Derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stoks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img
            src="media/images/pressLogos.png"
            alt="Press Image"
            className="press-img"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Award;
