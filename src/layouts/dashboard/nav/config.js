// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'For You',
    path: '/home',
    icon: icon('ic_analytics'),
  },
  {
    title: 'create itinerary',
    path: '/itinerary/create',
    icon: icon('ic_plus'),
  },
  {
    title: 'your itineraries',
    path: '/itinerary/list',
    icon: icon('ic_plane'),
  },
  {
    title: "shared with you",
    path: "/blog",
    icon: icon("ic_blog")
  },
  // {
  //   title: 'edit itinerary',
  //   path: 'edit',
  //   icon: icon('ic_edit'),
  // },
];

export default navConfig;
