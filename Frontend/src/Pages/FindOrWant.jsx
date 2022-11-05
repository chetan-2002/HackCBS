import { requirePropFactory } from '@mui/material';
import React from 'react'
import NavbarHarshit from '../Components/Home/NavbarHarshit';
import "../styles/findorwant.css";


const FindOrWant = () => {
  return (
    <>
    <NavbarHarshit/>
    <div className='card-container left'>
      <div className='image-container'>
        <img src={require("../assets/volunteer_image_findorwant.webp")}
                alt="Image of Dog" />
      </div>
      <div className='card-title'>
        <h3>abc</h3>
      </div>
      <div className='card-body'>
        <div className='card-title'>
          <h3>abc</h3>
        </div>
        <div className='card-body'>
          <p>xyz</p>
        </div>
      </div>
      <div className='btn'>
        <button>
          <a >
            view more
          </a>
        </button>
      </div>
    </div>
    <div className='card-container right'>
      <div className='image-container'>
        <img src={require("../assets/ngo_image_findorwant.webp")}
                alt="Image of Dog" />
      </div>
      <div className='card-title'>
        <h3>pqr</h3>
      </div>
      <div className='card-body'>
        <div className='card-title'>
          <h3>xyz</h3>
        </div>
        <div className='card-body'>
          <p>zbc</p>
        </div>
      </div>
      <div className='btn'>
        <button>
          <a >
            view more
          </a>
        </button>
      </div>
    </div>

   
</>
  )
}

export default FindOrWant
/*
<button class="split left">
<div class="centered">
{/* can add image here */
 