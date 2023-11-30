import React, { memo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

function DynamicTable({ tableHead, tableBodyData }) {
  return (
    <TableContainer component={Paper} sx={{ mt: 3, mb: 1, maxHeight: 320 }}>
      <Table
        sx={{
          width: "100%",
        }}
        size="small"
        stickyHeader
        aria-label="sticky table"
      >
        <TableHead>
          <TableRow>
            {tableHead?.map((cel) => (
              <TableCell key={cel.label} sx={{ textAlign: "center" }}>
                {cel.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableBodyData?.length ? (
            tableBodyData?.map((row) => (
              <TableRow key={row._id}>
                {tableHead?.map((col) => (
                  <TableCell
                    component="th"
                    scope="row"
                    key={Math.random()}
                    sx={{
                      "&:first-of-type": {
                        maxWidth: 300,
                        minWidth: 300,
                      },
                    }}
                  >
                    {row[col._id]}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <Typography
              variant="subtitle1"
              className="muted"
              sx={{
                textAlign: "center",
                py: 2,
              }}
            >
              Data not found
            </Typography>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default memo(DynamicTable);
