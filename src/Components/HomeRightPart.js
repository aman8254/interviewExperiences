import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

import InterviewExperience from "./InterviewExperience";
import axios from "axios";

var request = require("sync-request");

function HomeRightPart({ filterData }) {

  const [experiences, setExperiences] = React.useState({
    loading: true,
    data: [],
  });

  if (Object.keys(filterData).length) {
    console.log(filterData);

    axios
      .post("https://interviewexperiences.herokuapp.com/info/institutes", {
        institute: filterData.institute,
        domain: filterData.domain,
        workEx: filterData.workEx,
      })
      .then((res) => {
        setExperiences({
          loading: false,
          data: res.data,
        });
      })
      .catch((err) => {
        setExperiences({
          loading: false,
          data: [],
        });
      });

    if (experiences.loading) {
      <Typography
                  variant="h6"
                  component="h6"
                  align="center"
                  sx={{ marginBottom: "0.2rem" }}
                >
                  Loading...
                </Typography>
    } else {
      if (experiences.data.length) {
        return (
          <div className="home-right-part">
            <Box sx={{ padding: "1.5rem" }}>
              <Grid container spacing={2}>
                {experiences.data.map((exp) => (
                  <InterviewExperience key={exp._id} data={exp} />
                ))}
              </Grid>
            </Box>
          </div>
        );
      } else {
        return (
          <div className="home-right-part">
            <Box sx={{ padding: "2rem" }}>
              <Paper
                elevation={2}
                sx={{
                  padding: "1rem",
                  marginBottom: "1.5rem",
                  backgroundColor: "#1976d2",
                  color: "#FFF",
                }}
              >
                <Typography
                  variant="h6"
                  component="h6"
                  align="center"
                  sx={{ marginBottom: "0.2rem" }}
                >
                  Sorry, No interview experiences found for theses filters.We
                  are expanding our database rapidly, Hopefully we will get back
                  to you with this data shortly or try changing filters.
                </Typography>
              </Paper>
            </Box>
          </div>
        );
      }
    }
  } else {
    return (
      <div className="home-right-part">
        <Box sx={{ padding: "2rem" }}>
          <Paper
            elevation={2}
            sx={{
              padding: "1rem",
              marginBottom: "1.5rem",
              backgroundColor: "#1976d2",
              color: "#FFF",
            }}
          >
            <Typography
              variant="h5"
              component="h5"
              align="center"
              sx={{ marginBottom: "0.2rem" }}
            >
              Let's grow together
            </Typography>
            <Typography variant="body2" component="p" align="center">
              Hello everyone, Congratulations on securing a call from the top
              B-schools of the country. You have already achieved one milestone
              but we still have a long journey to go.It's a humble request,
              please contribute to this portal as much as possibe so that we all
              can help each other and grow together.
            </Typography>
            <Typography
              variant="body1"
              component="p"
              align="center"
              sx={{ color: "#de9925" }}
            >
              Thank You 😊
            </Typography>
          </Paper>
          <Button
            variant="outlined"
            href="/contribute"
            sx={{
              display: "block",
              width: "7.6rem",
              margin: "auto",
            }}
          >
            Contribute
          </Button>
        </Box>
      </div>
    );
  }
}

export default HomeRightPart;
