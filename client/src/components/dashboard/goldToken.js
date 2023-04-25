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
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MoneyIcon from "@mui/icons-material/Money";
import Battery0BarIcon from "@mui/icons-material/Battery0Bar";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

export const GoldToken = ({ token }) => {
  console.log("gold", token);
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="220"
        image="https://img.freepik.com/free-photo/cardano-blockchain-platform-concept_23-2150278248.jpg?w=740&t=st=1682100330~exp=1682100930~hmac=92ccb7f0116eb406e519664d62b4585f898523131a48f23dc64f62b4611c8097"
      />

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "24px",
          padding: "16px",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          color="textPrimary"
          component="div"
          fontWeight={600}
        >
          Gold Token
        </Typography>
        <Grid item>
          <Typography color="textSecondary" variant="overline" fontWeight={600}>
            total token
          </Typography>
          <Typography color="textPrimary" variant="h4">
            {token}
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
};
