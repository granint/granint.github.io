import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Copyright from "./Copyright";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import EmailIcon from '@mui/icons-material/Email';
import GithubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
    return (
        <Box
            sx={{
                bgcolor: '#f8f9fa !important',
                // color: 'rgba(255,255,255,.15)',
            }}
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 4, sm: 8 },
                    py: { xs: 8, sm: 10 },
                    // textAlign: { sm: 'center', md: 'left' },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        gap: { xs: 6, sm: 8 },
                        width: '100%',
                        justifyContent: 'space-between',
                        textAlign: { xs: 'center', sm: 'left' },
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
                        }}
                    >
                        <Typography variant="body2" fontWeight={600}>
                            地址
                        </Typography>
                        <Typography>
                            四川省内江市威远县观英滩镇
                        </Typography>
                        <Typography>
                            联系电话：(0832)8050764
                        </Typography>
                        <Typography>
                            服务时间：8:00 - 24:00
                        </Typography>
                        <Typography>
                            邮箱地址:support@granint.com
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
                        }}
                    >
                        <Typography variant="body2" fontWeight={600}>
                            Product
                        </Typography>
                        <Link color="text.secondary" href="#">
                            Features
                        </Link>
                        <Link color="text.secondary" href="#">
                            Testimonials
                        </Link>
                        <Link color="text.secondary" href="#">
                            Highlights
                        </Link>
                        <Link color="text.secondary" href="#">
                            Pricing
                        </Link>
                        <Link color="text.secondary" href="#">
                            FAQs
                        </Link>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
                        }}
                    >
                        <Typography variant="body2" fontWeight={600}>
                            Company
                        </Typography>
                        <Link color="text.secondary" href="#">
                            About us
                        </Link>
                        <Link color="text.secondary" href="#">
                            Careers
                        </Link>
                        <Link color="text.secondary" href="#">
                            Press
                        </Link>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'none', sm: 'flex' },
                            flexDirection: 'column',
                            gap: 1,
                        }}
                    >
                        <Typography variant="body2" fontWeight={600}>
                            Legal
                        </Typography>
                        <Link color="text.secondary" href="#">
                            Terms
                        </Link>
                        <Link color="text.secondary" href="#">
                            Privacy
                        </Link>
                        <Link color="text.secondary" href="#">
                            Contact
                        </Link>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        gap: { xs: 6, sm: 10 },
                        textAlign: { xs: 'center', sm: 'left' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        // justifyContent: { xs: 'center', sm: 'space-between' },
                        pt: { xs: 4, sm: 8 },
                        width: '100%',
                        borderTop: '1px solid',
                        borderColor: 'divider',
                    }}
                >
                    <Box>
                        <Link color="text.secondary" href="/legal/privacy">
                            Privacy Policy
                        </Link>
                        <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
                            &nbsp;•&nbsp;
                        </Typography>
                        <Link color="text.secondary" href="/legal/terms">
                            Terms of Service
                        </Link>
                        <Copyright sx={{ py: 2, fontSize: '0.875rem' }} />
                    </Box>

                    <Stack
                        direction="row"
                        justifyContent="left"
                        spacing={1}
                        useFlexGap
                        sx={{
                            color: 'text.secondary',
                        }}
                    >
                        <IconButton
                            color="inherit"
                            href="mailto:support@granint.com"
                            aria-label="GitHub"
                            sx={{ alignSelf: 'center' }}
                        >
                            <EmailIcon />
                        </IconButton>
                        <IconButton
                            color="inherit"
                            href="https://github.com/granint"
                            target="_blank"
                            aria-label="GitHub"
                            sx={{ alignSelf: 'center' }}
                        >
                            <GithubIcon />
                        </IconButton>
                        <IconButton
                            disabled
                            color="inherit"
                            href="https://github.com/mui"
                            aria-label="GitHub"
                            sx={{ alignSelf: 'center' }}
                        >
                            <YouTubeIcon />
                        </IconButton>
                        <IconButton
                            disabled
                            color="inherit"
                            href="https://github.com/mui"
                            aria-label="GitHub"
                            sx={{ alignSelf: 'center' }}
                        >
                            <LinkedInIcon />
                        </IconButton>
                    </Stack>
                </Box>
            </Container>
        </Box>
    )
}