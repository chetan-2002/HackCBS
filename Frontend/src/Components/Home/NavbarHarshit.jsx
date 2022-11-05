import React from "react";
// import "../../styles/Navbar.css";
import "../../styles/Navbar.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const NavbarHarshit = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    <>
      <nav>
        <div className="page-header" id="header-op">
          <div className="menu">
            <div class="logo">
              <a href="/">SaveOurStrays</a>
            </div>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">Contact Us</a>
              </li>
              {isAuthenticated ? (
                <button onClick={() => logout()}>Logout</button>
              ) : (
                <li>
                  <a href="/login">Get Started</a>
                </li>
              )}
              {/* <li>
                <a href="/Login">Get Started</a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
      {/* <nav>
        <div class="page-header" id="header-op">
          <div class="menu">
            <div class="logo">
              <Link to="/">SaveOurStrays</Link>
            </div>
            
            <ul class="menu-items">
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <button>
                  <Link to="/">Get Started</Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </>
  );
};

export default NavbarHarshit;
