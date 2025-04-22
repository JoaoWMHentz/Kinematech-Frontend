import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const categories = [
  { name: 'Componentes Eletrônicos', icon: '🔌', path: '/products?category=componentes-eletronicos' },
  { name: 'Arduino, Módulos e Robótica', icon: '🤖', path: '/products?category=arduino-modulos-robotica' },
  { name: 'Conectores e Chaves', icon: '🔗', path: '/products?category=conectores-chaves' },
  { name: 'Fios e Cabos', icon: '🧵', path: '/products?category=fios-cabos' },
  { name: 'Ferramentas', icon: '🛠️', path: '/products?category=ferramentas' },
  { name: 'Acessórios e Outros', icon: '📦', path: '/products?category=acessorios-outros' },
]

export default function Categories() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'primary.main',
        paddingY: 2,
        color: 'white',
      }}
    >
      {categories.map((category, index) => (
        <Link
          key={index}
          to={category.path}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <Box
            sx={{
              textAlign: 'center',
              cursor: 'pointer',
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            <Typography variant="h6">{category.icon}</Typography>
            <Typography variant="body1">{category.name}</Typography>
          </Box>
        </Link>
      ))}
    </Box>
  )
}