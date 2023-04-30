import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MoneyIcon from "@mui/icons-material/Money";
import Battery0BarIcon from "@mui/icons-material/Battery0Bar";
import { Link } from "react-router-dom";
import {CircularProgress} from "@mui/material";
import { Tokens } from "../../pages/Tokens";

export const SilverToken = ({ token,loading }) => {
  console.log("silver", token);
  if (loading) {
    return (
      <div className="loading-container">
      <CircularProgress />
    </div>
    );
  }
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        
        height="220"
        image="https://silvertoken.com/wp-content/uploads/2020/08/silver-token.png"
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "24px",
          padding: "17px",
        }}
      >
        <Typography gutterBottom variant="h5" component="div" fontWeight={600}>
          Silver Token
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "24px",
          padding: "17px",
        }}
      >
        <Link to="/silvertokens" state={token}>
          <Button variant="contained" size="large">
            Tokens
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
