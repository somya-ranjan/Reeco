import React, { memo } from "react";
import { Box, Button, Tooltip, Typography } from "@mui/material";
import { useDispatch } from "react-redux";

// // static import
import { userSignIn } from "../../store/actions";

function SignIn() {
  // // initial state
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Tooltip
        title={
          <Typography variant="caption" textAlign="justify">
            Please click here to access the dashboard. I've added this feature
            to demonstrate my authentication and guest route skills to you.
          </Typography>
        }
        followCursor
        arrow
      >
        <Button
          variant="contained"
          onClick={() => {
            localStorage.setItem("authToken", Math.random());
            dispatch(userSignIn());
          }}
          sx={{
            height: 300,
            width: 300,
            borderRadius: "50%",
            textTransform: "capitalize",
            fontSize: 20,
            backgroundColor: "var(--navbar-bg)",
            "&:hover": {
              backgroundColor: "var(--navbar-bg)",
            },
          }}
        >
          Click To Sign In/Login
        </Button>
      </Tooltip>
    </Box>
  );
}

export default memo(SignIn);
