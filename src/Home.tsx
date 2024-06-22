import Box from "@mui/material/Box";
import Hero from "./Hero";
import FAQ from "./FAQ";
import NavBar from "./NavBar";

export default function Home() {
    return (
        <Box>
            <NavBar />
            <Hero />
            <FAQ />
        </Box>
    )
}