import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export default function NotFound() {
    return (
        <Container
            sx={{
                // display: 'flex',
                // flexDirection: 'column',
                // alignItems: 'center',
                gap: { xs: 4, sm: 8 },
                py: { xs: 8, sm: 10 },
                textAlign: { sm: 'center', md: 'left' },
            }}>
            <Typography>404</Typography>
            <Link href="/">back to home page</Link>
        </Container>
    )
}