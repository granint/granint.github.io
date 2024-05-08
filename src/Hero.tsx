import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Hero() {
    return (
        <Box>
            <Container>
                <Typography
                    component='h2'
                    variant="h4"
                    sx={{
                        justifyContent: 'center',
                        textAlign: 'center',
                        color: 'text.secondary'
                    }}
                >
                    观英滩
                </Typography>
            </Container>
        </Box>
    )
}