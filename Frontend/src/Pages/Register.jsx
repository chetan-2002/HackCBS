import { Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import '../styles/register.css'

export const  Register= () => {
  return (
    <div>
        <div className='signup-container'>
            <div className='form'>
            <div className='detail-group'>
            <p>Personal Details</p>
          <TextField
            // {...field}
            className="mt-8 mb-16"
            // error={!!errors.name}
            required
      
            label="Name"
            id="REQUEST_DATE"
            variant="outlined"
            fullWidth
      />

       <TextField
            // {...field}
            className="mt-8 mb-16"
            // error={!!errors.name}
            
      
            // helperText={errors?.name?.message}
            label="Email"
            required
            autoFocus
            id="REQUEST_DATE"
            variant="outlined"
            fullWidth
      />
      <TextField
            // {...field}
            className="mt-8 mb-16"
            // error={!!errors.name}
            required
            // helperText={errors?.name?.message}
            label="Phone Number"
            id="REQUEST_DATE"
            variant="outlined"
            fullWidth
      />
            </div>

            <div className='detail-group'>
            <p>Shelter Information</p>

       <TextField
            // {...field}
            className="mt-8 mb-16"
            // error={!!errors.name}
      
            // helperText={errors?.name?.message}
            label="Description"
            id="REQUEST_DATE"
            variant="outlined"
            fullWidth
      />
            </div>
 <div className='detail-group'>
            <p>Social Media Links</p>

       <TextField
            // {...field}
            className="mt-8 mb-16"
            // error={!!errors.name}
      
            // helperText={errors?.name?.message}
            label="Instagaram"
            id="REQUEST_DATE"
            variant="outlined"
            fullWidth
      />
       <TextField
            // {...field}
            className="mt-8 mb-16"
            // error={!!errors.name}
      
            // helperText={errors?.name?.message}
            label="Facebook"
            id="REQUEST_DATE"
            variant="outlined"
            fullWidth
      />
       <TextField
            // {...field}
            className="mt-8 mb-16"
            // error={!!errors.name}
      
            // helperText={errors?.name?.message}
            label="Twitter"
            id="REQUEST_DATE"
            variant="outlined"
            fullWidth
      />
            </div>
<div className='detail-group'>
            <p>Location</p>

       <TextField
            // {...field}
            className="mt-8 mb-16"
            // error={!!errors.name}
      
            // helperText={errors?.name?.message}
            label="Address"
            required
            id="REQUEST_DATE"
            variant="outlined"
            fullWidth
      />
       <TextField
            // {...field}
            className="mt-8 mb-16"
            // error={!!errors.name}
      
            // helperText={errors?.name?.message}
            required
            label="City"
            id="REQUEST_DATE"
            variant="outlined"
            fullWidth
      />
       <TextField
            // {...field}
            className="mt-8 mb-16"
            // error={!!errors.name}
      
            // helperText={errors?.name?.message}
            required
            label="State"
            id="REQUEST_DATE"
            variant="outlined"
            fullWidth
      />
       <TextField
            // {...field}
            className="mt-8 mb-16"
            // error={!!errors.name}
      
            // helperText={errors?.name?.message}
            label="Pincode"
            required
            id="REQUEST_DATE"
            variant="outlined"
            fullWidth
      />
            </div>

            <div className='detail-group'>
            <p>Bank Details</p>

       <TextField
            // {...field}
            className="mt-8 mb-16"
            // error={!!errors.name}
      
            // helperText={errors?.name?.message}
            label="Bank Name"
            id="REQUEST_DATE"
            variant="outlined"
            fullWidth
      />
       <TextField
            // {...field}
            className="mt-8 mb-16"
            // error={!!errors.name}
      
            // helperText={errors?.name?.message}
            label="Account Number"
            id="REQUEST_DATE"
            variant="outlined"
            fullWidth
      />
       <TextField
            // {...field}
            className="mt-8 mb-16"
            // error={!!errors.name}
      
            // helperText={errors?.name?.message}
            label="IFSC code"
            id="REQUEST_DATE"
            variant="outlined"
            fullWidth
      />
            </div>

            
      </div>
        </div>
    </div>
  )
}
