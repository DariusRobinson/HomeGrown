import { styled,AppBar, Box, Link, Typography } from "@mui/material";
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
            //  component="img"
            //  sx={{ maxHeight: "45px", maxWidth: "45px", objectFit: "cover" }}
            //  src={navIcon}
            /> 
            <Typography variant="h6" component="div" sx={{flexFrow: 1}} >
              FrontEnd Developer
            </Typography>
          </Box>

            <CustomBox>
              <Link to="home" className="link" smooth>
              Home
              </Link>

              <Link to="work" className="link" smooth>
              My Work
              </Link>

              <Link to="about" className="link" smooth>
              About
              </Link>
            </CustomBox>

        </CustomToolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
