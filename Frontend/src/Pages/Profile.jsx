import { Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/profile.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import Carousel from "react-material-ui-carousel";

const Profile = () => {
  return (
    <>
    <div className='main'>

    
        <div className='top'>
        </div>
        <div>
            <div className='images-slider'>
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

        </div>

        <div className='shelter-info'>
            <div className='info-heading'>
                <img
                className='shelter-logo'
                src={require("../assets/homepageDog.JPG")}
                alt="Image of Dog"
                />
                
                <div className='shelter-title'>
                    <Typography variant="h5">Shelter Name</Typography>
                    <Typography variant="h6">Shelter Addess</Typography>
                </div>
            </div>
            <div className='description'>
                <div className='description-content'>
                    Founded in 2002.Our mission is to rescue and treat owner-less street animals of Udaipur who have become ill or injured, and through their rescue inspire the community to care Founded in 2002.Our mission is to rescue and treat owner-less street animals of Udaipur who have become ill or injured, and through their rescue inspire the community to care Founded in 2002.Our mission is to rescue and treat owner-less street animals of Udaipur who have become ill or injured, and through their rescue inspire the community to care
                </div>
                
            </div>
        </div>
        </div>

        
        </div>
    </>

  )
}

export default Profile