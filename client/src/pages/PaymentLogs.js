import React, { useEffect } from 'react'
import { useState } from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Typography } from '@mui/material';

const PaymentLogs = () => {
    const [payments,setPayments]=useState([]);
    useEffect(()=>{
        axios
      .get("https://imms-backend1.onrender.com/get-all-transactions/")
      .then((res) => {
        console.log("feedbacks", res);
        setPayments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    },[])
  return (
    <div>
          <div style={{ display: "flex", justifyContent: "center" }}>

        <Typography
          sx={{ typography: { lg: "h4", xs: "h4" }, margin: "10px" }}
          color="text.secondary"
        >
          Attendance Logs
        </Typography>
      </div>


         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name of the user</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Token Number</TableCell>
            <TableCell align="center">Amount (in ₹)</TableCell>
            <TableCell align="center">TimeStamp</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {payments.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {`${row.firstName}  ${row.lastName}`}
              </TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.numberOfToken}</TableCell>
              <TableCell align="center">{row.amount}</TableCell>
              <TableCell align="center">{`${row.date} | ${row.time.slice(0,8)}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default PaymentLogs