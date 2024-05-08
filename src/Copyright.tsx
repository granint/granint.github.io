import Typography from "@mui/material/Typography";

function Copyright() {
    const year = new Date().getFullYear()
    return (
        <Typography >
            {`© ${year === 2024 ? '2024' : `2024 - ${year}`} Granint 版权所有`}
        </Typography>
    );
}

export default Copyright;