import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product, ProductService } from '../services/ProductService';
import { Box, Typography, Button, CircularProgress, Grid, Paper, IconButton, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

export default function ProductPage() {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [quantity, setQuantity] = useState(1);
    const [zipCode, setZipCode] = useState('');
    const [shippingOptions, setShippingOptions] = useState<{ carrier: string; price: number; deliveryTime: string }[] | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const response = await ProductService.getById(id!);
                setProduct(response);
                setSelectedImage(response.photos?.[0] || response.thumbnail); // Define a primeira imagem como padrão
            } catch (err) {
                setError('Erro ao carregar o produto. Tente novamente mais tarde.');
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchProduct();
        }
    }, [id]);

    const handleCalculateShipping = () => {
        // Mocked shipping options for now
        const options = [
            { carrier: 'Transportadora A', price: 20.0, deliveryTime: '3-5 dias úteis' },
            { carrier: 'Transportadora B', price: 15.0, deliveryTime: '5-7 dias úteis' },
            { carrier: 'Transportadora C', price: 25.0, deliveryTime: '2-4 dias úteis' },
        ];
        setShippingOptions(options);
    };

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
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

    if (!product) {
        return (
            <Box sx={{ textAlign: 'center', marginTop: 4 }}>
                <Typography variant="h6">Produto não encontrado.</Typography>
            </Box>
        );
    }

    const stock = 10; // Supondo que o estoque seja uma constante por enquanto

    return (
        <Box sx={{ padding: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Paper sx={{ padding: 4, marginBottom: 4, maxWidth: '85vw', overflowY: 'auto' }}>
                <Box sx={{ padding: 4 }}>
                    <Grid container spacing={4}>
                        {/* Galeria de Imagens */}
                        <Grid item xs={12} md={6} {...({} as any)}>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                {/* Miniaturas */}
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    {(product.photos || [product.thumbnail]).map((photo, index) => (
                                        <Box
                                            key={index}
                                            sx={{
                                                border: selectedImage === photo ? '2px solid #1976d2' : '2px solid transparent',
                                                cursor: 'pointer',
                                                width: 90,
                                                height: 90,
                                                overflow: 'hidden',
                                                borderRadius: 1,
                                            }}
                                            onClick={() => setSelectedImage(photo)}
                                        >
                                            <img
                                                src={photo}
                                                alt={`Foto ${index + 1} do produto`}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                        </Box>
                                    ))}
                                </Box>

                                {/* Imagem Principal */}
                                <Box
                                    sx={{
                                        flex: 1,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        border: '1px solid #ddd',
                                        borderRadius: 2,
                                        overflow: 'hidden',
                                        height: 600,
                                        width: 800,
                                    }}
                                >
                                    <img
                                        src={selectedImage!}
                                        alt="Imagem principal do produto"
                                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                    />
                                </Box>
                            </Box>
                        </Grid>

                        {/* Informações do Produto */}
                        <Grid item xs={12} md={6} {...({} as any)}>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                                {product.name}
                            </Typography>
                            <Typography variant="h5" color="primary" sx={{ marginBottom: 2 }}>
                                R$ {product.price?.toFixed(2)}
                            </Typography>
                            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                {product.description || 'Sem descrição disponível.'}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
                                Categoria: {product.category.name}
                            </Typography>

                            {/* Botões de Ação */}
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Typography variant="body1">Quantidade:</Typography>
                                    <IconButton
                                        size="small"
                                        onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                                    >
                                        <RemoveIcon />
                                    </IconButton>
                                    <TextField
                                        value={quantity}
                                        size="small"
                                        inputProps={{
                                            style: { textAlign: 'center', height: '10px' },
                                            min: 1,
                                        }}
                                        sx={{ width: 50 }}
                                        disabled
                                    />
                                    <IconButton
                                        size="small"
                                        onClick={() => setQuantity((prev) => Math.min(prev + 1, stock))}
                                    >
                                        <AddIcon />
                                    </IconButton>
                                <Typography variant="body2" color="text.secondary">
                                    Em estoque: {stock}
                                </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    <Button variant="contained" color="primary" size="large">
                                        Comprar agora
                                    </Button>
                                    <Button variant="outlined" color="primary" size="large">
                                        Adicionar ao carrinho
                                    </Button>
                                </Box>
                            </Box>

                            {/* Campo de cálculo de frete */}
                            <Box sx={{ marginTop: 4 }}>
                                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                    <TextField
                                        label="CEP"
                                        value={zipCode}
                                        onChange={(e) => setZipCode(e.target.value)}
                                        size="small"
                                        sx={{ width: 150 }}
                                    />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleCalculateShipping}
                                        disabled={!zipCode}
                                    >
                                        Calcular Frete
                                    </Button>
                                </Box>
                            </Box>

                            {/* Tabela de transportadoras */}
                            {shippingOptions && (
                                <Box sx={{ marginTop: 2 }}>
                                    <Typography sx={{ marginBottom: 2 }}>
                                        Opções de Frete:
                                    </Typography>
                                    <TableContainer component={Paper}>
                                        <Table size="small">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Transportadora</TableCell>
                                                    <TableCell>Preço</TableCell>
                                                    <TableCell>Prazo de Entrega</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {shippingOptions.map((option, index) => (
                                                    <TableRow key={index}>
                                                        <TableCell>{option.carrier}</TableCell>
                                                        <TableCell>R$ {option.price.toFixed(2)}</TableCell>
                                                        <TableCell>{option.deliveryTime}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Box>
                            )}
                        </Grid>
                    </Grid>

                    <Box sx={{ marginTop: 4 }}>
                        <Typography variant="h5">Descrição Detalhada</Typography>
                        <Typography variant="body1" sx={{ marginTop: 2 }}>
                            {product.detailedDescription || 'Nenhuma descrição detalhada disponível.'}
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}