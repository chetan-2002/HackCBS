import React, { useEffect } from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useAuth0 } from "@auth0/auth0-react";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import axios from "axios";
// import LandingPageDog from "../assets/homepage/LandingPageDog";

const Home = () => {
  const navigate = useNavigate();
  const { logout, isAuthenticated, loginWithPopup, user } = useAuth0();
  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  });
  const login = async () => {
    await loginWithPopup();
    console.log(localStorage.getItem("user"));
  };
  return (
    <>
      <div className="landing-page-container">
        <div className="top_container">
          <div className="left-mid-container">
            <img
              src={require("../assets/homepageDog.JPG")}
              alt="Image of Dog"
            />
          </div>
          <div className="right-mid-container">
            <div className="content-mid-container">
              <div className="content-mid-container-headers">
                <h3>
                  Need a <span id="span-1">Volunteer?</span>
                </h3>
                <h3>
                  Want to <span id="span-2">Volunteer?</span>
                </h3>
              </div>
              <p>Don't worry, We've got you covered !</p>
              <div className="know-more-container">
                <button
                  onClick={() => {
                    if (isAuthenticated) {
                      logout({ returnTo: window.location.origin });
                      localStorage.removeItem("user");
                      localStorage.removeItem("access_token");
                    } else {
                      login();
                    }
                  }}
                >
                  {isAuthenticated ? "Continue" : "Log In"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="section">
        <h3>About Us</h3>
        <div className="section-container-1">
          <p>
            Save Our Strays is an organisation that was started to make things
            smoother for NGO'S as well as volunteers . Our aim is to make
            volunteering easy . We are the first website that aim to bridge the
            gap between volunteers and NGO's
          </p>
          <img src={require("../assets/section1.png")} alt="section2" />
        </div>
        <div className="section-container-2">
          <img
            src={require("../assets/section2.png")}
            alt="Holding hand image"
          />
          <p>
            On this website NGO'S can post their requirement . As a ngo, you
            have to submit certifications and book a time slot for visit from
            our side to verify the details and as a volunteer you can find the
            nearest NGO/shelter to volunteer at, all you have to do is select
            the city and time slot you prefer to work in and we will show all
            the NGO's around you.
          </p>
        </div>
      </section>

      <div className="footer">
        <img src={require("../assets/aboveFooter.png")} />
        <footer>
          <div class="logo">
            <Link to="/">SaveOurStrays</Link>
            {/* <p class="copyright">© SAVE OUR STRAYS 2021</p> */}
          </div>
          <div className="social-media-links">
            <GitHubIcon sx={{ fontSize: 60 }} />
            <Instagram sx={{ fontSize: 60 }} />
            <Twitter sx={{ fontSize: 60 }} />
            <Facebook sx={{ fontSize: 60 }} />
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
