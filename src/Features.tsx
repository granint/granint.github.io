import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { alpha } from '@mui/material/styles';

const features = [
    {
        title: '乡村旅游',
        description: '体验原生态的乡村风光，感受田园生活的宁静与美好',
        image: '🏞️',
        color: '#4CAF50'
    },
    {
        title: '文化传承',
        description: '深厚的历史文化底蕴，传统工艺与现代生活的完美融合',
        image: '🏛️',
        color: '#FF9800'
    },
    {
        title: '特色农产品',
        description: '绿色有机的农产品，从田间到餐桌的品质保证',
        image: '🌾',
        color: '#8BC34A'
    },
    {
        title: '生活娱乐',
        description: '丰富多彩的文娱活动，让生活充满乐趣与活力',
        image: '🎭',
        color: '#E91E63'
    }
];

export default function Features() {
    return (
        <Box
            id="features"
            sx={{
                py: { xs: 8, sm: 10 },
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light' ? '#f8f9fa' : '#1a1a1a',
            }}
        >
            <Container>
                <Typography
                    component="h2"
                    variant="h4"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    sx={{ mb: 6 }}
                >
                    观英滩特色
                </Typography>
                <Grid container spacing={4}>
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: (theme) =>
                                            theme.palette.mode === 'light'
                                                ? `0 8px 25px ${alpha(feature.color, 0.3)}`
                                                : `0 8px 25px ${alpha(feature.color, 0.2)}`,
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        height: 120,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: alpha(feature.color, 0.1),
                                        fontSize: '3rem',
                                    }}
                                >
                                    {feature.image}
                                </Box>
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography
                                        gutterBottom
                                        variant="h6"
                                        component="h3"
                                        align="center"
                                        sx={{ color: feature.color, fontWeight: 'bold' }}
                                    >
                                        {feature.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        align="center"
                                    >
                                        {feature.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
