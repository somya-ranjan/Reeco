import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { Box, Button, Typography } from "@mui/material";

// // static import
import CustomModal from "../../../components/customModal/CustomModal";
import { updateOrderStatus } from "../../../store/actions";

function MissingProductModal({ open, onClose, productsDetails }) {
  // // initial state
  const dispatch = useDispatch();
  const handelNotMissingUrgent = () => {
    dispatch(
      updateOrderStatus({ _id: productsDetails?._id, status: "missing" })
    );
    onClose();
  };
  const handelMissingUrgent = () => {
    dispatch(
      updateOrderStatus({
        _id: productsDetails?._id,
        status: "missingUrgent",
      })
    );
    onClose();
  };
  return (
    <CustomModal label="Missing product" open={open} onClose={onClose}>
      <Box sx={{ display: "flex" }}>
        Is &nbsp;"
        <Typography
          sx={{
            maxWidth: "70%",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {productsDetails?.productName}
        </Typography>
        "&nbsp; urgent?
      </Box>
      <Box sx={{ textAlign: "end", color: "red", mt: 3 }}>
        <Button
          sx={{ textTransform: "none", mr: 1, color: "#000" }}
          onClick={handelNotMissingUrgent}
          disabled={productsDetails?.status === "missing"}
        >
          No
        </Button>
        <Button
          sx={{ textTransform: "none", color: "#000" }}
          onClick={handelMissingUrgent}
          disabled={productsDetails?.status === "missingUrgent"}
        >
          Yes
        </Button>
      </Box>
    </CustomModal>
  );
}

export default memo(MissingProductModal);
