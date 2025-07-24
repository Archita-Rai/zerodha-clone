import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar navbar-expand-lg border-bottom p-3 text-center sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand " to="/">
          <img
            src="media/images/logo.svg"
            className="zerodha-logo"
            alt="Zerodha logo"
          ></img>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
        <div
          class="collapse navbar-collapse custom-navbar-collapse ps-5 ms-lg-0 "
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav ms-auto">
            <Link
              class="nav-link active ms-4 fw-semibold"
              aria-current="page"
              to="/signup"
            >
              Signup
            </Link>
            <Link class="nav-link active ms-4 fw-semibold" to="/about">
              About
            </Link>
            <Link class="nav-link active ms-4 fw-semibold" to="/pricing">
              Pricing
            </Link>
            <Link class="nav-link active ms-4 fw-semibold" to="/product">
              Product
            </Link>
            <Link class="nav-link active ms-4 fw-semibold" to="/support">
              Support
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
