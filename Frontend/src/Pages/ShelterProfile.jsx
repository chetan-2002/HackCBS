import React from 'react'
import NavbarHarshit from '../Components/Home/NavbarHarshit';
import '../styles/ShelterProfile.css';
import Carousel from "react-material-ui-carousel";


   {/*
    <hr />
            <div class="below-profile">
            <span>Images</span>
            <div class="images">
                <img src="../Images/ngo-profile-image1.jpg" alt="Ngo Image" class="ngo-images" />
                <img src="../Images/ngo-profile-image2.jpg" alt="Ngo Image" class="ngo-images" />
                <img src="../Images/ngo-profile-image3.jpg" alt="Ngo Image" class="ngo-images" />
                <img src="../Images/ngo-profile-image4.jpg" alt="Ngo Image" class="ngo-images" />
            </div>
            <span>Certificate</span>
            <div class="certificate">
                <img src="../Images/ngo-certificate.jpg" alt="ngo-certificate" height="400px" width="400px" id="certificate" />
            </div>
            <hr />
            <span>Reviews</span>
            <div class="reviews" id="reviews">
                <div class="review-card">
                    <i class="far fa-user-circle"></i>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, facilis.</p>
                </div>
                <br />
                <div class="review-card" >
                    <i class="far fa-user-circle"></i>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, facilis.</p>
                </div>
                <br /> <br />
                <div class="posted-reviews" id="posted-review"></div>
                <span>Add review</span>
                <div class="submit-review">
                <div class="review-card">
                    <i class="far fa-user-circle"></i>
                    <input type="text" id="text" />
                    
                </div>
                <br /> <br />
                <button class="sign-up" id="post">Post</button>
                </div>
            </div>
        </div>
        <br />
        <span>Donate us</span>
        <div class="donation-details">
            <div class="bank-detail">
            <h4>Bank Name:</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="bank-detail">
            <h4>Account Number:</h4>
            <p>Lorem, ipsum dolor.</p>
            </div>
            <div class="bank-detail">  
            <h4>IFSC Code:</h4>
            <p>Lorem, ipsum dolor.</p>
            </div>
        </h4>
        </div>
        <span>CONTACT US</span>
            <div class="contact">
                <div class ="social">
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                  </div>
                  <div class="number">
                    <i class="fas fa-phone-alt"></i>
                    <p>123456789</p>
                  </div>
            </div>
    </div>
    </div>
         */}

const ShelterProfile = () => {
  return (
    <>

    <NavbarHarshit/>

 <hr />
    <div className="wrap">
        <div className="profile">
            <div className="profile-bio-container">
            <div className="container-1">
                <div className="left-container-1">
                <img src="" alt="Ngo Logo" height="200px" width="200px" />
                </div>
                <div className="right-container-1">
                <h3>Animal Aid Unlimited</h3>
                <h4>  <i class="fas fa-map-pin"></i>
                    <p>14, Shahdra,Delhi-95.</p>
                </h4>
                
                </div>
            </div>
            <Carousel navButtonsAlwaysVisible={true} autoPlay={false}>
            <img
                className='sliding-image'
                src={require("../assets/slider-image.jpeg")}
                alt="Image of Dog"
                />

                <img
                className='sliding-image'
                src={require("../assets/slider-image.jpeg")}
                alt="Image of Dog"
                />

                <img
                className='sliding-image'
                src={require("../assets/slider-image.jpeg")}
                alt="Image of Dog"
                />


            </Carousel>
            <h4 id="description">Founded in 2002.Our mission is to rescue and treat owner-less street animals of Udaipur who have become ill or injured, and through their rescue inspire the community to care</h4>
        </div>

        <hr />
        </div>
        <br />

        
            <div className="certificate">
            <span>Certificate</span>
                <img src="../assets/Volunteer-2.jpeg" alt="ngo-certificate" height="400px" width="400px" id="certificate" />
            </div>
            <hr/>
            <br />


            <span>Reviews</span>
            <div className="reviews" id="reviews">
                <div className="review-card">
                    <i className="far fa-user-circle"></i>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, facilis.</p>
                </div>
               
                <div className="review-card" >
                    <i className="far fa-user-circle"></i>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, facilis.</p>
                </div>

                <div className="review-card" >
                    <i className="far fa-user-circle"></i>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, facilis.</p>
                </div>
               
                <div className="posted-reviews" id="posted-review"></div>

                <br/>
                <span>Add review</span>
                <div className="submit-review">
                <div className="submit-review-card">
                    <i className="far fa-user-circle"></i>
                    <input type="text" id="text" />
                    
                </div>
                <br />
                <button className="sign-up" id="post">Post</button>
                </div>

                <br />
                <br />
                <br />
        <span>Donate us</span>
        <div className="donation-details">
            <div className="bank-detail">
            <h4>Bank Name:</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="bank-detail">
            <h4>Account Number:</h4>
            <p>Lorem, ipsum dolor.</p>
            </div>
            <div className="bank-detail">  
            <h4>IFSC Code:</h4>
            <p>Lorem, ipsum dolor.</p>
            </div>

        </div>

        <br />
        <br />
        <br />
         <span>CONTACT US</span>
            <div className="contact">
                <div className ="social">
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                  </div>
                  <div className="number">
                    <i className="fas fa-phone-alt"></i>
                    <p>123456789</p>
                  </div>
            </div>

        </div>
        </div>
     

    </>
  )
}

export default ShelterProfile