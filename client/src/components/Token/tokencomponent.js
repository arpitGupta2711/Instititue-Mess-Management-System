import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MoneyIcon from "@mui/icons-material/Money";
import Battery0BarIcon from "@mui/icons-material/Battery0Bar";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

const meal = (meal)=>{
  if(meal==='0'){
    return 'Breakfast'
  }
  else if(meal==='1'){
    return 'Lunch'
  }
  else{
    return 'Dinner'
  }
}

export const TokenComponent = ({ token }) => {
  console.log('tokens are ',token);
  return (
    <Grid item sm={6} xs={12}>
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
               {token.tokenDate}
              </Typography>
              <Typography color="textPrimary" variant="h6">
                {meal(token.tokenTime)}
            
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
    </Grid>
  );
};
