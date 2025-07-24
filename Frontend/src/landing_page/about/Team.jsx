import "./Team.css";
function Team() {
  return (
    <div className="container">
      <div className="row  mb-5 border-top">
        <h1 className="text-center mt-5">People</h1>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6 text-center mb-3 mb-lg-0">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Team Image"
            className="founder-image"
          ></img>
          <h4 className=" mt-4 "> Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="founder-info col-12 col-lg-6 px-3 px-lg-0">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p >
            Connect on
            <a href="" className="text-decoration-none ms-1 me-1">
              Homepage/
            </a>
            <a href="" className="text-decoration-none me-1">
              TradingQnA/
            </a>
            <a href="" className="text-decoration-none">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
