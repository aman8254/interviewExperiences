import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import institutes from "../backend-temp/institute-names";
import domains from "../backend-temp/Domains";
import { useControlled } from "@mui/material";

function HomeLeftPart({setData}) {
  const [formData, setFormData] = useState({
    institute: "",
    domain: "",
    workEx: "",
  });


  return (
    <div className="home-left-part">
      <Box sx={{ padding: 2 }}>
        <Typography
          variant="h6"
          component="div"
          gutterBottom
          sx={{ color: "#000", fontSize: "1.4rem" }}
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
            isOptionEqualToValue = {(option,value)=>true}
            onChange={(e, v) => {
              //e=event, v=value
              setFormData((prevdata) => {
                return {
                  ...prevdata,
                  institute: v? v.label:"",
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
            isOptionEqualToValue = {(option,value)=>true}
            onChange={(e, v) => {
              //e=event, v=value
              setFormData((prevdata) => {
                return {
                  ...prevdata,
                  domain: v? v.label:"",
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
            isOptionEqualToValue = {(option,value)=>true}
            onChange={(e, v) => {
              //e=event, v=value
              setFormData((prevdata) => {
                return {
                  ...prevdata,
                  workEx: v? v.label:"",
                };
              });
            }}
          />
          <Button
            variant="contained"
            sx={{ display: "block", marginLeft: "auto", backgroundColor: '#000' }}
            onClick={()=>{
              if(formData.institute=="" || formData.domain==""|| formData.workEx==""){
                alert("Please select all filters");
              }else{
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
