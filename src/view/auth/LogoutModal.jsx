import React, { memo } from "react";
import { Box, Button, Typography } from "@mui/material";

// // static import
import CustomModal from "../../components/customModal/CustomModal";

function LogoutModal({ isOpen, onClose }) {
  const handelLogout = () => {
    localStorage.clear();
    onClose();
    window.location.reload();
  };
  return (
    <CustomModal open={isOpen} onClose={onClose} label="Logout" width="xs">
      <Typography component="p" py={1}>
        The action you are going to perform is irreversible. Please confirm! Are
        you sure that you want to logout?
      </Typography>
      <Box sx={{ textAlign: "end", color: "red", mt: 3 }}>
        <Button
          variant="outlined"
          sx={{ px: 5, mr: 2 }}
          className="outline_btn"
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          className="contained_btn"
          onClick={handelLogout}
        >
          Yes log me out
        </Button>
      </Box>
    </CustomModal>
  );
}

export default memo(LogoutModal);
