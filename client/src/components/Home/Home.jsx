import React from "react";
import { useEffect,useState } from "react";
import { Typography, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { manageHomePageNavbar } from "../../features/manageNavSlice";

import Carousel from "../Carousel/Carousel";
import Button from "@mui/material/Button";
import "./styles.css";
import Testimonials from "../Testimonials/Testimonials";
import Feedback from "../Feedback/Feedback";
import { Link } from "react-router-dom";
import { getMenu } from "../../actions/menu.js";
export const Home = () => {
  const dispatch = useDispatch();
 const [user,setUser]=useState({});

  useEffect(() => {

    window.addEventListener('storage', () => {
      // When local storage changes, dump the list to
      // the console.
       setUser(JSON.parse(localStorage.getItem('myCart')) || {})   
    });
    dispatch(manageHomePageNavbar());
    // dispatch(getMenu());
  }, []);

  return (
    <>
      <img
        style={{ objectFit: "cover", width: "100%", height: "15rem" }}
        src="images/food.jpg"
        alt="food"
      />
      {/* <Paper sx={{textAlign:'center',backgroundColor:'BROW'}}>  */}
      <Typography
        sx={{
          marginTop: "2%",
          wordSpacing: "22px",
          textAlign: "center",
          fontSize: "300%",
          fontFamily: "'Kalam', cursive",
          color: "#664545",
        }}
      >
        INSTITUTE MEAL MANAGEMENT SYSTEM
      </Typography>
      {/* </Paper> */}
      <Carousel />
      <Grid className="gridContainer" container spacing={2}>
        <Grid className="gridItem" item xs={6}>
          <Typography
            sx={{
              fontFamily: "'Architects Daughter', cursive",
              fontSize: "20px",
            }}
          >
            Do you want to Subscribe?{" "}
          </Typography>
        </Grid>
        <Grid className="gridItem" item xs={6}>
          <Link
            to="/subscribe"
            style={{ color: "white", textDecoration: "none" }}
          >
            <Button
              sx={{ backgroundColor: "#733c1f", borderRadius: "18px" }}
              variant="contained"
            >
              <Typography sx={{ fontFamily: "'Architects Daughter', cursive" }}>
                Subscribe{" "}
              </Typography>
            </Button>
          </Link>
        </Grid>
        <Grid className="gridItem" item xs={6}>
          <Typography
            sx={{
              fontFamily: "'Architects Daughter', cursive",
              fontSize: "20px",
            }}
          >
            {" "}
            Try Tommorow's Meal
          </Typography>
        </Grid>
        <Grid className="gridItem" item xs={6}>
          <Link
            to="/buytoken"
            style={{ color: "white", textDecoration: "none" }}
          >
            <Button
              sx={{ backgroundColor: "#733c1f", borderRadius: "18px" }}
              variant="contained"
            >
              <Typography sx={{ fontFamily: "'Architects Daughter', cursive" }}>
                Buy Token{" "}
              </Typography>
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Typography
        sx={{
          marginTop: "2%",
          wordSpacing: "22px",
          textAlign: "center",
          fontSize: "300%",
          fontFamily: "'Kalam', cursive",
          color: "#664545",
        }}
      >
        Testimonials
      </Typography>
      <Testimonials />
      <Feedback />
    </>
  );
};
