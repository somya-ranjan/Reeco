import { createSlice } from "@reduxjs/toolkit";

// // local state
import orderData from "../../../assets/data/tableData/tableBody.json";
import toaster from "../../../lib/toaster";

const initialState = {
  productOrderData: JSON.parse(localStorage.getItem("orderList")) || orderData,
};

const productOrderSlice = createSlice({
  name: "productOrderSlice",
  initialState,
  reducers: {
    getProductOrderList: (state, { payload }) => {
      const res = state?.productOrderData?.filter((product) => {
        return (
          product?.productName
            .toLowerCase()
            .includes(payload?.search.toLowerCase()) ||
          product?.brandName
            .toLowerCase()
            .includes(payload?.search.toLowerCase())
        );
      });
      if (payload.search) {
        state.productOrderData = res;
      } else {
        state.productOrderData = JSON.parse(localStorage.getItem("orderList"));
      }
    },
    updateOrderStatus: (state, { payload }) => {
      state?.productOrderData.forEach((product) => {
        if (product?._id === payload?._id) {
          product.status = payload?.status;
        }
      });
      localStorage.setItem(
        "orderList",
        JSON.stringify(state?.productOrderData)
      );
      toaster.success("Product status updated successfully");
    },
    updateOrderDetails: (state, { payload }) => {
      state?.productOrderData.forEach((product) => {
        if (product?._id === payload?._id) {
          if (payload.status === "priceAndQuantityUpdated") {
            product.status = payload?.status;
            product.price = payload?.price;
            product.quantity = payload?.quantity;
            product.reasons = payload?.reasons;
          } else if (payload.status === "quantityUpdated") {
            product.status = payload?.status;
            product.quantity = payload?.quantity;
            product.reasons = payload?.reasons;
          } else {
            product.status = payload?.status;
            product.price = payload?.price;
            product.reasons = payload?.reasons;
          }
        }
      });
      localStorage.setItem(
        "orderList",
        JSON.stringify(state?.productOrderData)
      );
      toaster.success("Product order details updated successfully");
    },
  },
});

export const { getProductOrderList, updateOrderStatus, updateOrderDetails } =
  productOrderSlice.actions;
export default productOrderSlice.reducer;
