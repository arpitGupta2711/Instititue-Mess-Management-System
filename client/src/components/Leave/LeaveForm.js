import React, { useState } from "react";
import { FormControl, FormLabel } from "@mui/material";
import { Button, TextField } from "@mui/material";
import { InputAdornment, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& .MuiFormControl-root": {
//       margin: theme.spacing(1),
//       width: "100%",
//     },
//     "& .MuiButton-root": {
//       margin: theme.spacing(3, 0),
//     },
//   },
// }));

const LeaveForm = () => {
  const [startDate, setStartDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [endDate, setEndDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [click, setClick] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  // const classes = useStyles();

  useEffect(() => {
    if (click) {
      console.log("clicked");
      axios
        .post("https://imms-backend1.onrender.com/leave/", {
          username: user.username,
          startDate: startDate,
          endDate: endDate,
        })
        .then((res) => {
          alert("successfully leave approved");
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      setClick(false);
    }
  }, [click]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("clicked");
    setClick(true);
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <FormLabel>Start Date</FormLabel>
              <TextField
                type="date"
                variant="outlined"
                value={startDate}
                InputProps={{
                  inputProps: { min: new Date(new Date().setDate(new Date().getDate()+1)).toISOString().split("T")[0] },
                }}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <FormLabel>End Date</FormLabel>
              <TextField
                type="date"
                variant="outlined"
                value={endDate}
                InputProps={{
                  inputProps: { min: new Date(new Date().setDate(new Date().getDate()+1)).toISOString().split("T")[0] },
                }}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={submitHandler}
          sx={{
            marginTop: "12px",
          }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default LeaveForm;
