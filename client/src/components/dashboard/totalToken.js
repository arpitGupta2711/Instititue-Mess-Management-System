
import React from 'react';
import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import Battery90Icon from '@mui/icons-material/Battery90';

export const TotalToken = () => {
  return (
    <Card
         sx={{ height:'250px'}}
        >
            <CardContent>
                <Grid container spacing={3} sx={{ justifyContent:'space-between'}}>
                    <Grid item>
                        <Typography color='textSecondary'variant='overline' fontWeight={600}>
                            total token
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
                            backgroundColor: 'success.main',
                            height: 56,
                            width: 56
                            }}
                        >
                            <Battery90Icon></Battery90Icon>
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
                    <ArrowUpwardIcon color="success" />
                    <Typography
                    color="success"
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




