import React from "react";
import { Typography, Box, Container } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tabs, Tab } from "@mui/material";
import { useDispatch } from "react-redux";
import { manageLeavePageNavbar } from "../features/manageNavSlice";
import LeaveForm from "../components/Leave/LeaveForm";
import NotEatingFromToday from "../components/Leave/NotEatingFromToday";

const LeavePage = () => {
  const dispatch = useDispatch();
  dispatch(manageLeavePageNavbar());
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 10,
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        p={2}
        width="100%"
        m="40px 0 15px 0"
        borderRadius="12px"
        border="none"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography variant="h3" sx={{fontStyle:'italic'}}>Leave Management</Typography>
        </Box>
      </Box>
      <Box
        bgcolor="white"
        width="90%"
        p={4}
        borderRadius="12px"
        border="1px solid"
      >
        <TabContext value={value}>
          <Box sx={{ borderBottom: "1px solid", borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{ margin: 2 }}
            >
              <Tab label="Leave Form" value="1" sx={{ padding: "12px" }} />
              <Tab label="Cancel Meal" value="2" sx={{ padding: "12px" }} />
            </TabList>
          </Box>
          <TabPanel value="1">
            <LeaveForm />
          </TabPanel>
          <TabPanel value="2">
            <NotEatingFromToday />
          </TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
};

export default LeavePage;
