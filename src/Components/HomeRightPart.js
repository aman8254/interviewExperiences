import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

// import experiences from "../backend-temp/interview-exp";
import InterviewExperience from "./InterviewExperience";

var request = require("sync-request");

function HomeRightPart({ filterData }) {
  if (Object.keys(filterData).length) {
    console.log("Data available");
    var res = request("POST", "https://interview-experiences.herokuapp.com/info/institutes", {
      json: {
        institute: filterData.institute,
        domain: filterData.domain,
        workEx: filterData.workEx == "Fresher" ? false : true,
      },
    });

    let experiences = JSON.parse(res.body);

    console.log(experiences);

    if (experiences.length) {
      return (
        <div className="home-right-part">
          <Box sx={{ padding: "1.5rem" }}>
            <Grid container spacing={2}>
              {experiences.map((exp) => (
                <InterviewExperience key={exp._id} data={exp} />
              ))}
            </Grid>
          </Box>
        </div>
      );
    } else {
      return (
        <div className="home-right-part">
          <Box sx={{ padding: "6rem" }}>
            <Paper
              elevation={2}
              sx={{ padding: "1rem", marginBottom: "1.5rem" }}
            >
              <Typography
                variant="h6"
                component="h6"
                align="center"
                sx={{ marginBottom: "0.2rem", color: "#363333" }}
              >
                Sorry No interview experiences found for theses filters.We are
                expanding our databases rapidly, Hopefully we will get back to
                you with this data shortly.Try after changing some of the
                filters.
              </Typography>
            </Paper>
          </Box>
        </div>
      );
    }
  } else {
    console.log("Data Not available");
    return (
      <div className="home-right-part">
        <Box sx={{ padding: "6rem" }}>
          <Paper elevation={2} sx={{ padding: "1rem", marginBottom: "1.5rem" }}>
            <Typography
              variant="h3"
              component="h3"
              align="center"
              sx={{ marginBottom: "0.2rem", color: "#363333" }}
            >
              Let's grow together
            </Typography>
            <Typography
              variant="body1"
              component="p"
              align="center"
              sx={{ color: "#5d5c5c" }}
            >
              Hello everyone, Congratulations for getting a call from the top
              B-school of the country. You have already achieved one milestone
              but we have to move forward. We came up to here to not just to
              stay here but to achieve more.It's a humble request, please
              contribute to this portal as much as possibe so that we all can
              grow together.
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
              borderColor: "#000",
              color: "#000",
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
