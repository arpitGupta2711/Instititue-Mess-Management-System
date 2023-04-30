import React from "react";

import { Typography, Grid, TextField } from "@mui/material";
import { Rating } from "@mui/material";
import Button from "@mui/material/Button";
import "./styles.css";
import { useState } from "react";

import axios from "axios";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [input, setInput] = useState("");
  const user = JSON.parse(localStorage.getItem('user'))
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input, rating);
    axios.post('https://imms-backend1.onrender.com/give-feedback/', {
      username:user.username,
      message:input,
      rating:rating
    })
    .then(function (response) {
      console.log(response);
      setInput("")
      setRating(0)
    })
    .catch(function (error) {
      console.log(error);
    });

  };
  return (
    <div className="feedback">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
          <Grid item xs={6}>
            <div
              style={{
                textAlign: "center",
                fontSize: "25px",
                fontFamily: "'Kalam', cursive",
              }}
            >
              Rate Today's Meal
            </div>
          </Grid>
          <Grid item xs={6}>
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={(event, newValue) => {
                console.log(newValue);
                setRating(newValue);
              }}
              sx={{ textAlign: "center", marginLeft: "47%" }}
            />
          </Grid>
        </Grid>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "2%",
          }}
        >
          <TextField
            required
            multiline
            sx={{ backgroundColor: "white", width: "68%", height: "100%" }}
            value={input}
              onChange={(e) => {
                console.log(e.currentTarget.value);
                setInput(e.currentTarget.value);
              }}
            id="outlined-basic"
            label="Feedback"
            variant="outlined"
          />
        </div>
        <Button
          sx={{
            backgroundColor: "#733c1f",
            borderRadius: "18px",
            marginLeft: "77%",
            marginBottom: "20px",
          }}
          type="submit"
          variant="contained"
        >
          <Typography sx={{ fontFamily: "'Architects Daughter', cursive" }}>
            Submit
          </Typography>
        </Button>
      </form>
    </div>
  );
};

export default Feedback;
