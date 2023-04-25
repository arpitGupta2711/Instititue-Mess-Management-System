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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
  const dispatch = useDispatch();
  dispatch(manageProfilePageNavbar());
  useEffect(() => {
    if (user) {
      const tokens = viewTokens({ username: user.username }).then((value) => {
        console.log("value", value);
        console.log("valuedata", value.data);
        setTokens(value.data);
      });
    }
  }, []);
  // const user = JSON.parse(localStorage.getItem('user'));
  // if(value===""){
  //   const use=user.userId;
  //   const a = use.toString()
  //   console.log('here ',typeof(a));
  //   setValue(a)
  // }
  return (
    <>
      <DashboardNavbar data={tokensA}></DashboardNavbar>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          sx={{ width: "40%" }}
          variant="contained"
          onClick={() => {
            setShowQr(true);
          }}
        >
          Show QR Code
        </Button>
      </div>

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
            {value && (
              <QRCode
                title="Your account"
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                viewBox={`0 0 256 256`}
                value={value}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProfilePage;
