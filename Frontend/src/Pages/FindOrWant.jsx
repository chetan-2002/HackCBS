import React from 'react'
import NavbarHarshit from '../Components/Home/NavbarHarshit';
import "../styles/findorwant.css";


const FindOrWant = () => {
  return (
    <>

    <NavbarHarshit/>

    <button class="split left">
  <div class="centered">
  {/* can add image here */}
    <h1>WANT TO VOLUNTEER</h1>
    <p>NGO's, Organisations, and .... bakwas</p>
  </div>
</button>

<button class="split right">
  <div class="centered">
  {/* img krlenge  */}
    <h2>FIND A VOLUNTEER</h2>
    <p>For those who want to contribute .... bakwas </p>
  </div>
</button>
</>
  )
}

export default FindOrWant