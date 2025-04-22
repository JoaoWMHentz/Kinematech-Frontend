import { Container } from '@mui/material'
import Carousel from '../components/Carousel'
import Categories from '../components/Categories'

export default function Home() {
  return (
    <>
      <Categories />
      <Carousel />
      <Container>
        {/* Conteúdo adicional da página */}
      </Container>
    </>
  )
}
