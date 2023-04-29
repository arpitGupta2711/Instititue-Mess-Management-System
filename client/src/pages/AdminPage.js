import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { manageAdminPageNavbar } from "../features/manageNavSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
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



const AdminPage = () => {
  const dispatch = useDispatch();
  dispatch(manageAdminPageNavbar());
  const [register, setRegister] = useState({});
  const [feedbacks, setFeedbacks] = useState({});
  // const user = localStorage.getItem("user");


  useEffect(() => {
    axios.get("http://localhost:8000/get-registered/").then((res) => {
      console.log(res);
      setRegister(res.data);
    });
    
    axios.get("http://localhost:8000/view-feedback/").then((res) => {
      console.log('feedbacks',res);
      setFeedbacks(res.data);
    }).catch((err)=>{
      console.log(err);
    })


  
  }, []);

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

              {/*Todays registered meal */}
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
                     Meals Registered for Today
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
                              {register?.today && register?.today["0"]}
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
                              {register?.today && register?.today["0"]}
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
                              {register?.today && register?.today["0"]}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </Container>
                </Paper>
              </Grid>

              {/* Tommorow's Registered Meals */}

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
                      Meals Registered for Tommorow
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
                              {register?.tommorow && register?.tommorow["0"]}
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
                              {register?.tommorow && register?.tommorow["0"]}
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
                              {register?.tommorow && register?.tommorow["0"]}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </Container>
                </Paper>
              </Grid>

              {/* Feedbacks */}
              <Grid item xs={12}>
                <Paper
                  style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: "cover",
                    height: "400px",
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
                      sx={{ typography: { lg: "h4", xs: "h4" } ,margin:'10px'}}
                      color="text.secondary"
                    >
                      Feedbacks
                    </Typography>

                    <Container maxWidth="lg">
                      <TableContainer component={Paper}>
                        <Table  aria-label="simple table">
                          <TableHead>
                            <TableRow>
                              <TableCell
                              align="center"
                                sx={{ typography: { lg: "h5", xs: "h6" } }}
                              >
                                S.no
                              </TableCell>
                              <TableCell
                              align="center"
                                sx={{ typography: { lg: "h5", xs: "h6" } }}
                              >
                                Feedback
                              </TableCell>
                              <TableCell
                                align="center"
                                sx={{ typography: { lg: "h5", xs: "h6" } }}
                              >
                                Rating
                              </TableCell>
                            </TableRow>
                          </TableHead>

                          <TableBody>
                             {feedbacks.length&&feedbacks.map((row,index) => (
                        <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell align="center" component="th" scope="row">
                            {index+1}
                        </TableCell>
                        <TableCell align="center">{row.message}</TableCell>
                        <TableCell align="center">{row.rating}</TableCell>
                     
                        </TableRow>
                   ))} 


                            {/* <TableCell align="left">1.</TableCell>
                            <TableCell align="left">
                              Good but can improve
                            </TableCell>
                            <TableCell align="left">3</TableCell> */}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Container>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>


        <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
        <Box
        sx={{
          margin: 3,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link to="/qrScanner">
          <Button variant="contained">Open QR Scanner</Button>
        </Link>
      </Box>
      <Box
        sx={{
          margin: 3,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link to="/attendingLogs">
          <Button variant="contained">Open Attending Logs</Button>
        </Link>
      </Box>
        </div>



     
    </>
  );
};

export default AdminPage;
