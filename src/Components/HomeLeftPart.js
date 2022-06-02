import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const axios = require('axios');


function HomeLeftPart({ setData }) {
  const [formData, setFormData] = useState({
    institute: "",
    domain: "",
    workEx: "",
  });

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
    <div className="home-left-part">
      <Box sx={{ padding: 2 }}>
        <Typography
          variant="h6"
          component="div"
          gutterBottom
          sx={{ color: "#1976d2", fontSize: "1.2rem" }}
        >
          Select filters
        </Typography>
        <form>
          <Autocomplete
            id="institutes"
            size="small"
            sx={{ marginBottom: 2 }}
            options={institutes}
            renderInput={(params) => (
              <TextField {...params} label="Institute" />
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
            id="domains"
            size="small"
            options={domains}
            sx={{ marginBottom: 2 }}
            renderInput={(params) => <TextField {...params} label="Domain" />}
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
            sx={{ marginBottom: 2 }}
            renderInput={(params) => (
              <TextField {...params} label="Work Experience" />
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
          <Button
            variant="contained"
            sx={{
              display: "block",
              marginLeft: "auto",
              backgroundColor: "#1976d2",
            }}
            onClick={() => {
              if (formData.institute == "") {
                alert("Please select institute");
              } else {
                setData(formData);
              }
            }}
          >
            Apply
          </Button>
        </form>
      </Box>
    </div>
  );
}

export default HomeLeftPart;
