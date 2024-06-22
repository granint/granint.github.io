import React from "react";
import Box from "@mui/material/Box";
import Hero from "./Hero";
import FAQ from "./FAQ";
import NavBar from "./NavBar";

export default function Home() {
    return (
        <Box>
            <Hero />
            <FAQ />
        </Box>
    )
}