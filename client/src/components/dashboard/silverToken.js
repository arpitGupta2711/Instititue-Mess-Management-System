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
import { Tokens } from "../../pages/Tokens";

export const SilverToken = ({ token }) => {
  console.log("silver", token);
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="220"
        image="https://img.freepik.com/free-photo/cardano-blockchain-platform-concept_23-2150278250.jpg?size=626&ext=jpg&ga=GA1.1.112187679.1681490516&semt=sph"
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
