import React, { useState } from 'react'
import { Button, Typography,  Box, TextField, InputAdornment } from '@mui/material';
// import { backendCall } from '../helpers'
import { useNavigate } from 'react-router-dom';
import {AddProductCard} from '../sections/@dashboard/products/ProductCard';
import { handleProduct } from './Editor';
import { handleItineraries } from './ProductsPage';

const handleUpload = (val) => {
  // Send image URL? to database.
  console.log(`Image uploaded successfully! ${val}`);
}


function AddPage () {
  const navigate = useNavigate();

  const handleClick = () => {
    handleProduct({
        name: title,
        cover: itineraryImg,
        price: `${duration} nights`,
        colors: 0,
        status: "",
        priceSale: ""
      });
      handleItineraries({
        name: title,
        cover: itineraryImg,
        price: `${duration} nights`,
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
    <div style={{
      paddingLeft: '20px'
    }}>
      <Typography variant='h4'>Create Itinerary</Typography>
      <br />

      {/* Inputs for title, location, and number of nights. */}
      <TextField id="outlined-basic" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <p>✏️</p>
            </InputAdornment>
          ),
        }} label="Itinerary title" variant="outlined" onChange={e => setTitle(e.target.value)}/>
      <br /> <br /> 
      <TextField id="outlined-basic" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <p>🌙</p>
            </InputAdornment>
          ),
        }}  label="Duration (nights)" variant="outlined" onChange={e => setDuration(e.target.value)}/>
      <br /> <br /> 
      <TextField id="outlined-basic"  InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <p>📍</p>
            </InputAdornment>
          ),
        }}  label="Location" variant="outlined" onChange={e => setLocation(e.target.value)}/>
      <br /><br />
      <TextField id="outlined-basic" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <p>🔗</p>
            </InputAdornment>
          ),
        }} label="Image URL" variant="outlined" onChange={e => setItineraryImg(e.target.value)}/>

      {/* Save button. */}
      <br /> <br /> 
      <Button 
        sx={{color: '#008800'}}
        style={{border: '2px solid'}}
        variant="outlined"
        disabled={title === '' || duration < 0 || location === ''}
        onClick={handleClick}>
        Save
      </Button>
    </div>
  );
}

export default AddPage;
