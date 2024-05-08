import Container from "@mui/material/Container";
import Copyright from "./Copyright";
import Box from "@mui/material/Box";

export default function Footer() {
    return (
        <Box
            sx={{
                bgcolor: '#f8f9fa !important',
            }}
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    // gap: { xs: 4, sm: 8 },
                    py: { xs: 3, sm: 6 },
                    textAlign: { sm: 'center', md: 'left' },
                }}
            >
                <Copyright />
            </Container>
        </Box>
    )
}