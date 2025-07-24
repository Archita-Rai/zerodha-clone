function Pricing() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row p-5">
        <div className="col-lg-4 col-12 mb-2">
          <h1 className="fs-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="text-decoration-none">
            See Pricing<i className="bi bi-arrow-right fw-light ms-1"></i>
          </a>
        </div>
        <div className="col-2 d-none d-lg-block"></div>
        <div className=" col-12 col-lg-6 ">
          <div className="row text-center">
            <div className="col-10 col-sm border p-4 ms-1 ms-md-0 mb-1 mb-sm-0">
              <h1 className=" price mb-3  fw-bolder" style={{fontSize:"4rem",color:"#dd9d3cff"}}>&#8377;0</h1>
              <p>
                Free equity delivery and
                <br />
                direct mutual funds
              </p>
            </div>
            <div className="col-10 col-sm p-4 border ms-1">
                <h1 className=" price mb-3 fw-bolder" style={{fontSize:"4rem",color:"#dd9d3cff"}}>&#8377;20</h1>
                 <p >Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
