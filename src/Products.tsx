import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import { alpha } from '@mui/material/styles';

const products = [
    {
        name: '观英滩有机大米',
        description: '采用传统种植工艺，无农药无化肥，口感香甜，营养丰富',
        price: '¥68/5kg',
        category: '农产品',
        image: '🌾',
        features: ['有机认证', '传统工艺', '营养丰富']
    },
    {
        name: '手工茶叶',
        description: '高山云雾茶，手工采摘制作，香气清雅，回味甘甜',
        price: '¥128/500g',
        category: '茶叶',
        image: '🍃',
        features: ['手工制作', '高山茶', '香气清雅']
    },
    {
        name: '土蜂蜜',
        description: '纯天然野生蜂蜜，无添加无污染，具有独特的花香味',
        price: '¥88/500g',
        category: '蜂产品',
        image: '🍯',
        features: ['纯天然', '野生蜂蜜', '无添加']
    },
    {
        name: '手工艺品',
        description: '传统竹编工艺品，精美实用，展现观英滩文化特色',
        price: '¥58起',
        category: '工艺品',
        image: '🎋',
        features: ['传统工艺', '精美实用', '文化特色']
    },
    {
        name: '农家腊肉',
        description: '传统烟熏工艺，选用优质猪肉，味道醇厚，回味无穷',
        price: '¥98/kg',
        category: '肉制品',
        image: '🥓',
        features: ['传统烟熏', '优质猪肉', '味道醇厚']
    },
    {
        name: '野生菌类',
        description: '山区野生菌类，营养价值高，味道鲜美，绿色健康',
        price: '¥158/kg',
        category: '菌类',
        image: '🍄',
        features: ['野生采摘', '营养丰富', '绿色健康']
    }
];

export default function Products() {
    return (
        <Box
            id="products"
            sx={{
                py: { xs: 8, sm: 10 },
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light' ? '#ffffff' : '#121212',
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
                    特色产品
                </Typography>
                <Typography
                    variant="body1"
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 6 }}
                >
                    精选观英滩优质农产品和手工艺品，传承乡村文化，品味自然馈赠
                </Typography>
                <Grid container spacing={4}>
                    {products.map((product, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'all 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: (theme) =>
                                            theme.palette.mode === 'light'
                                                ? '0 8px 25px rgba(0,0,0,0.15)'
                                                : '0 8px 25px rgba(255,255,255,0.1)',
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        height: 160,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === 'light' ? '#f5f5f5' : '#2a2a2a',
                                        fontSize: '4rem',
                                        position: 'relative',
                                    }}
                                >
                                    {product.image}
                                    <Chip
                                        label={product.category}
                                        size="small"
                                        sx={{
                                            position: 'absolute',
                                            top: 8,
                                            right: 8,
                                            backgroundColor: 'primary.main',
                                            color: 'white',
                                        }}
                                    />
                                </Box>
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography
                                        gutterBottom
                                        variant="h6"
                                        component="h3"
                                        sx={{ fontWeight: 'bold' }}
                                    >
                                        {product.name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mb: 2 }}
                                    >
                                        {product.description}
                                    </Typography>
                                    <Box sx={{ mb: 2 }}>
                                        {product.features.map((feature, idx) => (
                                            <Chip
                                                key={idx}
                                                label={feature}
                                                size="small"
                                                variant="outlined"
                                                sx={{ mr: 0.5, mb: 0.5 }}
                                            />
                                        ))}
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        color="primary.main"
                                        sx={{ fontWeight: 'bold' }}
                                    >
                                        {product.price}
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ p: 2, pt: 0 }}>
                                    <Button
                                        size="small"
                                        variant="outlined"
                                        sx={{ mr: 1 }}
                                    >
                                        了解详情
                                    </Button>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        color="primary"
                                    >
                                        立即购买
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
