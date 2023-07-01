

import React, { useState } from 'react'
import { Button } from '@mui/material'

const handleUpload = (val) => {
  // Send image URL? to database.
  console.log(`Image uploaded successfully! ${val}`);
}

const saveItinerary = () => {

  console.log(`Saving itinerary...`);
}


function AddPage () {
  // TODO: 
  // [ NOT STARTED ] Update sidebar contents.
  // [ PARTIAL     ] Add image upload.
  // [ PARTIAL     ] Add inputs for location (text) and number of nights (number).
  // [ COMPLETE    ] Add save button and onClick handler.
  // [ NOT STARTED ] Add functionality to retrieve current stops.
  // [ NOT STARTED ] Add button to add a stop.
  // [ NOT STARTED ] Apply styles for header, inputs, button.
  

  const [duration, setDuration] = useState(0);
  const [location, setLocation] = useState('');
  
  console.log(`Location: ${location}`);
  console.log(`Duration: ${duration}`);

  return (
    <>
      <h1>Create Itinerary</h1> { /* TODO: Change this later! */ }

      Itinerary image: <input 
        type="file" 
        accept="image/jpeg, image/png, image/jpg" 
        onChange={e => handleUpload(e.target.value)} />
        <br /> <br /> 
      
      Location: <input type="text" onChange={e => setLocation(e.target.value)} />
      <br /> <br /> 
      Duration: <input type="number" onChange={e => setDuration(e.target.value)} /> days

      <br /> <br /> 
      <Button 
        variant="contained"
        disabled={duration > 0 && location !== ''}
        color="primary"
        onClick={saveItinerary}>
        Save
      </Button>
    </>
  );
}

export default AddPage;
