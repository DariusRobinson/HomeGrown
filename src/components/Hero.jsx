import React from "react";
import { Box, Button, styled, Typography } from "@mui/material"
import { Link } from "react-scroll";

const Hero = () => {
const CustomButton = styled(Button)(({theme}) =>({
color: "white",
textAlign: "center",
[theme.breakpoints.down("md")]: {
    width: "35%", 
},
[theme.breakpoints.down("sm")]: {
    width: "50%",
},
}));

const CustomTitle = styled(Typography)(({theme}) =>({
    border: "3px solid transparent",
    backgroundColor: "#00c7FF",
    color: "white",
    width: "20%",
    borderRadius: "25px",
    "&:hover": {
        border: "3px solid white",
        backgroundColor: "transparent"
    }, [theme.breakpoints.down("md")]: {
        width: "35%", 
    },
    [theme.breakpoints.down("sm")]: {
        width: "50%",
    },
    }));

    return(
        <Box
        sx={{mt: 8, mb: 12, p: 2, maxWidth: "1200px", mx: "auto"}}
        id="home"
        >
         <Typography
         sx={{color: "white", textAlign: "center", mb: 2 }}
        variant="h6"
        >
            Hey I'm Darius!
        </Typography>   
        <CustomTitle variant="h1">
        I enjoy <span >building</span>
        </CustomTitle>
        </Box>
    )
};
export default Hero;