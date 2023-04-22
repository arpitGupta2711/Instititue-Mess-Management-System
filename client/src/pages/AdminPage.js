import React, { useEffect } from "react";

import { useState } from "react";
import { manageAdminPageNavbar } from "../features/manageNavSlice";
import { useDispatch } from "react-redux";

import {
  Grid,
  Paper,
  Typography,
  Container,
  Box,
  Stack,
  Card,
  CardHeader,
  Button,
  CardContent,
} from "@mui/material";
import img from "../image/food.jpg";
import { display } from "@mui/system";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminPage = () => {
  console.log("i am in adminPage");
  const data = useSelector((state) => state.qr);
  const dispatch = useDispatch();
  dispatch(manageAdminPageNavbar());
  const user = localStorage.getItem("user");

  console.log(data);

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: "64px", mb: "64px" }}>
        <Box>
          <Paper elevation={8}>
            <Grid container spacing={2}>
              {/* Welcome admin title */}
              <Grid item xs={12}>
                <Container maxWidth="lg">
                  <Typography
                    sx={{ typography: { lg: "h2", sm: "h3", xs: "h4" } }}
                    mb={8}
                  >
                    Welcome Admin
                  </Typography>
                </Container>
              </Grid>
              {/* Meal Data */}
              <Grid item xs={12}>
                <Paper
                  style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: "cover",
                    height: "450px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: "44px",
                    }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                  >
                    <Typography
                      sx={{ typography: { lg: "h4", xs: "h4" } }}
                      color="text.secondary"
                    >
                      Today's Meal Number Registerd
                    </Typography>
                  </Box>

                  <Container maxWidth="lg">
                    <Grid
                      container
                      spacing={3}
                      sx={{ justifyContent: "center" }}
                    >
                      <Grid item lg={3} sm={6} xl={3} xs={12}>
                        <Card sx={{ height: { lg: "100px", xs: "80px" } }}>
                          <CardContent>
                            <Typography
                              gutterBottom
                              component="div"
                              sx={{ typography: { lg: "h5", xs: "h6" } }}
                            >
                              BreakFast
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                              500
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>

                      <Grid item lg={3} sm={6} xl={3} xs={12}>
                        <Card sx={{ height: { lg: "100px", xs: "80px" } }}>
                          <CardContent>
                            <Typography
                              gutterBottom
                              component="div"
                              sx={{ typography: { lg: "h5", xs: "h6" } }}
                            >
                              Lunch
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                              750
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>

                      <Grid item lg={3} sm={6} xl={3} xs={12}>
                        <Card sx={{ height: { lg: "100px", xs: "80px" } }}>
                          <CardContent>
                            <Typography
                              gutterBottom
                              component="div"
                              sx={{ typography: { lg: "h5", xs: "h6" } }}
                            >
                              Dinner
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                              900
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </Container>
                </Paper>
              </Grid>

              <Grid item xs={12}>
                <Paper
                  style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: "cover",
                    height: "400px",
                  }}
                ></Paper>
              </Grid>
            </Grid>
          </Paper>
        </Box>
        <Link to="/qrScanner">
          <Button>Open QR Scanner</Button>
        </Link>
      </Container>
    </>
  );
};

export default AdminPage;
