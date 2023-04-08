import { AppBar, Box, Typography } from "@mui/material";
import { flexbox, maxWidth } from "@mui/system";
import React from "react";

const Navbar = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem",
    },
  }));
  const CustomToolbar = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  }));

  return (
    <Box sx={{ flexGrow: 1, px: 5, py: 2, maxWidth: "1200px", mx: "auto" }}>
      <AppBar
        position="static"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <CustomToolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Box
              component="img"
              sx={{ maxHeight: "45px", maxWidth: "45px", objectFit: "cover" }}
              src={navIcon}
            />
            <Typography variant="h6" component="div" sx={{flexFrow: 1}} >
              My Portfolio
            </Typography>
          </Box>
        </CustomToolbar>
      </AppBar>
    </Box>
  );
};
