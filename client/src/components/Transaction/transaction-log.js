import React from "react";
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
import { PaidOutlined } from "@mui/icons-material";

const TransactionLog = ({ log }) => {
  console.log("down in", log);
  return (
    <>
      <Card sx={{ height: "250px", margin: "12px" }}>
        <CardContent>
          <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
            <Grid item>
              <Typography
                color="textSecondary"
                variant="overline"
                fontWeight={600}
                fontSize={15}
              >
                Payment balance
              </Typography>
              <Typography color="textPrimary" variant="h6">
                {log.amount}
              </Typography>
            </Grid>
            <Grid item>
              <Avatar
                sx={{
                  backgroundColor: "success.main",
                  height: 56,
                  width: 56,
                }}
              >
                <CheckOutlinedIcon />
              </Avatar>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default TransactionLog;
