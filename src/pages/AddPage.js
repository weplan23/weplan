import React, { useState } from 'react'
import { Button, Typography } from '@mui/material'
// import { backendCall } from '../helpers'
import { useNavigate } from 'react-router-dom';

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
    navigate('/edit/0');
  }

  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [duration, setDuration] = useState(0);
  
  // console.log(`Title: ${title}`);
  // console.log(`Location: ${location}`);
  // console.log(`Duration: ${duration}`);

  return (
    <>
      <Typography variant='h3'>Create Itinerary</Typography>

      {/* File upload for image. */}
      Itinerary image: <input 
        type="file" 
        accept="image/jpeg, image/png, image/jpg" 
        onChange={e => handleUpload(e.target.value)}
      />
      <br /> <br /> 

      {/* Inputs for title, location, and number of nights. */}
      Itinerary Title: <input type="text" onChange={e => setTitle(e.target.value)} />
      <br /> <br /> 
      Location: <input type="text" onChange={e => setLocation(e.target.value)} />
      <br /> <br /> 
      Duration: <input type="number" onChange={e => setDuration(e.target.value)} /> nights

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
