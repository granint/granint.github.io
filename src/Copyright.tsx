import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function Copyright() {
    return (
        <>
            <Typography color="text.secondary">
                {'Copyright © '}
                <Link href="https://www.granint.com/">
                    观英滩
                </Link>{' '}
                {new Date().getFullYear()}
            </Typography>
            <Typography color="text.secondary">
                <Link href='https://arytry.com' target='_blank'>Arytry</Link>旗下产品
            </Typography>
        </>
    );
}

export default Copyright;