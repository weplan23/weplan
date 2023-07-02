import { useState } from 'react';
import { Button, Typography, Grid, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {AddProductCard, EditableItinerary} from '../sections/@dashboard/products/ProductCard';


function Editor() {
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

      <Typography variant='h5'>Itinerary Details</Typography>
      <br />

      {/* Input fields for itinerary details. */}
      <TextField id="outlined-basic" value="A day on the Southern Coast" label="Itinerary title" variant="outlined" onChange={e => setTitle(e.target.value)}/>
      <br /> <br /> 
      <TextField id="outlined-basic" value="1" label="Duration (nights)" variant="outlined" onChange={e => setDuration(e.target.value)}/>
      <br /> <br /> 
      <TextField id="outlined-basic" value="NSW" label="Location" variant="outlined" onChange={e => setLocation(e.target.value)}/>
      <br /><br />
      <TextField id="outlined-basic" value="https://www.nationalparks.nsw.gov.au/-/media/npws/images/regions/south-coast/south-coast-murramarang-01.jpg" label="Image URL" variant="outlined" onChange={e => setItineraryImg(e.target.value)}/>


      {/* Add stop button. */}
      <br /> <br />
      <Typography variant='h5'>Your stops</Typography>
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
                <div style={{textAlign: 'center', paddingBottom: '5px'}}>
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
