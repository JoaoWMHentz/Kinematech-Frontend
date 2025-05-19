import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import PowerIcon from '@mui/icons-material/Power'
import RobotIcon from '@mui/icons-material/SmartToy'
import LinkIcon from '@mui/icons-material/Link'
import CableIcon from '@mui/icons-material/Cable'
import BuildIcon from '@mui/icons-material/Build'
import InventoryIcon from '@mui/icons-material/Inventory'

const categories = [
  { name: 'Componentes Eletrônicos', icon: <PowerIcon />, path: '/products?category=componentes-eletronicos' },
  { name: 'Arduino, Módulos e Robótica', icon: <RobotIcon />, path: '/products?category=arduino-modulos-robotica' },
  { name: 'Conectores e Chaves', icon: <LinkIcon />, path: '/products?category=conectores-chaves' },
  { name: 'Fios e Cabos', icon: <CableIcon />, path: '/products?category=fios-cabos' },
  { name: 'Ferramentas', icon: <BuildIcon />, path: '/products?category=ferramentas' },
  { name: 'Acessórios e Outros', icon: <InventoryIcon />, path: '/products?category=acessorios-outros' },
]

export default function Categories() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'primary.main',
        color: 'white',
        paddingBottom : 1,
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
            <Box sx={{ fontSize: 30 }}>{category.icon}</Box>
            <Typography variant="body1">{category.name}</Typography>
          </Box>
        </Link>
      ))}
    </Box>
  )
}