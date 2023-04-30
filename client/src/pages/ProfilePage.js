import React from "react";
import { useState, useEffect } from "react";
import DashboardNavbar from "../components/dashboard-navbar";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  CardMedia,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./styles.css";
import QRCode from "react-qr-code";
import {CircularProgress} from "@mui/material";
import { useDispatch } from "react-redux";
import { manageProfilePageNavbar } from "../features/manageNavSlice";
import { viewTokens } from "../actions/tokens";
const item = [
  {
    img: "https://unsplash.com/photos/1Su3t-fqNxY",
    title: "evening",
  },
];

const ProfilePage = () => {
  console.log(" i am in profile page");
  const [showQr, setShowQr] = useState(false);
  const [value, setValue] = useState("");
  const [tokensA, setTokens] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const [loading,setLoading]=useState(true)
  const dispatch = useDispatch();
  dispatch(manageProfilePageNavbar());
  useEffect(() => {
    if (user) {
    viewTokens({ username: user.username }).then((value) => {
        console.log("value", value);
        console.log("valuedata", value.data);
        setTokens(value.data);
        setLoading(false);
      });
      setValue(user.username);
    }
  }, []);


  if (loading) {
    return (
      <div className="loading-container">
      <CircularProgress />
    </div>
    );
  }



  return (
    <>
      <DashboardNavbar
        data={tokensA}
        name={user?.name}
        email={user?.email}
        loading={loading}
      ></DashboardNavbar>
      <Grid
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          onClick={() => {
            setShowQr(true);
          }}
        >
          Show QR Code
        </Button>
        <Link to="/leavepage">
          <Button variant="contained" sx={{ margin: 2 }}>
            {" "}
            Leave Application
          </Button>
        </Link>
        <Link to="/user-transaction">
          <Button variant="contained">Transactions</Button>
        </Link>
      </Grid>

      {showQr && (
        <div
          onClick={() => {
            setShowQr(false);
          }}
          className="overlay"
        >
          <div
            className="form-container"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {value ? (
              <QRCode
                title={"Press any where else to exit"}
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                viewBox={`0 0 256 256`}
                value={value}
              />
            ) : (
              "no token"
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProfilePage;
