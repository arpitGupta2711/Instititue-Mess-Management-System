import React from 'react'
import './styles.css'

import { Typography,Grid } from '@mui/material';

const Footer = () => {
  return (
    <div className='footer'>
        <Grid container spacing={2} sx={{marginBottom:'5px'}}>
            <Grid item xs={12}>
            <Typography sx={{fontFamily: "'Kalam', cursive"}}>About Us: We're providing a hustle free token system acting as  a three way bridge between students, mess and administration.</Typography>

            </Grid>
            <Grid item xs={12}>
            
    <Typography sx={{fontFamily: "'Kalam', cursive"}}>Contact us: 9583949392</Typography>
            </Grid>
            <Grid item xs={12}>
            
            <Typography sx={{fontFamily: "'Kalam', cursive"}}>Email us: agvinayak27@gmail.com</Typography>

            </Grid>
            <Grid item xs={12}>
            
            <Typography sx={{fontFamily: "'Kalam', cursive"}}>Terms and Condition</Typography>

            </Grid>
        </Grid>
        <div style={{fontSize:"20px",display:'flex',justifyContent:'center'}}>
        <Typography sx={{fontFamily: "'Kalam', cursive"}}>Copyright ©{new Date().getFullYear()}</Typography>

            
        </div>
    </div>
  ) 
}

export default Footer