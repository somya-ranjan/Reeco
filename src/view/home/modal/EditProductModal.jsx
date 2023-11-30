import React, { memo, useEffect, useState } from "react";
import {
  Box,
  Button,
  Chip,
  Grid,
  IconButton,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { LuPlus, LuMinus } from "react-icons/lu";

// // static import
import CustomModal from "../../../components/customModal/CustomModal";
import { updateOrderDetails } from "../../../store/actions";

function EditProductModal({ open, onClose, productsDetails }) {
  // // initial state
  const dispatch = useDispatch();
  const validateNumber = {
    min: 0,
    step: "any",
    onKeyDown: (e) => {
      if (
        !/[\d.eE]|Backspace|Delete|ArrowLeft|ArrowRight|Home|End/.test(e.key)
      ) {
        e.preventDefault();
      }

      const decimalCount = (e.target.value.match(/\./g) || []).length;
      if (e.key === "." && decimalCount > 0) {
        e.preventDefault();
      }
      if (e.key.toLowerCase() === "e") {
        e.preventDefault();
      }
    },
  };
  // // local state
  const [selectedReason, setSelectedReason] = useState([]);
  const reasons = [
    { id: 1, label: "Missing product" },
    { id: 2, label: "Quantity is not the same" },
    { id: 3, label: "Price is not the same" },
    { id: 4, label: "Other" },
  ];

  // // form handel
  const formik = useFormik({
    initialValues: {
      price: +productsDetails?.price,
      quantity: +productsDetails?.quantity,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      if (
        +productsDetails?.quantity !== +values.quantity &&
        +productsDetails?.price !== +values.price
      ) {
        dispatch(
          updateOrderDetails({
            _id: productsDetails._id,
            price: values.price,
            quantity: values.quantity,
            status: "priceAndQuantityUpdated",
            reasons: selectedReason,
          })
        );
      } else if (+productsDetails?.quantity !== +values.quantity) {
        dispatch(
          updateOrderDetails({
            _id: productsDetails._id,
            quantity: values.quantity,
            status: "quantityUpdated",
            reasons: selectedReason,
          })
        );
      } else {
        dispatch(
          updateOrderDetails({
            _id: productsDetails._id,
            price: values.price,
            status: "priceUpdated",
            reasons: selectedReason,
          })
        );
      }
      formik.resetForm();
      onClose();
    },
  });

  useEffect(() => {
    if (!open) {
      setSelectedReason([]);
      formik.resetForm();
    }
  }, [open]);
  return (
    <CustomModal
      label={productsDetails?.productName}
      open={open}
      onClose={onClose}
      width="sm"
    >
      <Typography>American Ronald </Typography>
      <Box component="form" onSubmit={formik.handleSubmit}>
        <Grid container rowGap={2}>
          <Grid item xs={12} sm={3}>
            <img
              src={productsDetails?.productImg}
              alt="product image"
              style={{ width: "100px" }}
            />
          </Grid>
          <Grid item xs={12} sm={9}>
            <Grid container alignItems="center" rowGap={2}>
              <Grid item xs={5} component={Typography}>
                Price($)
              </Grid>
              <Grid item xs={7}>
                <OutlinedInput
                  size="small"
                  fullWidth
                  type="number"
                  name="price"
                  value={formik.values.price}
                  sx={{ width: "100px" }}
                  onChange={formik.handleChange}
                  inputProps={validateNumber}
                />
                {` / ${productsDetails?.quantity} * ${
                  productsDetails?.quantity2?.split("x")?.[1]
                }`}
              </Grid>
              <Grid item xs={3.7} component={Typography}>
                Quantity
              </Grid>
              <Grid item xs={8}>
                <IconButton
                  sx={{
                    backgroundColor: "var(--second-highlight-bg)",
                    "&:hover": {
                      backgroundColor: "var(--second-highlight-bg)",
                    },
                    color: "#fff",
                  }}
                  onClick={() =>
                    formik.setFieldValue(
                      "quantity",
                      +formik.values.quantity - 1
                    )
                  }
                >
                  <LuMinus style={{ fontSize: "20px" }} />
                </IconButton>
                <OutlinedInput
                  size="small"
                  fullWidth
                  type="number"
                  name="quantity"
                  value={formik.values.quantity}
                  sx={{ width: "100px", mx: 1 }}
                  onChange={formik.handleChange}
                  inputProps={validateNumber}
                />
                <IconButton
                  sx={{
                    backgroundColor: "var(--second-highlight-bg)",
                    "&:hover": {
                      backgroundColor: "var(--second-highlight-bg)",
                    },
                    color: "#fff",
                  }}
                  onClick={() =>
                    formik.setFieldValue(
                      "quantity",
                      +formik.values.quantity + 1
                    )
                  }
                >
                  <LuPlus style={{ fontSize: "20px" }} />
                </IconButton>
                {` x ${productsDetails?.quantity} * ${
                  productsDetails?.quantity2?.split("x")?.[1]
                }`}
              </Grid>
              <Grid item xs={5} component={Typography}>
                Total
              </Grid>
              <Grid item xs={7}>
                <Typography>${productsDetails?.total}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", alignItems: "center", columnGap: 1 }}>
          <Typography variant="subtitle2">Choose reason</Typography>
          <Typography className="muted">(Optional)</Typography>
        </Box>

        <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
          {reasons.map((reason, i) => (
            <Chip
              label={reason.label}
              variant={
                selectedReason.some((res) => res.id === reason.id)
                  ? "filled"
                  : "outlined"
              }
              key={reason.id}
              onClick={() => {
                selectedReason.some((res) => res.id === reason.id)
                  ? setSelectedReason(
                      selectedReason?.filter((res) => res.id !== reason?.id)
                    )
                  : setSelectedReason([...selectedReason, reason]);
              }}
            />
          ))}
        </Stack>

        <Box sx={{ textAlign: "end", color: "red", mt: 3 }}>
          <Button
            variant="outlined"
            sx={{ mr: 1 }}
            className="outline_btn"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            className="contained_btn"
            sx={{
              px: 3,
              "&.Mui-disabled": {
                color: "#fff",
                opacity: 0.5,
              },
            }}
            type="submit"
            disabled={
              +productsDetails?.price === +formik.values.price &&
              +productsDetails?.quantity === +formik.values.quantity
            }
          >
            Send
          </Button>
        </Box>
      </Box>
    </CustomModal>
  );
}

export default memo(EditProductModal);
