import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import { display } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";

export default function Navbar() {
  const { Admin, AccountIcon, Login, SignUp, UpdateMenu, UpdateFee, Logout } =
    useSelector((store) => store.navbar);
  const user = JSON.parse(localStorage.getItem("user"));
  const handleLogout = () => {
  
    localStorage.clear();
    window.location.reload();
  };

  // console.log(Admin,AccountIcon,Login,SignUp)

  // const {,Account} = AdminPageButtons

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: "black",
              fontWeight: "700",
              letterSpacing: "2px",
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              {" "}
              IMMS{" "}
            </Link>
          </Typography>

          <Link
            to="/updatemenu"
            style={{ textDecoration: "none", color: "black" }}
          >
            {" "}
            <Button
              variant="contained"
              sx={{
                margin: "10px",
                display: `${UpdateMenu ? "block" : "none"}`,
              }}
            >
              Update Menu
            </Button>{" "}
          </Link>
          <Link
            to="/updatefee"
            style={{ textDecoration: "none", color: "black" }}
          >
            {" "}
            {/* <Button
              variant="contained"
              sx={{
                margin: "10px",
                display: `${UpdateFee ? "block" : "none"}`,
              }}
            >
              Update Fee
            </Button>{" "} */}
          </Link>

          {user?.type==='Admin'&& <Link to="adminpage" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{ margin: "10px", display: `${Admin ? "block" : "none"}` }}
            >
              Admin
            </Button>
          </Link>}

          {user?.type==="Student"&&<Link
            to="/profilepage"
            style={{ textDecoration: "none", color: "black" }}
          >
            {user&& <Button
              variant="contained"
              sx={{ margin: "10px", display: `${AccountIcon ? "" : "none"}` }}
            >
              <AccountCircleIcon />
            </Button>}
           
          </Link>}
         
          
          {user ? (
            <Button
              variant="contained"
              sx={{
                margin: "10px",
                backgroundColor: "black",
                display: `${Login ? "block" : "none"}`,
              }}
              onClick={handleLogout}
            >
              Log Out
            </Button>
          ) : (
            <Link
              to="/login"
              style={{
                color: "#fff",
                textDecoration: "none",
              }}
            >
              {" "}
              <Button
                variant="contained"
                sx={{
                  margin: "10px",
                  backgroundColor: "black",
                  display: `${Login ? "block" : "none"}`,
                }}
              >
                Login
              </Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
