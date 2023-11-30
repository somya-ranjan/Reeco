import React, { memo } from "react";
import {
  Backdrop,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { IoMdClose } from "react-icons/io";

function CustomModal(props) {
  return (
    <Dialog
      open={props.open}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
      keepMounted
      fullWidth
      maxWidth={props.width || "xs"}
      sx={{
        zIndex: "1300",
        margin: "auto",
      }}
    >
      <DialogTitle
        sx={{
          color: "#000",
          fontSize: "22px",
          margin: "auto",
          fontWeight: "bold",
        }}
      >
        <IconButton
          aria-label="close"
          onClick={props.onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <IoMdClose />
        </IconButton>
      </DialogTitle>

      <DialogTitle
        sx={{
          color: "#000",
          fontSize: "18px",
          ml: 3,
          fontWeight: "500",
          padding: "0 0 10px 0",
          maxWidth: "80%",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {props.label}
      </DialogTitle>
      <DialogContent>{props.children}</DialogContent>
    </Dialog>
  );
}

export default memo(CustomModal);
