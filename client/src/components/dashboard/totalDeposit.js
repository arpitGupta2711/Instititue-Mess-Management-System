
import React from 'react';
import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export const TotalDeposit = () => (
  <Card  sx={{ height:'250px'}}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
            fontWeight={600}
          >
            TOTAL Deposit
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
            fontWeight={600}
          >
            $0k
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'primary.main',
              height: 56,
              width: 56
            }}
          >
            <AttachMoneyIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);