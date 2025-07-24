function Brokerage() {
  return (
    <div className="container border-top">
      <div className="row mt-5 pt-5">
        <div className="col-12 mb-3 mb-lg-0 col-lg-7 ">
          <h4 className="text-center mb-3"style={{ color: "#387ED1" }}>
            Brokerage calculator
          </h4>
          <ul className="text-muted" style={{lineHeight:"3rem"}}>
            <li>
              Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-1"></div>
        <div className="col-12 col-lg-4 text-center text-lg-start">
          <h4 style={{ color: "#387ED1" }}>List of charges</h4>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
