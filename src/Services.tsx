import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { alpha } from '@mui/material/styles';

const services = [
    {
        title: '乡村旅游服务',
        description: '提供完整的乡村旅游体验，让您深度感受观英滩的自然与人文魅力',
        icon: '🏞️',
        color: '#4CAF50',
        features: [
            '民宿住宿预订',
            '导游讲解服务',
            '农事体验活动',
            '摄影打卡指导',
            '特色餐饮推荐'
        ],
        price: '¥200起/人/天'
    },
    {
        title: '文化体验服务',
        description: '深入了解观英滩的历史文化，参与传统手工艺制作和民俗活动',
        icon: '🎭',
        color: '#FF9800',
        features: [
            '传统工艺学习',
            '民俗文化讲座',
            '节庆活动参与',
            '文化遗产参观',
            '非遗传承体验'
        ],
        price: '¥150起/人/次'
    },
    {
        title: '农产品配送',
        description: '新鲜优质的农产品直达您家，享受从田间到餐桌的绿色生活',
        icon: '🚚',
        color: '#2196F3',
        features: [
            '当日采摘配送',
            '冷链物流保鲜',
            '定期订购服务',
            '品质保证承诺',
            '包装精美环保'
        ],
        price: '满¥99免运费'
    },
    {
        title: '活动策划服务',
        description: '为企业团建、家庭聚会、婚庆庆典提供专业的活动策划服务',
        icon: '🎉',
        color: '#E91E63',
        features: [
            '场地租赁服务',
            '活动策划设计',
            '餐饮配套服务',
            '娱乐项目安排',
            '专业摄影摄像'
        ],
        price: '¥3000起/场'
    }
];

export default function Services() {
    return (
        <Box
            id="services"
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
                    sx={{ mb: 2 }}
                >
                    服务项目
                </Typography>
                <Typography
                    variant="body1"
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 6 }}
                >
                    专业贴心的服务，让您在观英滩享受美好时光
                </Typography>
                <Grid container spacing={4}>
                    {services.map((service, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'all 0.3s ease-in-out',
                                    border: `2px solid ${alpha(service.color, 0.2)}`,
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        borderColor: service.color,
                                        boxShadow: `0 8px 25px ${alpha(service.color, 0.3)}`,
                                    },
                                }}
                            >
                                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            mb: 2,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 60,
                                                height: 60,
                                                borderRadius: '50%',
                                                backgroundColor: alpha(service.color, 0.1),
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '2rem',
                                                mr: 2,
                                            }}
                                        >
                                            {service.icon}
                                        </Box>
                                        <Box>
                                            <Typography
                                                variant="h6"
                                                component="h3"
                                                sx={{ 
                                                    fontWeight: 'bold',
                                                    color: service.color 
                                                }}
                                            >
                                                {service.title}
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                color="primary.main"
                                                sx={{ fontWeight: 'bold', fontSize: '1rem' }}
                                            >
                                                {service.price}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mb: 3 }}
                                    >
                                        {service.description}
                                    </Typography>
                                    <List dense>
                                        {service.features.map((feature, idx) => (
                                            <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                                                <ListItemIcon sx={{ minWidth: 32 }}>
                                                    <CheckCircleIcon 
                                                        sx={{ 
                                                            color: service.color,
                                                            fontSize: '1.2rem'
                                                        }} 
                                                    />
                                                </ListItemIcon>
                                                <ListItemText 
                                                    primary={feature}
                                                    primaryTypographyProps={{
                                                        variant: 'body2'
                                                    }}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </CardContent>
                                <CardActions sx={{ p: 3, pt: 0 }}>
                                    <Button
                                        variant="outlined"
                                        sx={{ 
                                            mr: 1,
                                            borderColor: service.color,
                                            color: service.color,
                                            '&:hover': {
                                                borderColor: service.color,
                                                backgroundColor: alpha(service.color, 0.1),
                                            }
                                        }}
                                    >
                                        了解详情
                                    </Button>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: service.color,
                                            '&:hover': {
                                                backgroundColor: alpha(service.color, 0.8),
                                            }
                                        }}
                                    >
                                        立即预订
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
