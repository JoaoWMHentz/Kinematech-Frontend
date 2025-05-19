import { useEffect, useState } from 'react';
import { Box, Typography, TextField, Button, Slider, Checkbox, FormControlLabel, Paper, MenuItem, Select, FormControl, InputLabel, SelectChangeEvent, Pagination } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ProductService, Product, Category } from '../services/ProductService';
import ProductCard from '../components/ProductCard'; // Importando o novo componente

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]); // Estado para categorias
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState<string>(''); // Estado para a opção de ordenação

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await ProductService.getAll();
        setProducts(response);
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      } finally {
        setLoading(false);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await ProductService.getCategories();
        setCategories(response); // Atualiza o estado com as categorias do servidor
      } catch (error) {
        console.error('Erro ao carregar categorias:', error);
      }
    };

    fetchProducts();
    fetchCategories(); // Chama a função para carregar categorias
  }, []);

  const handleSortChange = (event: SelectChangeEvent<string>) => {
    setSortOption(event.target.value as string);
    // Aqui você pode implementar a lógica de ordenação dos produtos
  };

  return (
    <Box sx={{ display: 'flex', padding: 2 }}>
      {/* Sidebar de Filtros */}
      <Paper sx={{ minWidth: "200px", width: '16%', padding: 2, marginRight: 4 }}>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Categorias
        </Typography>
        {categories.map((category) => (
          <FormControlLabel
            key={category.id}
            control={<Checkbox />}
            label={category.name}
            sx={{ display: 'block' }}
          />
        ))}
      </Paper>

      {/* Listagem de Produtos */}
      <Box sx={{ flex: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
          <Typography variant="h6">
            {loading ? 'Carregando produtos...' : `Microcontroladores e componentes eletrônicos`}
          </Typography>
          <FormControl size="small" sx={{ minWidth: 150 }}>
            <InputLabel id="sort-label">Ordenar por</InputLabel>
            <Select
              labelId="sort-label"
              value={sortOption}
              onChange={handleSortChange}
              label="Ordenar por"
            >
              <MenuItem value="price-asc">Preço: Menor para Maior</MenuItem>
              <MenuItem value="price-desc">Preço: Maior para Menor</MenuItem>
              <MenuItem value="name-asc">Nome: A-Z</MenuItem>
              <MenuItem value="name-desc">Nome: Z-A</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Grid container spacing={2}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}{...({} as any)}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>

        {/* Contagem de produtos e paginador */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 }}>
          <Typography variant="body1">
            {loading ? 'Carregando produtos...' : `${products.length} produtos encontrados`}
          </Typography>
          <Pagination count={2} color="primary" />
        </Box>
      </Box>
    </Box>
  );
}
