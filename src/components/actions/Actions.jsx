import React, { memo } from "react";
import { Box } from "@mui/material";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";
import { BiSolidEdit } from "react-icons/bi";

function Actions(props) {
  const { check, cross, edit, orderStatus } = props;

  const actionBtnStyle = {
    cursor: "pointer",
    marginRight: "10px",
    fontSize: "20px",
  };

  const actions = [];

  check &&
    actions.push(
      <IoMdCheckmark
        onClick={orderStatus === "approved" ? null : check}
        style={{
          ...actionBtnStyle,
          color:
            orderStatus === "approved"
              ? "var(--second-highlight-bg)"
              : "lightgrey",
          cursor: orderStatus === "approved" ? "not-allowed" : "pointer",
        }}
        key={Math.random()}
      />
    );
  cross &&
    actions.push(
      <IoMdClose
        onClick={cross}
        style={{
          ...actionBtnStyle,
          color:
            orderStatus === "missing"
              ? "#F66D44"
              : orderStatus === "missingUrgent"
              ? "#DB2114"
              : "lightgrey",
        }}
        key={Math.random()}
      />
    );
  edit &&
    actions.push(
      <BiSolidEdit
        onClick={edit}
        style={{ ...actionBtnStyle, color: "lightgrey" }}
        key={Math.random()}
      />
    );

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>{actions}</Box>
  );
}

export default memo(Actions);
