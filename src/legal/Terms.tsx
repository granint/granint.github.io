import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export default function Terms() {
    return (
        <Box>
            <Container>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link href='/'>首页</Link>
                    <Typography>法律</Typography>
                    <Typography>服务条款</Typography>
                </Breadcrumbs>
            </Container>
        </Box>
    )
}