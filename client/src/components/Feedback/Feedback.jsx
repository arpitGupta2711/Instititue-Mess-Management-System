import React from 'react'

import { Typography,Grid,TextField } from '@mui/material';
import { Rating } from '@mui/material';
import Button from '@mui/material/Button';
import './styles.css'

const Feedback = () => {
    const handleSubmit=()=>{

    }
  return (
    <div className="feedback">
    
    <form onSubmit={handleSubmit}>
        <Grid container spacing={2} sx={{marginBottom:'20px'}}>
            <Grid item xs={6}>
            <div style={{textAlign:'center',fontSize:'25px',fontFamily: "'Kalam', cursive",}}>Rate Today's Meal</div>

            </Grid>
            <Grid item xs={6}>
            <Rating
  name="simple-controlled"
//   value={value}
//   onChange={(event, newValue) => {
//     setValue(newValue);
//   }}
sx={{textAlign:'center',marginLeft:'47%'}}
/>
            </Grid> 
            </Grid>
<div style={{display:'flex', justifyContent:'center',marginBottom:'2%'}}>
<TextField required  multiline sx={{backgroundColor:'white',width:'68%',height:'100%'}} id="outlined-basic" label="Feedback" variant="outlined" />

</div>
<Button sx={{backgroundColor: '#733c1f',borderRadius:'18px' ,marginLeft:'77%',marginBottom:'20px'}} variant="contained"> 
  <Typography sx={{fontFamily: "'Architects Daughter', cursive"}}>Submit</Typography>

    
    </Button>

    </form>
    
    </div>
  )
}

export default Feedback