import { useState } from 'react';
import { Button, Typography, Grid, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {AddProductCard, EditableItinerary} from '../sections/@dashboard/products/ProductCard';
import PRODUCTS from '../_mock/products';

let product = {
  name: "A day on the Southern Coast",
  cover: "https://www.nationalparks.nsw.gov.au/-/media/npws/images/regions/south-coast/south-coast-murramarang-01.jpg",
  price: "1 night",
  colors: 0,
  status: "",
  priceSale: ""
}

export const handleProduct = (newProduct) => {
  product = newProduct;
}

function Editor() {
  // Change these to hard coded values.
  const [title, setTitle] = useState('');
  const [itineraryImg, setItineraryImg] = useState('');
  const [location, setLocation] = useState('');
  const [duration, setDuration] = useState(0);
  const [saveClicked, setSaveClicked] = useState(false);

  const [stops, setStops] = useState([]);

  const navigate = useNavigate();

  const handleClick = () => {
    setSaveClicked(true);
    PRODUCTS.push(product);
  }

  const addStop = () => {
    const oldList = [...stops];
    oldList.push({
      stopName: "New Stop",
      image: "null",
      duration: "0 hours",
    });
    setStops(oldList);
  }

  const updateStopNameIndex = (index, newName) => {
    const oldList = [...stops];
    oldList[index].stopName = newName;
    setStops(oldList);
  }

  const updateStopImageIndex = (index, newImg) => {
    const oldList = [...stops];
    oldList[index].image = newImg;
    setStops(oldList);
  }

  const updateStopDurationIndex = (index, newDuration) => {
    const oldList = [...stops];
    oldList[index].duration = newDuration;
    setStops(oldList);
  }

  // Style for input fields for each stop.
  const inputStyle = {
    marginLeft: '10px' 
  }

  console.log(stops);


  return (
    <>
      <Typography variant='h4'>Edit Itinerary</Typography>

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


      {/* Add stop button. */}
      <br /> <br />
      <Typography variant='h5'>Your stops</Typography>
      <Button 
        sx={{color: '#008800'}}
        style={{border: '2px solid', marginTop: "8px"}}
        variant="outlined"
        onClick={addStop}
        disabled={saveClicked}
        >
        
        Add stop
      </Button>


      {/* Map all stops here. Each field should be editable. 
      Order: text input, image upload, and text input. */}
      <br />
      <br />
      <Grid container spacing={3}>
      {
        !saveClicked && 
        stops.map((s, index) => {
          return (
            <>
            <Grid item xs={12} sm={6} md={3}>
            <div style={{textAlign: 'center', paddingBottom: '5px'}}>
                    Stop {index + 1}
                  </div>
            <EditableItinerary index={index} product={product} x={updateStopNameIndex} y={updateStopImageIndex} z={updateStopDurationIndex}/>
            </Grid>
            </>
          )
        })
      }
      {
        saveClicked && 
        stops.map((s, index) => {
          const product = {
    name: stops[index].stopName,
    cover: stops[index].image,
    price: stops[index].duration,
    colors: [],
    status: "",
    priceSale: ""
  }
  console.log(product)
          return (
            <>
            <Grid item xs={12} sm={6} md={3}>
            <AddProductCard product={product} />
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
        disabled={stops.length === 0 || saveClicked}
        onClick={handleClick}>
        Save
      </Button>
    </>
  )
}

export default Editor;
