import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="bg-light border-top mt-5">
      <div className="container bg-light">
        <div className="row pt-5">
          <div className=" links-div col-12 text-center text-md-start  col-md-3 mb-3 px-4 ps-md-0">
            <img
              src="media/images/logo.svg"
              alt="Zerodha logo"
              style={{ width: "150px" }}
              className="mb-4"
            ></img>
            <p className="text-dark text-md-center  text-lg-start">
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
            <div className="social-icon d-flex align-items-center justify-content-around fs-5 fs-sm-6 mx-auto ms-md-0 ">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-square-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-linkedin-in"></i>
              <i class="fa-brands fa-telegram"></i>
            </div>
          </div>
          <hr className="d-md-none mb-sm-5 mb-md-0"></hr>
          <div className=" links-div col-6 col-md-3 mb-5 mb-md-0">
            <p className="fw-semibold">Company</p>
            <Link to="/" className="text-decoration-none">
              About
            </Link>
            <br />
            <br />
            <Link to="/" className="text-decoration-none">
              Products
            </Link>
            <br />
            <br />
            <Link to="/" className="text-decoration-none">
              Pricing
            </Link>
            <br />
            <br />
            <Link to="/" className="text-decoration-none">
              Referral programme
            </Link>
            <br />
            <br />
            <Link to="/" className="text-decoration-none">
              Careers
            </Link>
            <br />
            <br />
            <Link to="/" className="text-decoration-none">
              Zerodha.tech
            </Link>
            <br />
            <br />
            <Link to="/" className="text-decoration-none">
              Press & media
            </Link>
            <br />
            <br />
            <Link to="/" className="text-decoration-none">
              Zerodha cares (CSR)
            </Link>
            <br />
          </div>
          <div className="  links-div col-6 col-sm-6 col-md-3 mt-sm-3 mt-md-0 text-center text-md-start">
            <p className="fw-semibold">Support</p>
            <Link to="/" className="text-decoration-none">
              Contact
            </Link>
            <br />
            <br />
            <Link to="/" className="text-decoration-none">
              Support portal
            </Link>
            <br />
            <br />
            <Link to="/" className="text-decoration-none">
              Z-Connect blog
            </Link>
            <br />
            <br />
            <Link to="/" className="text-decoration-none">
              List of charges
            </Link>
            <br />
            <br />
            <Link to="/" className="text-decoration-none">
              Downloads & resources
            </Link>
            <br />
            <br />
          </div>
          <div className=" links-div col-12 col-sm-6 col-md-3 mt-sm-3 mt-md-0 ">
            <p className="fw-semibold">Account</p>
            <Link to="/" className="text-decoration-none">
              Open an account
            </Link>
            <br />
            <br />
            <Link to="/" className="text-decoration-none">
              Fund transfer
            </Link>
            <br />
            <br />
            <Link to="/" className="text-decoration-none">
              60 day challenge
            </Link>
            <br />
            <br />
          </div>
        </div>
        <div className="mt-5  zerodha-info-div">
          <hr></hr>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
        <hr></hr>
        <div className="mt-3 d-flex align-item-center justify-content-md-center ps-1 p-sm-3 flex-wrap gap-2 justify-content-around ">
          <Link
            to="/"
            className="text-decoration-none text-dark d-inline-block mx-3 fs-6"
          >
            NSE
          </Link>
          <Link
            to="/"
            className="text-decoration-none text-dark d-inline-block mx-3 fs-6"
          >
            BSE
          </Link>
          <Link
            to="/"
            className="text-decoration-none text-dark d-inline-block mx-3 fs-6"
          >
            MCK
          </Link>
          <Link
            to="/"
            className="text-decoration-none text-dark d-inline-block mx-3 fs-6"
          >
            Term & conditions
          </Link>
          <Link
            to="/"
            className="text-decoration-none text-dark d-inline-block mx-3 fs-6"
          >
            Policies & procedure
          </Link>
          <Link
            to="/"
            className="text-decoration-none text-dark d-inline-block mx-3 fs-6"
          >
            Privacy policy
          </Link>
          <Link
            to="/"
            className="text-decoration-none fs-6 text-dark d-inline-block mx-3"
          >
            Disclosure
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
