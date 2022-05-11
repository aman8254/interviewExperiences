import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

function InterviewExperience(props) {
  const exp = props.data;

  let questionCount = 0; //Counter for questions

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper
        elevation={3}
        sx={{
          minHeight: "25rem",
          padding: "0.5rem",
        }}
      >
        <Typography variant="h6" component="h2">
          {exp.institute}
        </Typography>
        <hr style={{ margin: "0.3rem 0rem" }} />
        <Typography variant="body1" component="p" gutterBottom>
          Domain: {exp.domain}
        </Typography>
        <Typography variant="body1" component="span">
          Work Experience: {exp.workEx ? "Yes" : "No"}
        </Typography>
        <Typography variant="body1" component="span" sx={{ float: "right" }}>
          Panelists: {exp.panel}
        </Typography>
        <hr
          style={{
            width: "2.5rem",
            margin: "0.5rem auto 0 auto",
            borderTop: "5px dotted #8c8787",
          }}
        />
        <div
          style={{
            overflow: "auto",
          }}
        >
          <Typography variant="body1" component="p" sx={{ fontWeight: "500" }} gutterBottom>
            Questions:{" "}
          </Typography>
          {exp.questions.map((ques) => {
            questionCount++;
            return(<Typography variant="body1" component="p" key={questionCount}>
              {questionCount}: {ques}
            </Typography>);
          })}
        </div>
      </Paper>
    </Grid>
  );
}

export default InterviewExperience;
