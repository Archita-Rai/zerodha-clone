import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-section text-light d-none d-sm-block">
      <div className="container">
        <div className="supportWraper pt-5 ">
          <h5>Support portal</h5>
          <Link className="text-light ticket-links">Track Tickets</Link>
        </div>
        <div className="row py-5">
          <div className="col-1 d-none d-lg-block mb-5 pt-5 "></div>
          <div className="col-12 col-lg-5 mb-5 py-2">
            <h1 className="fs-4 lh-base">
              Search for an answer or browse help topics to create a ticket
            </h1>
            <input className="bg-light rounded fs-6 p-3 p-xl-4 border-0  w-100 mt-2 mb-3 ticket-input" placeholder="Eg. how do I active F&O,why is my order getting rejected"></input>
            <div>
            <Link className="text-light ticket-links">Track account opening</Link>
            <Link className="text-light ms-4 ticket-links">Track segment activation</Link>
            <Link className="text-light ms-4 ticket-links">Intraday</Link><br className="d-none d-xxl-block"></br>
            <Link className="text-light ticket-links">margins</Link>
            <Link className="text-light ms-4 ticket-links">Kite user manual</Link>
            </div>
          </div>
         <div className="col-1 d-none d-lg-block"></div>
         <hr className="bg-light d-lg-none"></hr>
          <div className="col-12 col-lg-5 mb-5 py-2">
            <h1 className="fs-4 ">
             Feature
            </h1>
            <ol type="1">
           <li ><Link className="text-light ticket-links">Current Takeovers and Delisting - January 2024</Link></li>
            <li className="mt-3"><Link className="text-light ticket-links">Latest Intraday leverages - MIS & CO</Link></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
