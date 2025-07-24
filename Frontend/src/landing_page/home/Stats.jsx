import { Link } from "react-router-dom";
import "./Stats.css";

function Stats() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className=" col-12 col-lg-6 p-lg-5">
          <h1 className="mb-5 mb-lg-3 mb-xl-5 fs-2 px-3">Trust with confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments.
          </p>
          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h2 className="fs-4">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-12 col-lg-6  pt-lg-5 pt-xl-5">
          <img
            src="media/images/ecosystem.png"
            alt="Eco System Image"
            className="ecosystem-img"
          ></img>
          <div className=" link-info">
            <Link to="/">
              Explore our products
              <i className="bi bi-arrow-right fw-light ms-1"></i>
            </Link>
            <Link to="/" className="demo-link">
              Try Kite demo <i className="bi bi-arrow-right fw-light"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
