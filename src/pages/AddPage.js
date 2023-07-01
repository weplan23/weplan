import React, { useState } from 'react'
import { Button } from '@mui/material'
import { backendCall } from '../helpers'

const handleUpload = (val) => {
  // Send image URL? to database.
  console.log(`Image uploaded successfully! ${val}`);
}

const saveItinerary = (t, l, d) => {
  const req = {
    title: t,
    location: l,
    nights: d,
    stops: [],
    profileName: "John"
  }

  backendCall('/itinerary', 'POST', req);
  console.log(`Saving itinerary...`);
}


function AddPage () {
  // TODO: 
  // [ COMPLETE    ] Add image upload.
  // [ COMPLETE    ] Add inputs for location (text) and number of nights (number).
  // [ COMPLETE    ] Add save button and onClick handler.
  // [ NOT STARTED ] Apply styles for header, inputs, button. Right now they are invisible.
  // [ NOT STARTED ] Connect with the backend.
  // [ NOT STARTED ] Make save button navigate to editor page.


  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [duration, setDuration] = useState(0);
  
  console.log(`Title: ${title}`);
  console.log(`Location: ${location}`);
  console.log(`Duration: ${duration}`);

  return (
    <>
      <h1>Create Itinerary</h1> { /* TODO: Change this later! */ }

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
        variant="contained"
        disabled={duration <= 0 || location === ''}
        color="primary"
        onClick={saveItinerary}>
        Save
      </Button>
    </>
  );
}

export default AddPage;
