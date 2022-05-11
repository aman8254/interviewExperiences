import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import HomeLeftPart from "../Components/HomeLeftPart";
import HomeRightPart from "../Components/HomeRightPart";

function Home() {
  const [filterData, setfilterData] = useState({});

  return (
    <Grid container>
      <Grid item xs={12} sm={4} md={3}>
        <HomeLeftPart setData={setfilterData} />
      </Grid>
      <Grid item sm={8} md={9}>
        <HomeRightPart filterData={filterData} />
      </Grid>
    </Grid>
  );
}

export default Home;
