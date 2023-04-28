import React from "react";
import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import axios from "axios";

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
// import { API_URL } from './config/index';
const HomePage = () => {
  const [sessionId, setSessionId] = useState("");
  const [status, setStatus] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [dateAndTime, setDataAndTime] = useState("");
  const [meal,setMeal]=useState('')
  const user = JSON.parse(localStorage.getItem('user'))
  const payment = JSON.parse(localStorage.getItem('payment'))
  const API_URL = "http://localhost:8000";
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
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: user.username,token:payment.token,date:payment.date,time:payment.time})
    };
      function checkPaymentStatus(sessionId) {
        console.log(sessionId);
        fetch(`${API_URL}/api/stripe/check-status/${sessionId}`, requestOptions)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setStatus(data.status);
            localStorage.removeItem('payment')
          })
          .catch((error) => {
            console.error(error);
          });
      }
  

      checkPaymentStatus(sessionId);
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }

    console.log('helel')





  }, []);

  const handleSelectChange = (event) => {
    // console.log('heelofsdg');
    // console.log(event.target.value);
    // selectedOption==='Single Token'?console.log('hello'):console.log('not selected')
    setSelectedOption(event.target.value);
  };
  const handleBreakfastChange = (event) => {
    // console.log('heelofsdg');
    // console.log(event.target.value);
    // selectedOption==='Single Token'?console.log('hello'):console.log('not selected')
    setMeal(event.target.value);
  };
  function checkPaymentStatus(sessionId) {
    fetch(`${API_URL}/api/stripe/check-status/${sessionId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setStatus(data.status);
      })
      .catch((error) => {
        console.error(error);
      });
  }


  return (
    <section>
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
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} sx={{marginBottom:'8px'}}>
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
                  <MenuItem value="1">45 Token</MenuItem>
                  <MenuItem value="2">90 Token</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {selectedOption === "0" && (
              <>
              <div style={{ display: "flex", margin: "auto" ,justifyContent:'center'}}>
                <TextField
                  // label="Controlled field"
                  type="date"
                  required
                  value={dateAndTime}
                  onChange={(event) => setDataAndTime(event.currentTarget.value)}
                />
                <Select
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
            onClick={()=>{
              localStorage.setItem('payment',JSON.stringify({token:selectedOption,date:dateAndTime,time:meal}))
            }}
          >
            Checkout
          </Button>
        </Box>

        {/* <div className="description">
          <h3>Stubborn Attachments</h3>
          <h5>$20.00</h5>
        </div> */}
      </div>
      {/* <form action={`${API_URL}/api/stripe/create-checkout-session`} method="POST">

      <button type="submit">
        Checkout
      </button>
    </form> */}

      {/* <div>
        <button onClick={() => checkPaymentStatus(sessionId)}>
          Check Payment Status
        </button>
        <p>Payment Status: {status}</p>
      </div> */}
    </section>
  );
};

export default HomePage;
