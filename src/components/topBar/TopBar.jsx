import React, { memo } from "react";
import {
  Box,
  Breadcrumbs,
  Container,
  Grid,
  Link,
  Typography,
  Button,
} from "@mui/material";

function TopBar() {
  return (
    <Container
      maxWidth="xl"
      sx={{ boxShadow: 3, py: 1, px: { lg: "67px !important" } }}
      className="main_container"
    >
      <Box>
        <Breadcrumbs aria-label="breadcrumb" separator="›">
          <Link underline="hover" color="inherit" href="#">
            Orders
          </Link>
          <Link underline="active" color="inherit" href="#">
            Order 324571ABC
          </Link>
        </Breadcrumbs>
      </Box>

      <Grid container sx={{ alignItems: "center" }}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" fontWeight="bolder">
            Order 32457ABC
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} sx={{ textAlign: "end" }}>
          <Box>
            <Button variant="outlined" sx={{ mr: 1 }} className="outline_btn">
              Back
            </Button>
            <Button variant="contained" className="contained_btn">
              Approve Order
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default memo(TopBar);
