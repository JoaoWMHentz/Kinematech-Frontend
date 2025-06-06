import React from 'react'
import Slider from 'react-slick'
import { Box, Typography } from '@mui/material'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const carouselItems = [
  {
    image: '/images/carousel1.png',
    title: 'Componentes SMD',
    subtitle: 'para o seu projeto',
  },
  {
    image: '/images/carousel2.jpg',
    title: 'Arduino e Robótica',
    subtitle: 'Explore nossas soluções',
  },
  {
    image: '/images/carousel3.jpg',
    title: 'Ferramentas',
    subtitle: 'Tudo o que você precisa',
  },
]

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    
  }

  return (
    <Box
      sx={{
        width: '100%', // Garante que o carrossel ocupe 100% da largura do contêiner pai
        overflow: 'hidden', // Evita que o conteúdo "vaze" para fora
      }}
    >
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              position: 'relative',
              height: 400,
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%', // Garante que cada slide ocupe 100% da largura do carrossel
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                bottom: 20,
                left: 20,
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: 2,
                borderRadius: 1,
              }}
            >
              <Typography variant="h4">{item.title}</Typography>
              <Typography variant="subtitle1">{item.subtitle}</Typography>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}