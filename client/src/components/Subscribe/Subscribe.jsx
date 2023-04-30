import React from "react";
import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import axios from "axios";
import moment from "moment";

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import {CircularProgress} from "@mui/material";
// import { API_URL } from './config/index';

const HomePage = () => {
  const [sessionId, setSessionId] = useState("");
  const [status, setStatus] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [dateAndTime, setDataAndTime] = useState("");
  const [meal, setMeal] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const payment = JSON.parse(localStorage.getItem("payment"));
  const [loading,setLoading]=useState(false)
  const API_URL = "https://imms-backend1.onrender.com";
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    const searchParams = new URLSearchParams(window.location.search);
    const sessionId = searchParams.get("session_id");
    console.log("useEffect Triggered");
    console.log(sessionId);
    if (sessionId) {
      setSessionId(sessionId);
    }

    if (query.get("success")) {
      // console.log("Order placed! You will receive an email confirmation.");
      setLoading(true)
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: user.username,
          token: payment.token,
          date: payment.date,
          time: payment.time,
        }),
      };
      function checkPaymentStatus(sessionId) {
        console.log(sessionId);
        fetch(`${API_URL}/api/stripe/check-status/${sessionId}`, requestOptions)
          .then((response) => {
            console.log("response is ", response);
            return response.json();
          })
          .then((data) => {
            console.log("data is ", data);
            setStatus(data.status);
            setLoading(false)
            localStorage.removeItem("payment");
          })
          .catch((error) => {
            console.error("helo", error);
          });
      }
      
      checkPaymentStatus(sessionId);
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }

    console.log("helel");
  }, []);

  const handleSelectChange = (event) => {
 
    setSelectedOption(event.target.value);
  };
  const handleBreakfastChange = (event) => {
   
    setMeal(event.target.value);
  };

  if (loading) {
    return (
      <div className="loading-container">
      <CircularProgress />
    </div>
    );
  }



  return (
    <section style={{marginBottom:'130px'}}>
      <div className="product">
        <Box
          component="form"
          action={`${API_URL}/api/stripe/create-checkout-session`}
          method="POST"
          noValidate
          sx={{
            mt: 3,
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid container spacing={5}>
            <Grid item xs={12} sm={12} sx={{ marginBottom: "8px" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Meal</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  value={selectedOption}
                  name="id"
                  required
                  onChange={handleSelectChange}
                >
                  <MenuItem value="0">Single Token</MenuItem>
                  <MenuItem value="1"> Subscription (45 Token)</MenuItem>
                  <MenuItem value="2">Subscription (90 Token)</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {selectedOption === "0" && (
              <>
                <div
                  style={{
                    display: "flex",
                    margin: "auto",
                    // justifyContent: "space-around",

                  }}
                >
                  <TextField
                  
                  sx={{marginLeft:'1px'}}
                    type="date"
                    InputProps={{
                      inputProps: {
                        min: new Date(
                          new Date().setDate(new Date().getDate() + 1)
                        )
                          .toISOString()
                          .split("T")[0],
                      },
                    }}
                    required
                    value={dateAndTime}
                    onChange={(event) =>
                      setDataAndTime(event.currentTarget.value)
                    }
                  />
                  <Select
                    sx={{marginRight:'1px'}}
                    labelId="demo-simple-select-label"
                    value={meal}
                    name="meals"
                    required
                    onChange={handleBreakfastChange}
                  >
                    <MenuItem value="0">Breakfast</MenuItem>
                    <MenuItem value="1">Lunch</MenuItem>
                    <MenuItem value="2">Dinner</MenuItem>
                  </Select>
                </div>
              </>
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => {
              
              localStorage.setItem(
                "payment",
                JSON.stringify({
                  token: selectedOption,
                  date: dateAndTime,
                  time: meal,
                })
              );
            }}
          >
            Checkout
          </Button>
        </Box>
      </div>
    </section>
  );
};

export default HomePage;
