import React, { useEffect } from "react";
// import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import { Box, Container, Text } from "@chakra-ui/react";
import { Tabs, TabList, Tab, TabPanel, TabPanels } from "@chakra-ui/react";
// import useHistory from 'react';

// import NotEatingFromToday from "./components/NotEatingFromToday.js";
import LeaveForm from "../components/Leave/LeaveForm";
import NotEatingFromToday from "../components/Leave/NotEatingFromToday";
import { teal } from "@mui/material/colors";
const LeavePage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={2}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography variant="h3">Leave Management</Typography>
        </Box>
      </Box>
      <Box bg="white" w="90%" p={4} borderRadius="12px" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em" sx={{ margin: "13px" }}>
            <Tab
              sx={{
                padding: "12px",
              }}
            >
              LeaveForm
            </Tab>
            <Tab
              sx={{
                padding: "12px",
              }}
            >
              NotEatingFromToday
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <LeaveForm />
            </TabPanel>
            <TabPanel>
              <NotEatingFromToday />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};
export default LeavePage;
