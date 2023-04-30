import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Grid,
  Paper,
  Card,
  CardContent,
  Typography,
  Avatar,
} from "@mui/material";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import TransactionLog from "../components/Transaction/transaction-log";
const UserTransaction = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [userLog, setUserLog] = useState([]);
  if (userLog) {
    console.log("User logs are ", userLog);
  }
  console.log(user);
  useEffect(() => {
    axios
      .post("https://imms-backend1.onrender.com/get-my-transactions/", {
        username: user.username,
      })
      .then((res) => {
        console.log(res);
        setUserLog(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: "64px", mb: "64px" }}>
        <Grid container sx={{ backgroundColor: "teal" }}>
          {userLog &&
            userLog.map((log) => <TransactionLog log={log} key={log.id} />)}
        </Grid>
      </Container>
    </div>
  );
};

export default UserTransaction;
