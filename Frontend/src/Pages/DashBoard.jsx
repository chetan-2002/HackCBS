import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import NavbarHarshit from '../Components/Home/NavbarHarshit'




const DashBoard = () => {

    const [selected, setSelected] = useState('');

  const selectionChangeHandler = (event) => {
    setSelected(event.target.value);
  };



  return (
    <>
        <NavbarHarshit/>

        <div class="container">
        <div class="welcome-container">
            <h3>Welcome!</h3>
        </div>
        <div class="filter">
            <div class="dropdown">
                <button class="btn sign-up dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Choose Area
                </button>
                <FormControl style={{ marginTop: 100, marginLeft: 100 }}>
                    <Select displayEmpty value={selected} onChange={selectionChangeHandler}>
                        <MenuItem value="">
                        <em>All</em>
                        </MenuItem>
                        <MenuItem value={1}>West Delhi</MenuItem>
                        <MenuItem value={2}>East Delhi</MenuItem>
                        <MenuItem value={3}>South Delhi</MenuItem>
                        <MenuItem value={4}>North Delhi</MenuItem>
                    </Select>
                    <FormHelperText>Select an Area</FormHelperText>
                </FormControl>
              </div>
        </div>
        <br /> <br />  <br />
        </div>

    </>

  )
}

export default DashBoard