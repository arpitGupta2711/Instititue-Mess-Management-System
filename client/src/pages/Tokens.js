import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { TokenComponent } from "../components/Token/tokencomponent";
import { tokenData } from "../data";

export const Tokens = (props) => {
  const location = useLocation();
  const propsData = location.state;
  console.log("token data is available", propsData);
  return (
    <Grid>
      {tokenData.map((token) => (
        <TokenComponent key={token.id} token={token}></TokenComponent>
      ))}
    </Grid>
  );
};
