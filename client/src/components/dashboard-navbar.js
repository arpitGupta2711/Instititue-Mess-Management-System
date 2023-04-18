import React from 'react'
import PropTypes from 'prop-types';
import { CssBaseline ,AppBar,Toolbar,Typography,Button,Avatar, Grid, Box, Container } from '@mui/material'
import { withStyles } from '@mui/material';
import { fontWeight } from '@mui/system';
import { useState,useRef } from 'react';
import { TokenAvailable } from './dashboard/tokenAvailable';
import { TotalToken } from './dashboard/totalToken';
import { TotalDeposit } from './dashboard/totalDeposit';
import { AccountPopover } from './account-popover';


const DashboardNavbar = () => {
    const [openAccountPopover, setOpenAccountPopover] = useState(false);
    const settingsRef = useRef(null);
  return (
    <>
      <CssBaseline />
       {/* Dashboard Navbar */}
       {/* <AppBar position="static" color="default"  sx={{position:'relative'}}>
        <Toolbar >
          <Typography variant="h6" color="inherit" noWrap sx={{flexGrow:1, fontWeight:'700', fontSize:{lg:'32px',sm:'20px'}}} >
            Imms
          </Typography>
          <Button variant='contained' >Account</Button>
          <Avatar
            onClick={() => setOpenAccountPopover(true)}
            ref={settingsRef}
            sx={{
              cursor: 'pointer',
              height: 40,
              width: 40,
              ml: 3
            }}
            src="/static/images/avatars/avatar_1.png"
          ></Avatar>
        </Toolbar>
      </AppBar> */}

      <Box 
      component='main'
      sx={{
        flexGrow:1,
        py:8
      }}
      >
        <Container>
          <Grid container spacing={5} sx={{justifyContent:'center'}}>
            <Grid item lg={3} sm={6} xl={3} xs={12}><TokenAvailable></TokenAvailable></Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}><TotalToken></TotalToken></Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}><TotalDeposit></TotalDeposit></Grid>
          </Grid>
        </Container>

      </Box>

      <AccountPopover
       anchorEl={settingsRef.current}
       open={openAccountPopover}
       onClose={()=>setOpenAccountPopover(false)}
      ></AccountPopover>

     
    </>
  )
}

export default DashboardNavbar