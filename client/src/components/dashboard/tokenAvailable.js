
import React from 'react';
import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoneyIcon from '@mui/icons-material/Money';
import Battery0BarIcon from '@mui/icons-material/Battery0Bar';

export const TokenAvailable = () =>{
    return (
        <Card
         sx={{ height:'250px'}}
        >
            <CardContent>
                <Grid container spacing={3} sx={{ justifyContent:'space-between'}}>
                    <Grid item>
                        <Typography color='textSecondary'variant='overline' fontWeight={600}>
                            Available token
                        </Typography>
                        <Typography
                            color="textPrimary"
                            variant="h4"
                        >
                        0
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Avatar
                            sx={{
                            backgroundColor: 'error.main',
                            height: 56,
                            width: 56
                            }}
                        >
                            <Battery0BarIcon />
                        </Avatar>
                    </Grid>
                </Grid>
                <Box
                    sx={{
                    pt: 2,
                    display: 'flex',
                    alignItems: 'center'
                    }}
                >
                    <ArrowDownwardIcon color="error" />
                    <Typography
                    color="error"
                    sx={{
                        mr: 1
                    }}
                    variant="body2"
                    fontWeight={600}
                    >
                    0
                    </Typography>
                    <Typography
                    color="textSecondary"
                    variant="caption"
                    fontWeight={600}
                    >
                    Since last month
                    </Typography>

                </Box>
            </CardContent>

        </Card>
    )
}

