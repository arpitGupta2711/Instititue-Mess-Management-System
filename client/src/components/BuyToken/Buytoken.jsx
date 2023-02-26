import React from 'react'

import Container from '@mui/material/Container';
import './styles.css'
import { Typography,Grid } from '@mui/material';


const Buytoken = () => {
  return (
   <Container className='buytoken' >
   <Typography variant='h3' sx={{fontSize:'35px',wordSpacing:'22px',textAlign:'center',marginBottom:'20px'}}>Buy Token</Typography>
   <Grid container spacing={2}>
    <Grid item xs={6}>

    </Grid >
    <Grid item xs={6}>

    </Grid >
    <Grid item xs={12}>
    
    </Grid >
    <Grid item xs={12}>

    </Grid >
   </Grid>

   </Container>
  )
}

export default Buytoken