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
  "Sandy Shores in Brazil",
  "All Thai-ed up",
  "Ireland."
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
  "https://lp-cms-production.imgix.net/features/2015/08/BranCastle_Transylvania-d91a08d52fa2.jpg?w=600&h=400",
  "https://www.grantordelheide.com/images/xl/Ordelheide_20161207-_N4A7272_breachinghippo.jpg",
  "https://i.natgeofe.com/n/535f3cba-f8bb-4df2-b0c5-aaca16e9ff31/giza-plateau-pyramids.jpg",
  "https://lp-cms-production.imgix.net/2021-10/shutterstockRF_477734146.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Ysj3bhdOpL0q9i2JAclxZCddTB2fdqIxXQ&usqp=CAU",
  "https://www.connollycove.com/wp-content/uploads/2019/06/temple-bar-dublin-world-famous-irish-pub.jpg",
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
const UPVOTES = [
  3,
  5,
  0,
  2,
  1,
  0,
  3,
  4,
  5,
  2,
  2,
  1,
  0,
  3,
  0,
  0
]
const PROFILE_IMAGES = [
  "https://expertphotography.b-cdn.net/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg",
  "https://www.mwakilishi.com/sites/default/files/styles/large/public/2020-05/ndiritu.PNG?itok=pYNW9js5",
  "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/01/31/16/wang-qi.jpg",
  "https://img.freepik.com/premium-photo/kazakh-man-with-falcon_672794-1049.jpg",
  "https://blog-6aa0.kxcdn.com/wp-content/uploads/2022/03/nice-things-to-say-to-mum-cover.jpg",
  "https://hips.hearstapps.com/hmg-prod/images/lesley-manville-mum-1557765393.jpg",
  "https://resizing.flixster.com/uVt51cRU8H_EJkEEto-PMM6Ln6c=/300x300/v2/http://media.baselineresearch.com/images/317395/317395_full.jpg"
  
]
const PRODUCT_COLOR = ['#00AB55', '#000000', '#FFFFFF', '#FFC0CB', '#FF4842', '#1890FF', '#94D82D', '#FFC107'];

// ----------------------------------------------------------------------

const products = [...Array(16)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: IMAGES[index],
    name: PRODUCT_NAME[index],
    price: "",
    colors: UPVOTES[index],
    status: sample(['', '']),
  };
});

export default products;
