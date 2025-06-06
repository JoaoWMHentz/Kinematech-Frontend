import { Container } from '@mui/material';
import Carousel from '../components/Carousel';
import FeaturedProducts from '../components/FeaturedProducts';

export default function Home() {
  return (
    <>
      <Carousel />
        <FeaturedProducts />
    </>
  );
}
