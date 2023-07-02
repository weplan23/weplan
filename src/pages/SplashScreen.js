import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
import { useNavigate } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Stack } from '@mui/material';
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// components
import PRODUCTS from '../_mock/products';
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <>
      <Helmet>
        <title> WePlan </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h2" sx={{ mb: 5 }}>
          Hi Cunningham, welcome to WePlan!
        </Typography>
      </Container>
    </>
  );
}
