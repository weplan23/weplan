// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'home',
    path: '/home',
    icon: icon('ic_analytics'),
  },
  {
    title: 'create itinerary',
    path: '/itinerary/create',
    icon: icon('ic_plus'),
  },
  {
    title: 'itineraries',
    path: '/itinerary/list',
    icon: icon('ic_cart'),
  },
];

export default navConfig;
