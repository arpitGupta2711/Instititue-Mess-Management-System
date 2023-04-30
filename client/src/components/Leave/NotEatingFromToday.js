import React, { useEffect, useState } from "react";
import { FormControl, FormLabel } from "@mui/material";
import { Box, Button, Input, MenuItem, Select } from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";

const StyledButton = styled(Button)({
  marginTop: "15px",
});

const NotEatingFromToday = () => {
  const [selectedDate, setSelectedDate] = useState();
  const [selectedMeal, setSelectedMeal] = useState();
  const [click, setClick] = useState(false);

  const handleChangeDate = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleChangeMeal = (event) => {
    setSelectedMeal(event.target.value);
  };
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (click) {
      console.log("clicked");
      axios
        .post("https://imms-backend1.onrender.com/cancel-meal/", {
          username: user.username,
          date: selectedDate,
          time: selectedMeal,
        })
        .then((res) => {
          console.log(res);
          alert("successfully leave approved");
        })
        .catch((err) => {
          console.log(err);
        });
      setClick(false);
    }
  }, [click]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setClick(true);
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <FormControl required sx={{ width: "30%" }}>
        <FormLabel>Date</FormLabel>
        <Input
          type="date"
          value={selectedDate}
          onChange={handleChangeDate}
          sx={{ width: "100%" }}
          InputProps={{
            inputProps: { min: new Date(new Date().setDate(new Date().getDate()+1)).toISOString().split("T")[0] },
          }}
        />
      </FormControl>

      <FormControl required sx={{ width: "30%", margin: "24px" }}>
        <FormLabel>Meal</FormLabel>
        <Select
          value={selectedMeal}
          onChange={handleChangeMeal}
          input={<Input id="input1" hidden={true} placeholder="input data" />}
          sx={{ width: "100%", textAlign: "left", marginLeft: "10px" }}
        >
          <MenuItem></MenuItem>
          <MenuItem>-Select Meal-</MenuItem>
          <MenuItem value={0}>BreakFast</MenuItem>
          <MenuItem value={1}>Lunch</MenuItem>
          <MenuItem value={2}>Dinner</MenuItem>
        </Select>
      </FormControl>

      <StyledButton
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{ width: "100%", marginTop: "15px" }}
      >
        Submit
      </StyledButton>
    </Box>
  );
};

export default NotEatingFromToday;
