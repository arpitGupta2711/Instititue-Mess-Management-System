import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import axios from "axios";
import { useDispatch } from "react-redux";
import { manageUpdateMenuNavbar } from "../features/manageNavSlice";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Typography,
  Container,
  Grid,
} from "@mui/material";

function createData(day, breakfast, lunch, dinner) {
  return { day, breakfast, lunch, dinner };
}

const rows = [
  // createData("Monday", 237, 9.0, 37),
  // createData("Tuesday", 262, 16.0, 24),
  // createData("Wednesday", 305, 3.7, 67),
  // createData("Thursday", 356, 16.0, 49),
  // createData("Friday", 356, 16.0, 49),
  // createData("Saturday", 356, 16.0, 49),
  // createData("Sunday", 159, 6.0, 24),
];

export default function MenuUpdate() {
  const dispatch = useDispatch();
  dispatch(manageUpdateMenuNavbar());
  const [mealDay, setMealDay] = useState("monday");
  const [mealTime, setMealTime] = useState("breakfast");
  const [meal, setMeal] = useState("");
  const [click, setClick] = useState(false);
  const [menu, setMenu] = useState([]);
  const [finalMenu, setFinalMenu] = useState([]);

  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  console.log("here is finalmenu length", finalMenu.length);
  // if (finalMenu.length > 0) {
  //   console.log(finalMenu);
  //   finalMenu.forEach((d, index) => {
  //     rows.push(createData(index, d[0], d[1], d[2]));
  //   });
  // }

  const time = ["breakfast", "lunch", "dinner"];

  // let index = days.findIndex((day) => day === mealDay);

  useEffect(() => {
    axios.get("https://imms-backend1.onrender.com/menu/").then((res) => {
      console.log(res);
      var data = new Array();
      for (let i = 0; i < 7; i++) {
        data[i] = new Array();
      }
      // menu.forEach((item, index) => {
      //   console.log(item, index);
      //   data[parseInt(item.day)][parseInt(item.time)] = item.meal;
      // });
      for (let i = 0; i < 21; i++) {
        if (
          res.data[i] &&
          res.data[i].day &&
          res.data[i].time &&
          res.data[i].meal
        )
          data[parseInt(res.data[i].day)][parseInt(res.data[i].time)] =
            res.data[i].meal;
      }

      data.forEach((d, index) => {
        if (rows.length !== 7) {
          rows.push(createData(days[index].toUpperCase(), d[0], d[1], d[2]));
        }
      });

      console.log("setted final menu", rows);
      setFinalMenu(data);
    });
  }, []);

  useEffect(() => {
    if (click) {
      axios
        .post(`http://localhost:8000/update-menu/`, {
          day: days.findIndex((day) => day === mealDay),
          time: time.findIndex((time) => time === mealTime),
          meal: meal,
        })
        .then((res) => {
          window.location.reload();
          window.scrollTo(0, 0);
          console.log("updated menu is here", res);
        })
        .catch((err) => {
          console.log("Error in menu update", err);
        });
      setClick(false);
    }
  }, [click]);
  // http://localhost:8000/menu/

  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    console.log(mealDay);
    console.log(mealTime);
    console.log(meal);
    setClick(true);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
  };

  const handleChange = (event) => {
    setMealDay(event.target.value);
  };
  const handleChange1 = (event) => {
    setMealTime(event.target.value);
  };
  const handleChange2 = (event) => {
    setMeal(event.target.value);
  };

  return (
    <>
      <Container component="main" maxWidth="lg">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              typography: { lg: "h2", sm: "h3", xs: "h3" },
              textDecoration: "underline",
            }}
            mb={12}
          >
            Update Menu
          </Typography>
          <CssBaseline></CssBaseline>
          <Typography sx={{ typography: { lg: "h3", sm: "h4", xs: "h5" } }}>
            Current Menu
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Week Day</TableCell>
                  <TableCell align="right">BreakFast</TableCell>
                  <TableCell align="right">Lunch</TableCell>
                  <TableCell align="right">Dinner</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {rows.map((row, idx) => (
                  <TableRow
                    key={idx}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.day}
                    </TableCell>

                    <TableCell align="right">{row.breakfast}</TableCell>
                    <TableCell align="right">{row.lunch}</TableCell>
                    <TableCell align="right">{row.dinner}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>

      {/* UPDATE OPTIONS */}
      <Container component="main" maxWidth="lg">
        <Box mt={12} mb={20}>
          <Typography sx={{ typography: { lg: "h3", sm: "h4", xs: "h5" } }}>
            Update Menu
          </Typography>
          <Container maxWidth="sm">
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{
                mt: 3,
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id="day">Day</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="day"
                      name="day"
                      value={mealDay}
                      label="Day"
                      onChange={handleChange}
                    >
                      <MenuItem value="monday">Monday</MenuItem>
                      <MenuItem value="tuesday">Tuesday</MenuItem>
                      <MenuItem value="wednesday">Wednesday</MenuItem>
                      <MenuItem value="thursday">Thursday</MenuItem>
                      <MenuItem value="friday">Friday</MenuItem>
                      <MenuItem value="saturday">Saturday</MenuItem>
                      <MenuItem value="sunday">Sunday</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id="meal">Meal</InputLabel>
                    <Select
                      labelId="meal"
                      id="meal"
                      name="meal"
                      value={mealTime}
                      label="breakfast"
                      onChange={handleChange1}
                    >
                      <MenuItem value="breakfast">BreakFast</MenuItem>
                      <MenuItem value="lunch">Lunch</MenuItem>
                      <MenuItem value="dinner">Dinner</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="newmenu"
                    label="New Menu"
                    name="newmenu"
                    autoComplete="family-name"
                    onChange={handleChange2}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Update Menu
              </Button>
            </Box>
          </Container>
        </Box>
      </Container>
    </>
  );
}
