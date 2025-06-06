import { useEffect, useState } from 'react';
import { ProductService } from '../services/ProductService';
import { Box, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { Product } from '../models/Product';

export default function FeaturedProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFeaturedProducts = async () => {
            try {
                setLoading(true);
                const allProducts = await ProductService.getAll();
                const featured = allProducts.filter((product: Product) => product.showOnHomepage);
                setProducts(featured);
            } catch (err) {
                setError('Erro ao carregar os produtos. Tente novamente mais tarde.');
            } finally {
                setLoading(false);
            }
        };

        fetchFeaturedProducts();
    }, []);

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                <Typography variant="h6">Carregando...</Typography>
            </Box>
        );
    }

    if (error) {
        return (
            <Box sx={{ textAlign: 'center', marginTop: 4 }}>
                <Typography variant="h6" color="error">
                    {error}
                </Typography>
            </Box>
        );
    }

    if (products.length === 0) {
        return (
            <Box sx={{ textAlign: 'center', marginTop: 4 }}>
                <Typography variant="h6">Nenhum produto em destaque no momento.</Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ paddingLeft: 4, paddingRight: 4, paddingTop: 2, marginBottom: 4, display: 'flex', justifyContent: 'left' }}>
            <Grid container size={12} spacing={4}>
                <Grid item size={12} {...({} as any)}>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                    Novidades e Tendências
                </Typography>
                </Grid>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product.id} {...({} as any)}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="200"
                                image={product.thumbnail}
                                alt={product.name}
                            />
                            <CardContent>
                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                    {product.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {product.description || 'Sem descrição disponível.'}
                                </Typography>
                                <Typography variant="h6" color="primary" sx={{ marginTop: 1 }}>
                                    R$ {product.price?.toFixed(2)}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant="contained" color="primary" href={`/product/${product.id}`}>
                                    Ver Detalhes
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}