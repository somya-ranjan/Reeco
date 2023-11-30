import React, { memo } from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiWineBottle, GiCaterpillar } from "react-icons/gi";
import { IoIosFlower } from "react-icons/io";
import { LuIceCream2, LuApple } from "react-icons/lu";
import { PiFactoryLight } from "react-icons/pi";
import { BsCake } from "react-icons/bs";

// // static import
import dashBoardTopBar from "../../assets/data/dashBoardTopBar.json";

function DashboardTopBar() {
  return (
    <Grid
      container
      sx={{
        border: "1px solid lightGray",
        borderRadius: 1,
        px: 4,
        py: 2,
        mt: 3,
        rowGap: 2.5,
      }}
    >
      {dashBoardTopBar.map((ele, i) => (
        <Grid item xs={6} md={2} key={i} pr={i < 5 && 3}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography variant="body2" className="muted">
                {ele.label}
              </Typography>
              {ele.label === "Category" ? (
                <>
                  <Box>
                    <GiWineBottle />
                    <IoFastFoodOutline style={{ margin: "0 15px" }} />
                    <IoIosFlower style={{ marginRight: "15px" }} />
                    <LuIceCream2 />
                  </Box>
                  <Box>
                    <LuApple />
                    <PiFactoryLight style={{ margin: "0 15px" }} />
                    <GiCaterpillar style={{ marginRight: "15px" }} />
                    <BsCake />
                  </Box>
                </>
              ) : (
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                  {" "}
                  {ele.value}
                </Typography>
              )}
            </Box>
            {i < 5 && (
              <Divider orientation="vertical" flexItem variant="fullWidth" />
            )}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default memo(DashboardTopBar);
