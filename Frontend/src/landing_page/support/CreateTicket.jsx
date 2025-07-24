import { Link } from "react-router-dom";
function CreateTicket() {
  return (
    <div className="container mt-5">
      <div className="row p-3">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>
        <div className=" col-12 col-sm-6 col-lg-4 mt-5">
          <h4 className="fs-5 pb-5">
            <i class="fa-solid fa-circle-plus me-2"></i>Account opening
          </h4>
          <Link to="/" className="text-decoration-none" style={{fontSize:"1.1rem"}}>
             Online Account Opening
          </Link>
          <br />
          <br />
          <Link to="/" className="text-decoration-none"style={{fontSize:"1.1rem"}}>
           Offline Account Opening
          </Link>
          <br />
          <br />
          <Link to="/" className="text-decoration-none" style={{fontSize:"1.1rem"}}>
            Company, Partnership and HUF Account
          </Link>
          <br />
          <br />
          <Link to="/" className="text-decoration-none" style={{fontSize:"1.1rem"}}>
            Opening
          </Link>
          <br />
          <br />
          <Link to="/" className="text-decoration-none" style={{fontSize:"1.1rem"}}>
          NRI Account Opening
          </Link>
          <br />
          <br />
          <Link to="/" className="text-decoration-none" style={{fontSize:"1.1rem"}}>
            Charges at Zerodha
          </Link>
          <br />
          <br />
          <Link to="/" className="text-decoration-none" style={{fontSize:"1.1rem"}}>
             Zerodha IDFC FIRST Bank 3-in-1 Account
          </Link>
          <br />
          <br />
          <Link to="/" className="text-decoration-none" style={{fontSize:"1.1rem"}}>
              Getting Started
          </Link>
          <br />
        </div>
        <div className="col-12 col-sm-6 col-lg-4 mt-5">
          <h4 className="fs-5 pb-5">
            <i class="fa-solid fa-user me-2"></i>Your Zerodha Account
          </h4>
          <Link to="/" className="text-decoration-none" style={{fontSize:"1.1rem"}}>
            Login Credentials
          </Link>
          <br />
          <br />
          <Link to="/" className="text-decoration-none"style={{fontSize:"1.1rem"}}>
           Account Modification and Segment Addition
          </Link>
          <br />
          <br />
          <Link to="/" className="text-decoration-none" style={{fontSize:"1.1rem"}}>
           DP ID and bank details
          </Link>
          <br />
          <br />
          <Link to="/" className="text-decoration-none" style={{fontSize:"1.1rem"}}>
           Your Profile
          </Link>
          <br />
          <br />
          <Link to="/" className="text-decoration-none" style={{fontSize:"1.2rem"}}>
           Transfer and conversion of shares
          </Link>
          <br />
          <br />
          <br />
        </div>
        <div className="col-12 col-sm-6 col-lg-4  pt-5 pt-lg-0 mt-5 ">
          <h4 className="fs-5 pb-5">
            <i class="fa-solid fa-chart-simple me-2"></i>Your Zerodha Account
          </h4>
          <Link to="/" className="text-decoration-none" style={{fontSize:"1.1rem"}}>
            Marging/leverage,Product and Order types
          </Link>
          <br />
          <br />
          <Link to="/" className="text-decoration-none"style={{fontSize:"1.1rem"}}>
          Kite Web and Mobile
          </Link>
          <br />
          <br />
          <Link to="/" className="text-decoration-none" style={{fontSize:"1.1rem"}}>
           Trading FAQs
          </Link>
          <br />
          <br />
          <Link to="/" className="text-decoration-none" style={{fontSize:"1.1rem"}}>
           Corporate Actions
          </Link>
          <br />
          <br />
          <Link to="/" className="text-decoration-none" style={{fontSize:"1.1rem"}}>
          Sentinel
          </Link>
          <br />
          <br />
          <Link to="/" className="text-decoration-none" style={{fontSize:"1.1rem"}}>
            Kite API
          </Link>
          <br />
          <br />
          <Link to="/" className="text-decoration-none" style={{fontSize:"1.1rem"}}>
            Pi and other platform
          </Link>
          <br />
          <br />
          <Link to="/" className="text-decoration-none" style={{fontSize:"1.1rem"}}>
              Stockreport
          </Link>
          <Link to="/" className="text-decoration-none" style={{fontSize:"1.1rem"}}>
              GTT
          </Link>
          <br />
        </div>
        <div className="col-12  col-sm-6 col-lg-4  mt-5 pt-5 ps-sm-5 ps-lg-0">
          <h4 className="fs-5 pb-5">
            <i class="fa-solid fa-money-check me-2"></i>Funds
          </h4>
          <Link to="/" className="text-decoration-none" style={{fontSize:"1.1rem"}}>
            Adding Funds
          </Link>
          <br />
          <br />
          <Link to="/" className="text-decoration-none"style={{fontSize:"1.1rem"}}>
           Fund Withdrawal
          </Link>
          <br />
          <br />
          <Link to="/" className="text-decoration-none" style={{fontSize:"1.1rem"}}>
           eMandates
          </Link>
          <br />
          <br />
          <Link to="/" className="text-decoration-none" style={{fontSize:"1.1rem"}}>
           Adding Bank Accounts
          </Link>
          <br />
        </div>
        <div className="col-12 col-sm-6 col-lg-4  mt-5 pt-5">
          <h4 className="fs-5 pb-5">
            <i class="fa-solid fa-circle-notch me-2"></i>Console
          </h4>
          <Link to="/" className="text-decoration-none" style={{fontSize:"1.1rem"}}>
            Reports
          </Link>
          <br />
          <br />
          <Link to="/" className="text-decoration-none"style={{fontSize:"1.1rem"}}>
            Ledger
          </Link>
          <br />
          <br />
          <Link to="/" className="text-decoration-none" style={{fontSize:"1.1rem"}}>
            Portfolio
          </Link>
          <br />
          <br />
          <Link to="/" className="text-decoration-none" style={{fontSize:"1.1rem"}}>
           60 Day Challenge
          </Link>
          <br />
          <br />
          <Link to="/" className="text-decoration-none" style={{fontSize:"1.2rem"}}>
            Careers
          </Link>
          <br />
          <br />
          <Link to="/" className="text-decoration-none" style={{fontSize:"1.1rem"}}>
           IPO
          </Link>
          <br />
          <br />
          <Link to="/" className="text-decoration-none" style={{fontSize:"1.1rem"}}>
           Referral Program
          </Link>
          <br />
        </div>
        <div className="col-12 col-sm-6 col-lg-4  mt-5 pt-5">
          <h4 className="fs-5 pb-5">
            <i class="fa-regular fa-circle me-2"></i>Coin
          </h4>
          <Link to="/" className="text-decoration-none" style={{fontSize:"1.1rem"}}>
           Understanding Mutual Funds
          </Link>
          <br />
          <br />
          <Link to="/" className="text-decoration-none"style={{fontSize:"1.1rem"}}>
           About Coin
          </Link>
          <br />
          <br />
          <Link to="/" className="text-decoration-none" style={{fontSize:"1.1rem"}}>
            Buying and Selling through Coin
          </Link>
          <br />
          <br />
          <Link to="/" className="text-decoration-none" style={{fontSize:"1.1rem"}}>
           Starting an SIP
          </Link>
          <br />
          <br />
          <Link to="/" className="text-decoration-none" style={{fontSize:"1.1rem"}}>
           Managing your Portfolio
          </Link>
          <br />
          <br />
          <Link to="/" className="text-decoration-none" style={{fontSize:"1.1rem"}}>
            Coin App
          </Link>
          <br />
          <br />
          <Link to="/" className="text-decoration-none" style={{fontSize:"1.1rem"}}>
           Moving to Coin
          </Link>
          <br />
          <br />
          <Link to="/" className="text-decoration-none" style={{fontSize:"1.1rem"}}>
           Government Securities
          </Link>
          <br />
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
