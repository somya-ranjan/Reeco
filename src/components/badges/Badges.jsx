import React, { memo } from "react";
import { Box, Chip } from "@mui/material";

function Badges(props) {
  const { orderStatus } = props;

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Chip
        label={
          orderStatus === "missing"
            ? "Missing"
            : orderStatus === "missingUrgent"
            ? "Missing - Urgent"
            : orderStatus === "approved"
            ? "Approved"
            : orderStatus === "priceUpdated"
            ? "Price updated"
            : orderStatus === "quantityUpdated"
            ? "Quantity updated"
            : "Price and quantity updated"
        }
        sx={{
          backgroundColor:
            orderStatus === "missing"
              ? "#F66D44"
              : orderStatus === "missingUrgent"
              ? "#DB2114"
              : "var(--second-highlight-bg)",
          color: "#fff",
        }}
        key={Math.random()}
      />
    </Box>
  );
}

export default memo(Badges);
