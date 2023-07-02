import { useState } from 'react';
import { Button, Typography, Grid, Alert, Modal, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {AddProductCard, EditableItinerary} from '../sections/@dashboard/products/ProductCard';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 670,
  height: 650,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 745,
  height: 650,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function ViewPage() {
  
    const stopList = [
      {
        stopName: "Opera House",
        image: "https://tse2.mm.bing.net/th?id=OIP.irCWc82XhAlRHxbNva-5PQHaEj&pid=Api",
        duration: "1 hour"
      },
      {
        stopName: "Royal Botanic Gardens",
        image: "https://tse1.mm.bing.net/th?id=OIP.29QYDUqHRhPgu6HLGQ0X_wHaE7&pid=Api",
        duration: "2 hours",
      },
      {
        stopName: "Art Gallery of NSW",
        image: "https://www.datocms-assets.com/42890/1628487281-renderfront-of-building.jpg?fit=max&iptc=allow&w=2000",
        duration: "1 hour"
      },
      {
        stopName: "UNSW Campus (very beautiful)",
        image: "https://newsroom.unsw.edu.au/sites/default/files/thumbnails/image/unsw_library_lawn_2_0_3.jpg",
        duration: "8 hours"
      },
      {
        stopName: "Bondi Beach",
        image: "https://www.bondi38.com.au/wp-content/uploads/2023/01/bondi-beach-australia.jpg",
        duration: "2 hours"
      },
      {
        stopName: "Mount Druitt",
        image: "https://hips.hearstapps.com/hmg-prod/images/alpe-di-siusi-sunrise-with-sassolungo-or-langkofel-royalty-free-image-1623254127.jpg",
        duration: "3 hours"
      }
    ]

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
  }

  const [open, setOpen] = useState(false);
  const [openWeather, setOpenWeather] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleWeatherOpen = () => setOpenWeather(true);
  const handleWeatherClose = () => setOpenWeather(false);

  const [shareClicked, setShareClicked] = useState(false);
  const [upvoted, setUpvoted] = useState(false);

  const product = {
    name: "Not just the Opera House",
    cover: "https://a.cdn-hotels.com/gdcs/production90/d515/39e765a9-77d3-40e7-bdaf-94f6731a5b27.jpg",
    price: "1 night",
    colors: [],
    status: "",
    priceSale: ""
  }


  return (
    <>
      <Typography variant='h4'>View Itinerary</Typography>
      <Button
        style={{ border: '2px solid', marginTop: "10px"}}
        variant='outlined'
        color='success'
        onClick={() => setUpvoted(true)}
      >
        Upvote
      </Button>
      <Button
        style={{marginLeft: '20px', border: '2px solid', marginTop: "10px"}}
        variant='outlined'
        onClick={() => setShareClicked(true)}
      >
        Share
      </Button>

      <Button
        style={{marginLeft: '20px', border: '2px solid', marginTop: "10px"}}
        variant='outlined'
        onClick={() => setShareClicked(true)}
      >
        Edit
      </Button>

      <Button
        style={{marginLeft: '20px', border: '2px solid', marginTop: "10px"}}
        variant='outlined'
        onClick={() => handleWeatherOpen()}
      >
        Weather
      </Button>

      <Button
        style={{marginLeft: '20px', border: '2px solid', marginTop: "10px"}}
        variant='outlined'
        color='error'
        onClick={() => handleOpen()}
      >
        Safety
      </Button>


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <iframe title="boscar" src="http://crimetool.bocsar.nsw.gov.au/bocsar/" height="600" width="600" />
        </Box>
      </Modal>

      <Modal
        open={openWeather}
        onClose={handleWeatherClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2}>

         <iframe title="weather" src="http://www.bom.gov.au/nsw/forecasts/sydney.shtml" height="600" width="675" />
        </Box>
      </Modal>

      {shareClicked && <Alert severity="info" style={{marginTop: "8px"}}>A shareable link has been copied to your clipboard.</Alert>}
      {upvoted && <Alert severity="success" style={{marginTop: "8px"}}>Itinerary upvoted!</Alert>}

      <div style={{
        margin: '20px',
        padding: '5px',
      }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AddProductCard product={product}/>
          </Grid>
        </Grid>
      </div>

      {/* Map all stops here. Each field should be editable. 
      Order: text input, image upload, and text input. */}
      <br />
      <Typography variant='h5'>Your stops</Typography>
      <br />
      <Grid container spacing={3}>
        {
          stopList.map((s, index) => {
            const product = {
              name: s.stopName,
              cover: s.image,
              price: s.duration
            };
            
            return <Grid item xs={12} sm={6} md={3}>
              <div style={{textAlign: 'center', paddingBottom: '5px'}}>
                Stop {index + 1}
              </div>
              <AddProductCard product={product}/>
            </Grid>;
          })
        }
      </Grid>
    </>
  )
}

export default ViewPage;
