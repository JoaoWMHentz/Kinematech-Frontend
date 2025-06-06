import { Box, Typography, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';

export default function AboutKinematech() {
  return (
    <Box
      
    >
      <Container maxWidth="lg">
        {/* Seção com logotipo, missão e visão, estilo Opulo */}
        <Grid container spacing={4} alignItems="center" mb={10}>
          <Grid item xs={12} md={6} {...({} as any)}>
            <Box display="flex" alignItems="center">
              <Box flexGrow={1}>
                <Typography variant="h2" fontWeight="bold" color="primary" gutterBottom>
                  KINEMATECH
                </Typography>
                <Typography variant="h6" color="textSecondary" paragraph>
                  Conectando a humanidade ao mundo da robótica
                </Typography>

                <Grid container spacing={2} mt={2}>
                  <Grid item xs={12} sm={8} {...({} as any)}>
                    <Card sx={{ p: 2, borderRadius: 3, backgroundColor: '#fff' }}>
                      <Typography variant="h6" color="primary">Nossa Missão</Typography>
                      <Typography variant="body2" color="textSecondary">
                        Desenvolver soluções robóticas acessíveis e de alta performance para desenvolvedores, educadores e inovadores.
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={4} {...({} as any)}>
                    <Card sx={{ p: 2, borderRadius: 3, backgroundColor: '#fff' }}>
                      <Typography variant="h6" color="primary">Nossa Visão</Typography>
                      <Typography variant="body2" color="textSecondary">
                        Tornar a robótica simples, modular e educativa, impulsionando o progresso tecnológico sustentável.
                      </Typography>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
                <Box sx={{ flexShrink: 0, width: { xs: '100%', sm: '50%' }, ml: { xs: 0, sm: 3 } }}>
                    <CardMedia
                    component="img"
                    image="/images/kiko-illustration.png" // substitua pela sua arte temporária do KIKO
                    alt="KIKO Robô"
                    sx={{  width: "100%" }}
                    />
                </Box>
              </Box>
          </Grid>
        </Grid>

        {/* Sobre + Objetivos */}
        <Card sx={{ mb: 8, p: 4, borderRadius: 4, boxShadow: 2 }}>
          <CardContent>
            <Typography variant="h5" color="primary" gutterBottom>
              Sobre a Kinematech
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              A Kinematech é uma startup de tecnologia que desenvolve soluções em robótica avançada, sistemas embarcados e plataformas de controle inteligente. Nosso propósito é tornar a robótica acessível, sustentável e presente no cotidiano de desenvolvedores, educadores e inovadores. Atuamos com produtos próprios e projetos autorais como o robô bípedo com rodas KIKO, placas de desenvolvimento compactas e controladores eletrônicos de velocidade de alta performance.
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              Acreditamos que a robótica deve ser simples, modular e educativa — mas sem abrir mão da performance. Unimos hardware confiável, software aberto e uma visão de futuro voltada à inclusão tecnológica, à economia criativa e ao empreendedorismo jovem.
            </Typography>

            <Typography variant="h6" color="primary" gutterBottom mt={4}>
              Objetivos da Kinematech
            </Typography>
            <ul style={{ color: '#555', paddingLeft: '1.25rem' }}>
              <li>📌 Desenvolver robôs inovadores como o <strong>KIKO</strong>, capazes de equilibrar-se, saltar e se locomover com inteligência.</li>
              <li>📌 Criar produtos modulares e acessíveis para ensino técnico e maker, como o <strong>TinyStudio</strong>.</li>
              <li>📌 Popularizar o uso de ESCs compactos e confiáveis, como o <strong>WICK V1</strong>.</li>
              <li>📌 Promover conteúdo técnico e formação de novos talentos em robótica e eletrônica.</li>
              <li>📌 Estabelecer parcerias com escolas, universidades e comunidades makers.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Projetos em Destaque (mantidos como antes) */}
        {/* ...seção de cards dos projetos WICK V1, TinyStudio e KIKO... */}
      </Container>
    </Box>
  );
}
