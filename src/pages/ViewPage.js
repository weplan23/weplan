import { useState } from 'react';
import { Button, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {AddProductCard, EditableItinerary} from '../sections/@dashboard/products/ProductCard';


function ViewPage() {
  // Change these to hard coded values.
  const [title, setTitle] = useState('');
  const [itineraryImg, setItineraryImg] = useState('');
  const [location, setLocation] = useState('');
  const [duration, setDuration] = useState(0);

  const [stops, setStops] = useState([]);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
  }

  console.log(stops);

  const product = {
    name: "A day on the Southern Coast",
    cover: "https://www.nationalparks.nsw.gov.au/-/media/npws/images/regions/south-coast/south-coast-murramarang-01.jpg",
    price: "1 night",
    colors: [],
    status: "",
    priceSale: ""
  }


  return (
    <>
      <Typography variant='h3'>Edit Itinerary</Typography>

      <div style={{
        margin: '10px',
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
      <br />
      <Grid container spacing={3}>
      {
        stops.map((s, index) => {
          return (
            <>
              <Grid item xs={12} sm={6} md={3}>
                <EditableItinerary product={product}/>
              </Grid>
            </>
          )
        })
      }
      </Grid>

      {/* Save button. */}
      <br /> <br /> 
      <Button 
        sx={{color: '#008800'}}
        style={{border: '2px solid'}}
        variant="outlined"
        disabled={stops.length === 0}
        onClick={handleClick}>
        Save
      </Button>
    </>
  )
}

export default ViewPage;
