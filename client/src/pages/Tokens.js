import React from "react";
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
export const Tokens = () => {
  return (
    <Grid>
      {tokenData.map((token) => (
        <TokenComponent key={token.id} token={token}></TokenComponent>
      ))}
    </Grid>
  );
};
