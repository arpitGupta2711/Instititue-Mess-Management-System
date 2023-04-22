import React from "react";
import PropTypes from "prop-types";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Grid,
  Box,
  Container,
  Paper,
} from "@mui/material";
import { withStyles } from "@mui/material";
import { fontWeight } from "@mui/system";
import { useState, useRef } from "react";
import { TokenAvailable } from "./dashboard/tokenAvailable";
import { TotalToken } from "./dashboard/totalToken";
import { TotalDeposit } from "./dashboard/totalDeposit";
import { AccountPopover } from "./account-popover";
import { SilverToken } from "./dashboard/silverToken";
import { GoldToken } from "./dashboard/goldToken";

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

      <Container
        maxWidth="lg"
        sx={{
          mt: "64px",
          mb: "46px",
        }}
      >
        <Paper elevation={4} sx={{ backgroundColor: "teal", height: "400px" }}>
          <Grid container spacing={3} padding={3}>
            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
              xs={12}
            >
              <Typography
                sx={{ typography: { lg: "h4", sm: "h4", xs: "h5" } }}
                color="text.secondary"
              >
                Personal Details
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                // backgroundColor: "coral",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              xs={12}
            >
              <Typography
                sx={{ typography: { lg: "h5", sm: "h6", xs: "h6" } }}
                color="text.secondary"
                mr={2}
              >
                Name:
              </Typography>
              <Typography
                sx={{ typography: { lg: "h5", sm: "h6", xs: "h6" } }}
                color="text.secondary"
              >
                Abhishek
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                // backgroundColor: "coral",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              xs={12}
            >
              <Typography
                sx={{ typography: { lg: "h5", sm: "h6", xs: "h6" } }}
                color="text.secondary"
                mr={2}
              >
                Email:
              </Typography>
              <Typography
                sx={{ typography: { lg: "h5", sm: "h6", xs: "h6" } }}
                color="text.secondary"
              >
                abhishek@101gmail.com
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container>
          <Grid container spacing={5} sx={{ justifyContent: "center" }}>
            <Grid item lg={6} sm={6} xl={3} xs={12}>
              <SilverToken />
            </Grid>
            <Grid item lg={6} sm={6} xl={3} xs={12}>
              <GoldToken />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <AccountPopover
        anchorEl={settingsRef.current}
        open={openAccountPopover}
        onClose={() => setOpenAccountPopover(false)}
      ></AccountPopover>
    </>
  );
};

export default DashboardNavbar;
