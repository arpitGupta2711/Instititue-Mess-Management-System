import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { manageLogsNavbar } from "../features/manageNavSlice";
import axios from "axios";
const MessAttendingLogs = () => {
  const [logs, setLogs] = useState([]);
  const a = [
    {
      date: "12/02/202",
      registeredBreakfast: 7,
      registeredLunch: 7,
      registeredDinner: 7,
      takenMealBreakfast: 1,
      takenMealLunch: 1,
      takenMealDinner: 1,
    },
    {
      date: "12/02/202",
      registeredBreakfast: 7,
      registeredLunch: 7,
      registeredDinner: 7,
      takenMealBreakfast: 1,
      takenMealLunch: 1,
      takenMealDinner: 1,
    },
    {
      date: "12/02/202",
      registeredBreakfast: 7,
      registeredLunch: 7,
      registeredDinner: 7,
      takenMealBreakfast: 1,
      takenMealLunch: 1,
      takenMealDinner: 1,
    },
    {
      date: "12/02/202",
      registeredBreakfast: 7,
      registeredLunch: 7,
      registeredDinner: 7,
      takenMealBreakfast: 1,
      takenMealLunch: 1,
      takenMealDinner: 1,
    },
  ];

  const dispatch = useDispatch();
  dispatch(manageLogsNavbar());
  useEffect(() => {
    axios.get("http://localhost:8000/get-report/").then((res) => {
      console.log(res);
      setLogs(res.data);
    });
  }, []);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Date</TableCell>

              <TableCell align="center">
                Breakfast (Attended/Registered)
              </TableCell>
              <TableCell align="center">Lunch (Attended/Registered)</TableCell>
              <TableCell align="center">Dinner (Attended/Registered)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {logs.length &&
              logs.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {row.date}
                  </TableCell>

                  <TableCell align="center">{`${row.takenMealBreakfast}/${row.registeredBreakfast}`}</TableCell>
                  <TableCell align="center">{`${row.takenMealLunch}/${row.registeredLunch}`}</TableCell>
                  <TableCell align="center">{`${row.takenMealDinner}/${row.registeredDinner}`}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MessAttendingLogs;
