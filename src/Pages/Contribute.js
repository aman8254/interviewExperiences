import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import Alert from "@mui/material/Alert";
import { Paper } from "@mui/material";

var request = require("sync-request");
const axios = require("axios");

function Contribute() {
  const [formData, setFormData] = useState({
    institute: "",
    domain: "",
    workEx: "",
    panelists: "",
  });

  const [transcript, setTranscript] = React.useState("");

  const [dataPushed, setdataPushed] = useState(false);

  //Loading institutes
  const [institutes, setInstitutes] = useState([]);

  axios
    .get("https://interviewexperiences.herokuapp.com/info/institutes")
    .then((res) => {
      setInstitutes(res.data);
    })
    .catch((err) => {
      setInstitutes("Error while loading Institutes");
    });

  //Loading Domains
  const [domains, setDomains] = useState([]);

  axios
    .get("https://interviewexperiences.herokuapp.com/info/domains")
    .then((res) => {
      setDomains(res.data);
    })
    .catch((err) => {
      setDomains("Error while loading Institutes");
    });

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
          variant="h4"
          component="div"
          gutterBottom
          sx={{ color: "#1976d2", textAlign: "center" }}
        >
          Contribution Form
        </Typography>

        <form>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={9} md={7}>
              <Autocomplete
                id="institutes"
                size="small"
                sx={{
                  marginBottom: 2,
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
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <Autocomplete
                id="panelists"
                size="small"
                sx={{
                  marginBottom: 2,
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
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={9} md={7}>
              <Autocomplete
                id="domains"
                size="small"
                options={domains}
                sx={{
                  marginBottom: 2,
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
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <Autocomplete
                id="work-experience"
                size="small"
                options={[
                  { id: 1, label: "Fresher" },
                  { id: 2, label: "With WorkEx" },
                ]}
                sx={{
                  marginBottom: 2,
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
            </Grid>
          </Grid>

          <Typography variant="h6" component="h6" sx={{ color: "#1976d2" }}>
            Transcript:
          </Typography>

          {/* this is test code for dynamic textfield */}

          <TextField
            sx={{
              width: "100%",
            }}
            id="outlined-multiline-flexible"
            minRows={4}
            multiline
            value={transcript}
            onChange={(e, v) => {
              //e=event, v=value
              setTranscript(e.target.value);
            }}
          />

          {/* test code ends here*/}

          <Button
            variant="contained"
            sx={{
              display: "block",
              marginLeft: "auto",
              marginTop: "1rem",
            }}
            onClick={(e) => {
              if (
                formData.institute == "" ||
                formData.domain == "" ||
                formData.workEx == "" ||
                formData.panelists == "" ||
                transcript == ""
              ) {
                alert(
                  "Please select all filters or don't leave the transcript blank."
                );
              } else {
                var res = request(
                  "POST",
                  "https://interviewexperiences.herokuapp.com/contribute",
                  {
                    json: {
                      institute: formData.institute,
                      panel: formData.panelists,
                      domain: formData.domain,
                      workEx: formData.workEx == "Fresher" ? false : true,
                      transcript: transcript,
                    },
                  }
                );
                setFormData({
                  institute: "",
                  domain: "",
                  workEx: "",
                  panelists: "",
                });
                setTranscript("");
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
