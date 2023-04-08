import { createTheme, ThemeProvider } from "@mui/material";
import { fontWeight } from "@mui/system";
import React from "react";
import  ReactDOM from "react-dom";
import { Main } from './components'

const container = document.getElementById("app")

const root = ReactDOM.createRoot(container)

const theme = createTheme({
    palette: {
        primary: {
            main: "#013e87",
        },
        secondary: {
            main: "#2e74c9",
        },
    },

    typography: {
        h1: {
            fontSize: "3rem",
            fontWeight: 600,
        },
        h2: {
            fontSize: "1.75rem",
            fontWeight: 600,
        },
        h3: {
            fontSize: "1.5rem",
            fontWeight: 600,
        },
    },
})

root.render(
<ThemeProvider
theme={theme}
>
<Main/>
</ThemeProvider>
)