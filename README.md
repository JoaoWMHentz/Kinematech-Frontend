# BotzStore Frontend

## Integrantes

- João Witor Müller Hentz
## Sobre a Aplicação

BotzStore é uma aplicação de frontend para uma loja virtual, desenvolvida em React e TypeScript, com o objetivo de proporcionar uma experiência de compra moderna e eficiente.

## Objetivo

Oferecer uma plataforma intuitiva para que usuários possam navegar, visualizar produtos, adicionar itens ao carrinho, realizar autenticação e finalizar compras.

## Principais requisitos e/ou casos de uso implementados

- Exibição de produtos em destaque e por categoria
- Página de detalhes de produtos
- Carrinho de compras com gerenciamento de itens
- Autenticação de usuários
- Páginas de checkout e criação de produtos
- Navegação protegida por autenticação

## Descrição das principais classes e telas e seu funcionamento

### Componentes
- `ProductCard.tsx`: Exibe informações resumidas de um produto.
- `CartSidebar.tsx` e `CartSidebarCard.tsx`: Gerenciam e exibem o carrinho de compras.
- `Categories.tsx`: Lista categorias disponíveis.
- `FeaturedProducts.tsx`: Mostra produtos em destaque.
- `Navbar.tsx` e `Footer.tsx`: Navegação principal e rodapé.
- `RouteGuard.tsx`: Protege rotas que exigem autenticação.

### Páginas
- `Home.tsx`: Página inicial com destaques e categorias.
- `ProductsPage.tsx`: Lista de produtos.
- `ProductPage.tsx`: Detalhes de um produto selecionado.
- `CheckoutPage.tsx`: Processo de finalização de compra.
- `AuthPage.tsx`: Tela de login/autenticação.
- `AccountPage.tsx`: Gerenciamento de conta do usuário.
- `ProductCreatePage.tsx`: Cadastro de novos produtos (para administradores).

### Serviços e Modelos
- `services/`: Comunicação com backend para produtos, usuários, carrinho, endereços e autenticação.
- `models/`: Estruturas de dados para Produto, Usuário, Carrinho, Cliente e Endereço.

## Como Executar

1. Certifique-se de ter o Node.js instalado.
2. Instale as dependências com `npm install`.
3. Inicie o servidor de desenvolvimento com `npm start`.
4. Acesse a aplicação em `http://localhost:3000`.

## Tecnologias Utilizadas

- React
- TypeScript
- CSS

## Contribuição
