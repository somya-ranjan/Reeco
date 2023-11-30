import React, { memo } from "react";
import { Box } from "@mui/material";
import { LOADING } from "../../assets/loader";

function Loader() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={LOADING} alt="main loader" style={{ width: 200 }} />
    </Box>
  );
}

export default memo(Loader);
