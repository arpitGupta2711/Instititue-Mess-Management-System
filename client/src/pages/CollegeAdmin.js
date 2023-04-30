import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Grid,
  Container,
  Box,
  Stack,
  Card,
  CardHeader,
  Button,
  CardContent,
} from "@mui/material";
import { Link } from "react-router-dom";


const CollegeAdmin = () => {
  const [logs, setLogs] = useState([]);
  const [feedbacks, setFeedbacks] = useState({});

  useEffect(() => {
    axios.get("https://imms-backend1.onrender.com/get-report/").then((res) => {
      console.log(res);
      setLogs(res.data);
    });

    axios
      .get("https://imms-backend1.onrender.com/view-feedback/")
      .then((res) => {
        console.log("feedbacks", res);
        setFeedbacks(res.data);
        axios
        .get("https://imms-backend1.onrender.com/get-all-transactions/")
        .then((res) => {
          console.log("feedbacks", res);
          setFeedbacks(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      })
      .catch((err) => {
        console.log(err);
      });

   
  }, []);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography
          sx={{ typography: { lg: "h4", xs: "h4" }, margin: "10px" }}
          color="text.secondary"
        >
          Attendance Logs
        </Typography>
      </div>
      <Container maxWidth="lg">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Date</TableCell>

              <TableCell align="center">
                Breakfast (Attended/Registered)
              </TableCell>
              <TableCell align="center">Lunch (Attended/Registered)</TableCell>
              <TableCell align="center">Dinner (Attended/Registered)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {logs.length &&
              logs.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {row.date}
                  </TableCell>

                  <TableCell align="center">{`${row.takenMealBreakfast}/${row.registeredBreakfast}`}</TableCell>
                  <TableCell align="center">{`${row.takenMealLunch}/${row.registeredLunch}`}</TableCell>
                  <TableCell align="center">{`${row.takenMealDinner}/${row.registeredDinner}`}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      </Container>

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
          sx={{ typography: { lg: "h4", xs: "h4" }, margin: "10px" }}
          color="text.secondary"
        >
          Feedbacks
        </Typography>

        <Container maxWidth="lg">
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
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
                {feedbacks.length &&
                  feedbacks.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center" component="th" scope="row">
                        {index + 1}
                      </TableCell>
                      <TableCell align="center">{row.message}</TableCell>
                      <TableCell align="center">{row.rating}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
<div  style={{display:'flex',justifyContent:'center'}}>
<Link to="/paymentlogs">
        <Button variant="contained">Transactions Details</Button>
      </Link>
</div>
      
    </div>
  );
};

export default CollegeAdmin;
