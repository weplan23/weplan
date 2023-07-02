import PropTypes from 'prop-types';
// @mui
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ShopProductCard from './ProductCard';

// ----------------------------------------------------------------------

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default function ProductList({ products, ...other }) {
  const navigate = useNavigate;

  const handleClick = () => {
    console.log("efsuji");
    navigate('/edit/0');
  }

  return (
    <Grid container spacing={3} {...other}>
      {products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={3}>
          <ShopProductCard product={product}  onClick={handleClick}/>
        </Grid>
      ))}
    </Grid>
  );
}
