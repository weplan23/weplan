import PropTypes from 'prop-types';
// @mui
import { Box, Card, Link, Typography, Stack, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
// utils
import { fCurrency } from '../../../utils/formatNumber';
// components
import Label from '../../../components/label';
import { ColorPreview } from '../../../components/color-utils';

// ----------------------------------------------------------------------

const StyledProductImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object,
};

export default function ShopProductCard({ product }) {
  const { name, cover, price, colors, status, priceSale } = product;

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {status && (
          <Label
            variant="filled"
            color={(status === 'sale' && 'error') || 'info'}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            {status}
          </Label>
        )}
        <StyledProductImg src={cover} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover">
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <p>↑ {colors}</p>
          <Typography variant="subtitle1">
            <Typography
              component="span"
              variant="body1"
              sx={{
                color: 'text.disabled',
                textDecoration: 'line-through',
              }}
            >
              {priceSale && fCurrency(priceSale)}
            </Typography>
            &nbsp;
            {}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}

export function EditableItinerary({ product, index, x, y, z}) {
  const status = true;
  const cover = 'https://www.sydneyoperahouse.com/sites/default/files/collaborodam_assets/sydney-symphony-orchestra-concert-hall-credit-daniel-boud-019-16-9.jpg';
  return (
    <Card>
      <Stack spacing={2} sx={{ p: 3 }}>
        <Stack direction="column" alignItems="center" justifyContent="space-between">
        <TextField id="outlined-basic" label="Stop location" variant="outlined" style={{margin: "8px"}} onChange={e => x(index, e.target.value)}/>
        <TextField id="outlined-basic" label="Duration" variant="outlined" style={{margin: "8px"}} onChange={e => z(index, e.target.value)}/>
        <TextField id="outlined-basic" label="Image" variant="outlined" style={{margin: "8px"}} onChange={e => y(index, e.target.value)}/>
        </Stack>
      </Stack>
    </Card>
  );
}

export function AddProductCard({ product }) {
  const { name, cover, price, colors, status, priceSale } = product;

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {status && (
          <Label
            variant="filled"
            color={(status === 'sale' && 'error') || 'info'}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            {status}
          </Label>
        )}
        <StyledProductImg src={cover} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover">
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <p>↑ {colors}</p>
          <Typography variant="subtitle1">
            <Typography
              component="span"
              variant="body1"
              sx={{
                color: 'text.disabled',
                textDecoration: 'line-through',
              }}
            >
              {priceSale && fCurrency(priceSale)}
            </Typography>
            &nbsp;
            {price}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}