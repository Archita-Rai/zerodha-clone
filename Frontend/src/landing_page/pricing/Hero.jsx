import "./Hero.css"
function Hero() {
  return (
    <div className="container mt-5">
      <div className="row border-bottom text-center py-5">
        <h1 className="mt-4 mb-4 open-account-heading">Pricing</h1>
        <h4 className="mb-3 fs-5 text-muted">
          Free equity investments and flat ₹ 20 traday and F&O trades
        </h4>
      </div>
      <div className="row mt-5 pt-lg-5 text-center mb-5">
        <div className=" col-12 mx-auto  col-lg-4 px-5">
          <img src="media/images/pricingEquity.svg" className="pricing-img"></img>
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-muted mt-4 fs-6">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-12 mx-auto col-lg-4 px-5 mt-3 mt-lg-0">
          <img src="media/images/intradayTrades.svg"className="pricing-img"></img>
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="text-muted mt-4 fs-6">
           Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="col-12 col-lg-4 px-5 mb-5 mx-auto mt-3 mt-lg-0">
          <img src="media/images/pricingEquity.svg"className="pricing-img"></img>
          <h1 className="fs-3">Free direct MF</h1>
          <p className="text-muted mt-4 fs-6">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
