import React, { useState } from 'react'
import { Button, Typography,  Box, TextField } from '@mui/material'
// import { backendCall } from '../helpers'
import { useNavigate } from 'react-router-dom';
import {AddProductCard} from '../sections/@dashboard/products/ProductCard';
import { handleProduct } from './Editor';

const handleUpload = (val) => {
  // Send image URL? to database.
  console.log(`Image uploaded successfully! ${val}`);
}


function AddPage () {
  // TODO: 
  // [ COMPLETE    ] Add image upload.
  // [ COMPLETE    ] Add inputs for location (text) and number of nights (number).
  // [ COMPLETE    ] Add save button and onClick handler.
  // [ NOT STARTED ] Apply styles for header, inputs, button. Right now they are invisible.
  // [ COMPLETE    ] Make save button navigate to editor page.
  const navigate = useNavigate();

  const handleClick = () => {
    handleProduct({
        name: title,
        cover: itineraryImg,
        price: duration,
        colors: 0,
        status: "",
        priceSale: ""
      });
    navigate('/edit/0');
  }

  const [title, setTitle] = useState('');
  const [itineraryImg, setItineraryImg] = useState('');
  const [location, setLocation] = useState('');
  const [duration, setDuration] = useState(0);
  
  // console.log(`Title: ${title}`);
  // console.log(`Location: ${location}`);
  // consoctle.log(`Duration: ${duration}`);
  return (
    <>
      <Typography variant='h3'>Create Itinerary</Typography>
      <br />

      {/* Inputs for title, location, and number of nights. */}
      <TextField id="outlined-basic" label="Itinerary title" variant="outlined" onChange={e => setTitle(e.target.value)}/>
      <br /> <br /> 
      <TextField id="outlined-basic" label="Duration" variant="outlined" onChange={e => setLocation(e.target.value)}/>
      <br /> <br /> 
      <TextField id="outlined-basic" label="Location" variant="outlined" onChange={e => setDuration(e.target.value)}/>
      <br /><br />
      <TextField id="outlined-basic" label="Image" variant="outlined" onChange={e => setItineraryImg(e.target.value)}/>

      {/* Save button. */}
      <br /> <br /> 
      <Button 
        sx={{color: '#008800'}}
        style={{border: '2px solid'}}
        variant="outlined"
        disabled={title === '' || duration <= 0 || location === ''}
        onClick={handleClick}>
        Save
      </Button>
    </>
  );
}

export default AddPage;
