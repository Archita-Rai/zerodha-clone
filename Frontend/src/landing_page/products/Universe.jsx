function Universe({ ImageURL }) {
  return (
    <div className="container">
      <div className="row text-center">
        <h1 className="mt-4 mb-3 open-account-heading">The Zerodha Universe</h1>
        <p className="mb-3 fs-6">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-12 col-sm-6 col-lg-4 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            style={{ width: "190px" }}
          ></img>
          <p className="text-muted text-small mt-2">
            Thematic investment platform
          </p>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 p-3 mt-5 ">
          <img
            src="media/images/streakLogo.png"
            style={{ width: "120px" }}
          ></img>
          <p className="text-muted text-small mt-2">Algo & strategy platform</p>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 p-3 mt-5 ">
          <img
            src="media/images/sensibullLogo.svg"
            style={{ width: "150px" }}
          ></img>
          <p className="text-muted text-small mt-2">Options trading platform</p>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 p-3 mt-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "170px" }}
          ></img>
          <p className="text-muted text-small mt-2">Asset management</p>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 mt-5">
          <img
            src="media/images/goldenpiLogo.png"
            style={{ width: "160px" }}
          ></img>
          <p className="text-muted text-small mt-2">Bounds trading platform</p>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 mt-5">
          <img src="media/images/dittoLogo.png" style={{ width: "90px" }}></img>
          <p className="text-muted text-small mt-2">Insurance</p>
        </div>
        <button className="signup-btn btn btn-primary  text-light fs-5 p-2 mb-4 mt-3">
          Sign up now
        </button>
      </div>
    </div>
  );
}

export default Universe;
