import { Box, Typography, TextField, Button, Slider, Checkbox, FormControlLabel, Card, CardMedia, CardContent, CardActions } from '@mui/material'
import Grid from '@mui/material/Grid'
const categories = [
  'Alto Falante',
  'Borne',
  'Botão, Chave e Micro Chave',
  'Bucha Isolante',
  'Buzzer',
  'Capacitores',
  'Carretel e Núcleo de ferrite',
  'Circuito Integrado',
]

const products = [
  {
    name: 'Resistor Carbono CR25 - 1/4W - 820K Ohms',
    price: 'R$ 0,07',
    image: '/images/resistor.jpg',
    rating: 4,
  },
  {
    name: 'BF254 - Transistor NPN, 20V/30mA (TO-92)',
    price: 'R$ 0,63',
    image: '/images/transistor.jpg',
    rating: 5,
  },
  {
    name: 'Resistor Carbono CR25 - 1/4W - 5K1 Ohms',
    price: 'R$ 0,07',
    image: '/images/resistor.jpg',
    rating: 3,
  },
]

export default function ProductsPage() {
  return (
    <Box sx={{ display: 'flex', padding: 2 }}>
      {/* Sidebar de Filtros */}
      <Box sx={{ width: '15%', paddingRight: 2 }}>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Filtros
        </Typography>

        {/* Filtros Selecionados */}
        <Button variant="outlined" fullWidth sx={{ marginBottom: 2 }}>
          Remover filtros
        </Button>

        {/* Filtro por preço */}
        <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
          Busque por preço
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, marginBottom: 2 }}>
          <TextField label="R$ Min" size="small" fullWidth />
          <TextField label="R$ Max" size="small" fullWidth />
          <Button variant="contained">OK</Button>
        </Box>
        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />

        {/* Filtro por categorias */}
        <Typography variant="subtitle1" sx={{ marginTop: 3, marginBottom: 1 }}>
          Categorias
        </Typography>
        {categories.map((category, index) => (
          <FormControlLabel
            key={index}
            control={<Checkbox />}
            label={category}
            sx={{ display: 'block' }}
          />
        ))}
      </Box>

      {/* Listagem de Produtos */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          5915 produtos encontrados para essa busca
        </Typography>
        <Grid container spacing={2}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} {...({} as any)}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="contained" color="primary">
                    Comprar
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}