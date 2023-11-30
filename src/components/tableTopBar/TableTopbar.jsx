import React, { memo } from "react";
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { IoIosSearch } from "react-icons/io";
import { BsPrinter } from "react-icons/bs";

function TableTopbar({ searchValue, setSearchValue, print }) {
  return (
    <Grid container justifyContent="space-between" rowGap={2}>
      <Grid item xs={12} sm={7} md={4}>
        <OutlinedInput
          name="search"
          size="small"
          fullWidth
          id="outlined-adornment-weight"
          sx={{ borderRadius: "20px" }}
          placeholder="Search..."
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                sx={{ p: "0" }}
                // onClick={() => setSearchValue(searchValue)}
              >
                <IoIosSearch className="muted" style={{ fontSize: "20px" }} />
              </IconButton>
            </InputAdornment>
          }
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
        />
      </Grid>
      <Grid item xs={12} sm={4} md={4} sx={{ textAlign: "end" }}>
        <Button variant="outlined" sx={{ mr: 3 }} className="outline_btn">
          Add item
        </Button>
        <IconButton onClick={print}>
          <BsPrinter color="var(--navbar-bg)" />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default memo(TableTopbar);
