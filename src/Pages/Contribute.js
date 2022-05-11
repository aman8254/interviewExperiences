import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

import institutes from "../backend-temp/institute-names";
import domains from "../backend-temp/Domains";
import { Paper, useControlled } from "@mui/material";
import { border, margin, minWidth } from "@mui/system";

var request = require("sync-request");

function Contribute() {
  const [formData, setFormData] = useState({
    institute: "",
    domain: "",
    workEx: "",
    panelists: "",
  });

  const [questions, setquestions] = useState({
    counter: 1,
    questionIds: [1],
    questionValues: [],
  });

  const [dataPushed, setdataPushed] = useState(false);

  return (
    <div className="contribute">
      <Paper
        sx={{
          padding: 2,
          width: "80%",
          margin: "1rem auto 1rem",
        }}
      >
        <Typography
          variant="h6"
          component="div"
          gutterBottom
          sx={{ color: "#000", fontSize: "1.4rem", textAlign: "center" }}
        >
          Contribution Form
        </Typography>

        <form>
          <Stack direction="row" spacing="auto">
            <Autocomplete
              id="institutes"
              size="small"
              sx={{
                marginBottom: 2,
                width: "70%",
                float: "left",
              }}
              options={institutes}
              renderInput={(params) => (
                <TextField {...params} label="Institute" variant="standard" />
              )}
              value={formData.institute}
              isOptionEqualToValue={(option, value) => true}
              onChange={(e, v) => {
                //e=event, v=value
                setFormData((prevdata) => {
                  return {
                    ...prevdata,
                    institute: v ? v.label : "",
                  };
                });
              }}
            />
            <Autocomplete
              id="panelists"
              size="small"
              sx={{
                marginBottom: 2,
                width: "25%",
                float: "right",
              }}
              options={[
                { id: 1, label: "1" },
                { id: 2, label: "2" },
                { id: 3, label: "3" },
                { id: 4, label: "4" },
                { id: 5, label: "5" },
              ]}
              renderInput={(params) => (
                <TextField {...params} label="Panelists" variant="standard" />
              )}
              value={formData.panelists}
              isOptionEqualToValue={(option, value) => true}
              onChange={(e, v) => {
                //e=event, v=value
                setFormData((prevdata) => {
                  return {
                    ...prevdata,
                    panelists: v ? v.label : "",
                  };
                });
              }}
            />
          </Stack>

          <Stack direction="row" spacing="auto">
            <Autocomplete
              id="domains"
              size="small"
              options={domains}
              sx={{
                marginBottom: 2,
                width: "70%",
              }}
              renderInput={(params) => (
                <TextField {...params} label="Domain" variant="standard" />
              )}
              value={formData.domain}
              isOptionEqualToValue={(option, value) => true}
              onChange={(e, v) => {
                //e=event, v=value
                setFormData((prevdata) => {
                  return {
                    ...prevdata,
                    domain: v ? v.label : "",
                  };
                });
              }}
            />
            <Autocomplete
              id="work-experience"
              size="small"
              options={[
                { id: 1, label: "Fresher" },
                { id: 2, label: "With WorkEx" },
              ]}
              sx={{
                marginBottom: 2,
                width: "25%",
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Work Experience"
                  variant="standard"
                />
              )}
              value={formData.workEx}
              isOptionEqualToValue={(option, value) => true}
              onChange={(e, v) => {
                //e=event, v=value
                setFormData((prevdata) => {
                  return {
                    ...prevdata,
                    workEx: v ? v.label : "",
                  };
                });
              }}
            />
          </Stack>

          <Typography variant="h6" component="h6">
            Questions:
          </Typography>

          {/* this is test code for dynamic textfield */}

          <Stack spacing={0}>
            {questions.questionIds.map((id) => {
              return (
                <>
                  <Typography variant="body1" component="span">
                    {id}.
                  </Typography>
                  <TextField
                    key={id}
                    id={String(id)}
                    variant="standard"
                    sx={{
                      marginBottom: "0.4rem",
                    }}
                  ></TextField>
                </>
              );
            })}
          </Stack>

          <IconButton
            variant="cotained"
            sx={{
              display: "block",
              margin: "1rem 0 1rem auto",
              color: "#000",
            }}
            onClick={() => {
              let individualQuestion = document.getElementById(
                String(questions.counter)
              ).value;
              setquestions((prevData) => {
                return {
                  counter: prevData.counter + 1,
                  questionIds: [...prevData.questionIds, prevData.counter + 1],
                  questionValues: [
                    ...prevData.questionValues,
                    individualQuestion,
                  ],
                };
              });
            }}
          >
            <AddIcon sx={{ display: "block", margin: "auto", fontSize: 40 }} />
          </IconButton>

          {/* test code ends here*/}

          <Button
            variant="contained"
            sx={{
              display: "block",
              marginLeft: "auto",
              backgroundColor: "#000",
            }}
            onClick={(e) => {
              if (
                formData.institute == "" ||
                formData.domain == "" ||
                formData.workEx == "" ||
                formData.panelists == "" ||
                questions.questionValues == []
              ) {
                alert("Please select all filters");
              } else {
                questions.questionValues.push(
                  document.getElementById(String(questions.counter)).value
                );
                console.log(formData);
                console.log(questions);

                var res = request("POST", "https://interview-experiences.herokuapp.com/contribute", {
                  json: {
                    institute: formData.institute,
                    panel: formData.panelists,
                    domain: formData.domain,
                    workEx: formData.workEx == "Fresher" ? false : true,
                    questions: questions.questionValues,
                  },
                });
                setFormData({
                  institute: "",
                  domain: "",
                  workEx: "",
                  panelists: "",
                });
                setquestions({
                  counter: 1,
                  questionIds: [1],
                  questionValues: [],
                });
                setdataPushed(true);
              }
            }}
          >
            Contribute
          </Button>
        </form>

        {dataPushed && (
          <Alert
            onClose={() => {
              setdataPushed(false);
            }}
            variant="filled"
            sx={{
              position: "fixed",
              minHeight: "1rem",
              minWidth: "40%",
              top: "5rem",
              right: "1rem",
            }}
          >
            <b>Thanks you for your Contribution 😊</b>
          </Alert>
        )}
      </Paper>
    </div>
  );
}

export default Contribute;
