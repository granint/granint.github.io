import Box from "@mui/material/Box";
import Hero from "./Hero";
import FAQ from "./FAQ";
import NavBar from "./NavBar";
import Features from "./Features";
import Products from "./Products";
import Services from "./Services";

export default function Home() {
    return (
        <Box>
            <NavBar />
            <Hero />
            <Features />
            <Products />
            <Services />
            <FAQ />
        </Box>
    )
}
