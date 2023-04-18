import React from 'react'
import {   FormControl ,InputLabel,Select,MenuItem,Box,Typography,Container,Grid,Paper,Stack,TextField,Button} from '@mui/material';


const FeeUpdate = () => {
    const handleSubmit = ()=>{

    }
  return (
    <>
      <Container component="main" maxWidth="lg" >
        <Box  
            sx={{
                marginTop: 8,
                marginBottom: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',

            }}
        >
        <Typography sx={{ typography: { lg:'h2' ,sm: 'h3', xs: 'h4' } }} >Update Fee</Typography>
           
        </Box>
        <Typography sx={{ typography: { lg:'h3' ,sm: 'h4', xs: 'h5' } }}  mb={8}>Current Mess Fee</Typography>
        <Paper elevation={1} sx={{padding:'12px'}}>
          <Stack direction='row' spacing={2} alignItems='flex-start' justifyContent='space-between'>
             <Typography sx={{ typography: { lg:'h4' ,sm: 'h5', xs: 'h6' } }} >Subsciption Fee</Typography>
             <Typography sx={{ typography: { lg:'h4' ,sm: 'h5', xs: 'h6' } }} >XYZ$</Typography>
             <Typography sx={{ typography: { lg:'h4' ,sm: 'h5', xs: 'h6' } }} >90 Tokens</Typography>
          </Stack>
        </Paper>
        <Paper elevation={1} sx={{padding:'12px'}}>
          <Stack direction='row' spacing={2} alignItems='flex-start' justifyContent='space-between'>
             <Typography sx={{ typography: { lg:'h4' ,sm: 'h5', xs: 'h6' } }} >Token Fee</Typography>
             <Typography sx={{ typography: { lg:'h4' ,sm: 'h5', xs: 'h6' } }} >XYZ$</Typography>
             <Typography sx={{ typography: { lg:'h4' ,sm: 'h5', xs: 'h6' } }} >1 Token</Typography>
          </Stack>
        </Paper>

        <Container maxWidth='lg'>
            
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ marginTop: 8,
                marginBottom: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',}}>
                <Typography sx={{ typography: { lg:'h4' ,sm: 'h5', xs: 'h6' } }} mb={8} >Update Subscription Fee</Typography>    
                <Stack  direction='row' spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        autoComplete="given-name"
                        name="subscriptionfee"
                        required
                        fullWidth
                        id="subscriptionfee"
                        label="New Subscription Fee"
                       
                        />
                    </Grid>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                    Update
                   </Button>
                   
                </Stack>
                 
            </Box>
        </Container>
      </Container> 
    </>
  )
}

export default FeeUpdate