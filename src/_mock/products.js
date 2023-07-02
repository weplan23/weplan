import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  "The famous sights of London",
  "A week in romantic Paris",
  "Live your Big Apple dream",
  "Two days in bustling Tokyo",
  "Not just the Opera House",
  "Nein, nein, nein!",
  "When in Rome",
  "Moscow - the Russian capital",
  "Stay South! Korea.",
  "Sled dogs and lone wolves - Alaska",
  "Pack your garlic - Transylvania",
  "Hippopotamus or hippocampus?",
  "Deal or no deal Mr Giza",
];
const IMAGES = [
  "https://thumbs.dreamstime.com/b/big-ben-london-autumn-leaves-32915756.jpg",
  "https://i0.wp.com/thegoodlifefrance.com/wp-content/uploads/2021/03/Literary-tour-of-France.jpg",
  "https://img.freepik.com/free-photo/central-park-manhattan-new-york-huge-beautiful-park-surrounded-by-skyscraper-with-pond_181624-50335.jpg",
  "https://hips.hearstapps.com/hmg-prod/images/high-angle-view-of-tokyo-skyline-at-dusk-japan-royalty-free-image-1664309926.jpg",
  "https://a.cdn-hotels.com/gdcs/production90/d515/39e765a9-77d3-40e7-bdaf-94f6731a5b27.jpg",
  "https://cdn.britannica.com/49/179449-138-9F4EC401/Overview-Berlin.jpg?w=800&h=450&c=crop",
  "https://i.natgeofe.com/n/3012ffcc-7361-45f6-98b3-a36d4153f660/colosseum-daylight-rome-italy_16x9.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/8/85/Saint_Basil%27s_Cathedral_and_the_Red_Square.jpg",
  "https://www.telegraph.co.uk/content/dam/Travel/2020/February/iStock-621371796.jpg?imwidth=680",
  "https://www.youngpioneertours.com/wp-content/uploads/2020/07/28_kumgang.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRucLj1y8Yj8AQsFx4PCfhGzR7ivVZm6pqlw&usqp=CAU",
  "https://lp-cms-production.imgix.net/features/2015/08/BranCastle_Transylvania-d91a08d52fa2.jpg?w=600&h=400",
  "https://media.cntraveler.com/photos/5d77c8ab82f7680008172f20/master/w_2580%2Cc_limit/Botswana_GettyImages-534898061.jpg",
  "https://i.natgeofe.com/n/535f3cba-f8bb-4df2-b0c5-aaca16e9ff31/giza-plateau-pyramids.jpg",
  "Cairo, Egypt",
  "Rio de Janeiro, Brazil",
  "Toronto, Canada",
  "Mumbai, India",
  "Cape Town, South Africa",
  "Seoul, South Korea",
  "Dubai, United Arab Emirates",
  "Lima, Peru",
  "Mexico City, Mexico",
  "Beijing, China",
  "Athens, Greece",
  "Stockholm, Sweden",
  "Amsterdam, Netherlands",
  "Helsinki, Finland",
  "Oslo, Norway",
  "Bangkok, Thailand"
];
const PRODUCT_COLOR = ['#00AB55', '#000000', '#FFFFFF', '#FFC0CB', '#FF4842', '#1890FF', '#94D82D', '#FFC107'];

// ----------------------------------------------------------------------

const products = [...Array(8)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: IMAGES[index],
    name: PRODUCT_NAME[index],
    price: "",
    colors: PRODUCT_COLOR,
    status: sample(['', '']),
  };
});

export default products;
