import "./Menu.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <>
      <div className="menu-wrapper-container">
        <div className="menu-container d-none d-lg-flex">
          <div className="logo mt-0 ">
            <img src="/logo.png" style={{ width: "50px" }} />
          </div>
          <div className="menus mt-3">
            <ul>
              <li>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/"
                  onClick={() => handleMenuClick(0)}
                >
                  <p
                    className={selectedMenu === 0 ? activeMenuClass : menuClass}
                  >
                    Dashboard
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/orders"
                  onClick={() => handleMenuClick(1)}
                >
                  <p
                    className={selectedMenu === 1 ? activeMenuClass : menuClass}
                  >
                    Orders
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/holdings"
                  onClick={() => handleMenuClick(2)}
                >
                  <p
                    className={selectedMenu === 2 ? activeMenuClass : menuClass}
                  >
                    Holdings
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/positions"
                  onClick={() => handleMenuClick(3)}
                >
                  <p
                    className={selectedMenu === 3 ? activeMenuClass : menuClass}
                  >
                    Positions
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/funds"
                  onClick={() => handleMenuClick(4)}
                >
                  <p
                    className={selectedMenu === 4 ? activeMenuClass : menuClass}
                  >
                    Funds
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/apps"
                  onClick={() => handleMenuClick(6)}
                >
                  <p
                    className={selectedMenu === 6 ? activeMenuClass : menuClass}
                  >
                    Apps
                  </p>
                </Link>
              </li>
            </ul>
            <hr />
            <div className="profile" onClick={handleProfileClick}>
              <div className="avatar">ZU</div>
              <p className="username">USERID</p>
            </div>
          </div>
        </div>
      </div>
      <div class="right-sidebar-cantainer py-2 d-lg-none">
        <div class="d-flex align-items-center justify-content-end pe-3 ">
          {/* <span
            class="hamburger fs-2"
            id="openSidebar"
            onClick={() => setSidebarOpen(true)}
          >
            &#9776;
          </span> */}
           <div className="profile me-5 " onClick={handleProfileClick}>
              <div className="avatar mt-3">ZU</div>
              <p className="username mt-4">USERID</p>
            </div>
          <img
            src="/logo.png"
            style={{ width: "40px" }}
            class="hamburger fs-2"
            id="openSidebar"
            onClick={() => setSidebarOpen(true)}
          />
        </div>
      </div>

      {/* <!-- Right Sidebar --> */}
      <div class={`right-sidebar ${isSidebarOpen ? "open" : ""}`} id="sidebar">
        <span
          class="close-btn fs-1 text-danger"
          id="closeSidebar"
          onClick={() => setSidebarOpen(false)}
        >
          &times;
        </span>
        <img src="/logo.png" style={{ width: "40px" }} />
        <ul className="mt-5">
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p
                className={selectedMenu === 0 ? activeMenuClass : menuClass}
                id="sidebar-menu-link"
              >
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p
                className={selectedMenu === 1 ? activeMenuClass : menuClass}
                id="sidebar-menu-link"
              >
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p
                className={selectedMenu === 2 ? activeMenuClass : menuClass}
                id="sidebar-menu-link"
              >
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p
                className={selectedMenu === 3 ? activeMenuClass : menuClass}
                id="sidebar-menu-link"
              >
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p
                className={selectedMenu === 4 ? activeMenuClass : menuClass}
                id="sidebar-menu-link"
              >
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p
                className={selectedMenu === 6 ? activeMenuClass : menuClass}
                id="sidebar-menu-link"
              >
                Apps
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
