import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Paper, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import HomeIcon from '@mui/icons-material/Home';

export default function AccountPage() {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState<string | null>(null);

    useEffect(() => {
        const token = sessionStorage.getItem('authToken');
        if (!token) {
            navigate('/auth');
        } else {
            const email = 'user@example.com'; // Substitua por lógica real de decodificação
            setUserEmail(email);
        }
    }, [navigate]);

    const handleLogout = () => {
        sessionStorage.removeItem('authToken');
        navigate('/auth');
    };

    return (
        <Box sx={{ padding: 4, backgroundColor: 'background.default', minHeight: '100vh' }}>
            <Typography variant="h5" sx={{ marginBottom: 4, fontWeight: 'bold' }}>
                Minha Conta
            </Typography>
            <Grid container spacing={3}>
                {/* Dados Cadastrais */}
                <Grid item xs={12} md={4} {...({} as any)}>
                    <Paper sx={{ padding: 3, display: 'flex', flexDirection: 'column', gap: 2, backgroundColor: 'rgba(255, 255, 255, 0.8)', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', borderRadius: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <PersonIcon color="primary" />
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                Dados Cadastrais
                            </Typography>
                        </Box>
                        <Typography variant="body1">
                            <strong>Nome:</strong> João Witor Müller Hentz
                        </Typography>
                        <Typography variant="body1">
                            <strong>Email:</strong> {userEmail || 'Usuário'}
                        </Typography>
                        <Typography variant="body1">
                            <strong>Telefone celular:</strong> (47) 99248-6914
                        </Typography>
                        <Typography variant="body1">
                            <strong>Telefone residencial:</strong> (47) 99248-6914
                        </Typography>
                        <Button variant="outlined" color="primary">
                            Alterar Senha
                        </Button>
                    </Paper>
                </Grid>

                {/* Tipo de Cadastro */}
                <Grid item xs={12} md={4} {...({} as any)}>
                    <Paper sx={{ padding: 3, display: 'flex', flexDirection: 'column', gap: 2, backgroundColor: 'rgba(255, 255, 255, 0.8)', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', borderRadius: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <AssignmentIndIcon color="primary" />
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                Tipo de Cadastro
                            </Typography>
                        </Box>
                        <Typography variant="body1">
                            <strong>Tipo de cadastro:</strong> Pessoa Física
                        </Typography>
                        <Typography variant="body1">
                            <strong>CPF:</strong> 096.688.359-48
                        </Typography>
                    </Paper>
                </Grid>

                {/* Endereço Principal */}
                <Grid item xs={12} md={4} {...({} as any)}>
                    <Paper sx={{ padding: 3, display: 'flex', flexDirection: 'column', gap: 2, backgroundColor: 'rgba(255, 255, 255, 0.8)', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', borderRadius: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <HomeIcon color="primary" />
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                Endereço Principal
                            </Typography>
                        </Box>
                        <Typography variant="body1">
                            <strong>Endereço:</strong> Rua Manoel dos Santos, 421 - Casa azul com porta amarela
                        </Typography>
                        <Typography variant="body1">
                            <strong>Bairro:</strong> Ilha da Figueira
                        </Typography>
                        <Typography variant="body1">
                            <strong>Cidade / UF:</strong> Jaraguá do Sul / SC
                        </Typography>
                        <Typography variant="body1">
                            <strong>CEP:</strong> 89258-804
                        </Typography>
                        <Typography variant="body1">
                            <strong>País:</strong> Brasil
                        </Typography>
                        <Button variant="outlined" color="primary">
                            Editar endereço principal
                        </Button>
                    </Paper>
                </Grid>
            </Grid>

            {/* Botões de navegação */}
            <Box sx={{ marginTop: 4, display: 'flex', gap: 2 }}>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => navigate('/products')}
                >
                    Ver Produtos
                </Button>
                <Button
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    onClick={handleLogout}
                >
                    Sair
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => navigate('/product/create')}
                >
                    Cadastrar Produto
                </Button>
            </Box>
        </Box>
    );
}