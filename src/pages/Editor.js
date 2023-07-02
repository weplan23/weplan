import { useState } from 'react';
import { Button, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {AddProductCard, EditableItinerary} from '../sections/@dashboard/products/ProductCard';


const handleUpload = (val) => {
  // Send image URL? to database.
  console.log(`Image uploaded successfully! ${val}`);
}

// A hard coded list of stops for the itinerary.
const stopList = [
  // {
  //   stopName: "Opera House",
  //   image: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Sydney_Australia._%2821339175489%29.jpg",
  //   length: "2 hours",
  // },
  // Add more stops here.
]

function Editor() {
  // Change these to hard coded values.
  const [title, setTitle] = useState('');
  const [itineraryImg, setItineraryImg] = useState('');
  const [location, setLocation] = useState('');
  const [duration, setDuration] = useState(0);

  const [stops, setStops] = useState(stopList);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
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

      {/* Add stop button. */}
      <br />
      <Typography variant='h4'>Your stops</Typography>
      <Button 
        sx={{color: '#008800'}}
        style={{border: '2px solid', marginTop: "8px"}}
        variant="outlined"
        onClick={addStop}>
        Add Stop
      </Button>


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
                <div style={{textAlign: 'center', margin: 'auto'}}>
                  Stop {index + 1}
                </div>
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

export default Editor;
