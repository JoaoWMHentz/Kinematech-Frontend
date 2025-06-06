import { Phone } from '@mui/icons-material';

import { Box, Typography, Grid, Link, Divider } from '@mui/material';

export default function Footer() {
    return (
        <Box
            sx={{
 
                paddingLeft: 10, paddingRight: 10, paddingTop: 1, paddingBottom: 1,
            }}
        >
            <Grid container spacing={4} alignItems="flex-start" justifyContent={'left'}>
                {/* Linha de Títulos */}
                <Grid item size={2} {...({} as any)}>
                    <Typography variant="h6" gutterBottom>
                        Kinematech
                    </Typography>
                </Grid>
                <Grid item size={2} {...({} as any)}>
                    <Typography variant="h6" gutterBottom>
                        Para Você
                    </Typography>
                </Grid>
                <Grid item size={2} {...({} as any)}>
                    <Typography variant="h6" gutterBottom>
                        Minha Conta
                    </Typography>
                </Grid>
                <Grid item size={3} {...({} as any)}>
                    <Typography variant="h6" gutterBottom>
                        Atendimento
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={4} alignItems="flex-start" justifyContent={'left'}>
                {/* Linha de Conteúdo */}
                <Grid item size={2} {...({} as any)}>
                    <Typography variant="body2">Dúvidas?</Typography>
                    <Typography variant="body2">
                        <Link
                            href="https://wa.me/5547992486914"
                            target="_blank"
                            rel="noopener"
                            sx={{ color: 'secondary.main', textDecoration: 'none' }}
                        >
                          <Phone sx={{ fontSize: 12 }} />
                            (47) 99248-6914
                        </Link>
                    </Typography>
                </Grid>
                <Grid item size={2} {...({} as any)}>
                    <Box display="flex" flexDirection="row" gap={3}>
                        <Box>
                            <Typography variant="body2">• Produtos</Typography>
                            <Typography variant="body2">• Serviços</Typography>
                        </Box>
                        <Box>
                            <Typography variant="body2">• Rastreamento</Typography>
                            <Typography variant="body2">• Trocas e Devoluções</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item size={2} {...({} as any)}>
                    <Box display="flex" flexDirection="row" gap={3}>
                        <Box>
                            <Typography variant="body2">• Entrar</Typography>
                            <Typography variant="body2">• Sair</Typography>
                        </Box>
                        <Box>
                            <Typography variant="body2">• Meus pedidos</Typography>
                            <Typography variant="body2">• SAC</Typography>
                        </Box>
                    </Box>
                </Grid>
                  <Grid item size={3} {...({} as any)}>
                    <Typography variant="body2">• Rua manuel dos Santos 421 Jaraguá do Sul SC</Typography>
                    <Box display="flex" flexDirection="row" gap={2}>
                        <Typography variant="body2">• CEP 89258-804</Typography>
                        <Typography variant="body2">
                            <Link
                                href="mailto:contato@kinematech.com"
                                sx={{ color: 'secondary.main', textDecoration: 'none' }}
                            >
                                • contato@kinematech.com
                            </Link>
                        </Typography>

                    </Box>

                </Grid>
            </Grid>

            <Divider sx={{ borderColor: 'secondary.main', marginY: 2 }} />

            <Typography variant="body2" align="center" sx={{ color: 'secondary.main' }}>
                © {new Date().getFullYear()} Kinematech. Todos os direitos reservados.
            </Typography>
        </Box>
    );
}