import { Container, Typography } from '@mui/material'

export default function Home() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Bem-vindo à BotzStore!
      </Typography>
      <Typography variant="body1">
        Explore os melhores componentes e kits para robótica.
      </Typography>
    </Container>
  )
}
