import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Switch,
  FormControlLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { ProductService, Product } from '../services/ProductService';

export default function ProductCreatePage() {
  const [product, setProduct] = useState<Product>({
    name: '',
    description: '',
    price: 0,
    categoryId: 0,
    thumbnail: '',
    photos: [],
    showOnHomepage: false,
    detailedDescription: '',
  });

  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (field: keyof Product, value: any) => {
    setProduct({ ...product, [field]: value });
  };

  const handleSubmit = async () => {
    try {
      await ProductService.create(product);
      alert('Produto cadastrado com sucesso!');
      setProduct({
        name: '',
        description: '',
        price: 0,
        categoryId: 0,
        thumbnail: '',
        photos: [],
        showOnHomepage: false,
        detailedDescription: '',
      });
      fetchProducts(); // Atualiza a tabela após o cadastro
    } catch (error) {
      console.error(error);
      alert('Erro ao cadastrar o produto.');
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await ProductService.getAll();
      setProducts(response);
    } catch (error) {
      console.error(error);
      alert('Erro ao buscar os produtos.');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ padding: 4, backgroundColor: 'background.default', minHeight: '100vh' }}>
      <Typography variant="h5" sx={{ marginBottom: 4, fontWeight: 'bold' }}>
        Cadastro de Produto
      </Typography>
      <Paper sx={{ padding: 3, marginBottom: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} {...({} as any)}>
            <TextField
              fullWidth
              label="Nome do Produto"
              value={product.name}
              onChange={(e) => handleChange('name', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} {...({} as any)}>
            <TextField
              fullWidth
              label="Descrição"
              value={product.description}
              onChange={(e) => handleChange('description', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6} {...({} as any)}>
            <TextField
              fullWidth
              label="Preço"
              type="number"
              value={product.price}
              onChange={(e) => handleChange('price', parseFloat(e.target.value))}
            />
          </Grid>
          <Grid item xs={12} md={6} {...({} as any)}>
            <TextField
              fullWidth
              label="ID da Categoria"
              type="number"
              value={product.categoryId}
              onChange={(e) => handleChange('categoryId', parseInt(e.target.value))}
            />
          </Grid>
          <Grid item xs={12} {...({} as any)}>
            <TextField
              fullWidth
              label="Thumbnail (Base64)"
              value={product.thumbnail}
              onChange={(e) => handleChange('thumbnail', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} {...({} as any)}>
            <TextField
              fullWidth
              label="Fotos Adicionais (Base64, separadas por vírgula)"
              value={product.photos?.join(',')}
              onChange={(e) => handleChange('photos', e.target.value.split(','))}
            />
          </Grid>
          <Grid item xs={12} {...({} as any)}>
            <FormControlLabel
              control={
                <Switch
                  checked={product.showOnHomepage}
                  onChange={(e) => handleChange('showOnHomepage', e.target.checked)}
                />
              }
              label="Exibir na Página Inicial"
            />
          </Grid>
          <Grid item xs={12} {...({} as any)}>
            <TextField
              fullWidth
              label="Descrição Detalhada (HTML)"
              multiline
              rows={4}
              value={product.detailedDescription}
              onChange={(e) => handleChange('detailedDescription', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} {...({} as any)}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Cadastrar Produto
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Produtos Cadastrados
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
        <TextField
          fullWidth
          label="Pesquisar Produto"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={fetchProducts}>
          Atualizar
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell>Categoria</TableCell>
              <TableCell>Exibir na Página Inicial</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow key={product.name}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.categoryId}</TableCell>
                <TableCell>{product.showOnHomepage ? 'Sim' : 'Não'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}