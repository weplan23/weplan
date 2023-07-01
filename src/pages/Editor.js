import { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const handleUpload = (val) => {
  // Send image URL? to database.
  console.log(`Image uploaded successfully! ${val}`);
}

// A hard coded list of stops for the itinerary.
const stopList = [
  {
    name: "Opera House",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Sydney_Australia._%2821339175489%29.jpg",
    length: "2 hours",
  },
  {
    // Add more stops here.
  }
]

function Editor() {
  // Change these to hard coded values.
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [duration, setDuration] = useState(0);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
  }

  return (
    <>
      <h1>Create Itinerary</h1> { /* TODO: Change this later! */ }

      {/* File upload for image. */}
      New itinerary image: <input 
        type="file" 
        accept="image/jpeg, image/png, image/jpg" 
        onChange={e => handleUpload(e.target.value)}
      />
      <br /> <br /> 

      {/* Inputs for title, location, and number of nights. */}
      Itinerary Title: <input type="text" value="Hard code this!" onChange={e => setTitle(e.target.value)} />
      <br /> <br /> 
      Location: <input type="text" value="Hard code this!" onChange={e => setLocation(e.target.value)} />
      <br /> <br /> 
      Duration: <input type="number" value="-1" onChange={e => setDuration(e.target.value)} /> nights

      {/* Save button. */}
      <br /> <br /> 
      <Button 
        variant="contained"
        color="primary"
        onClick={handleClick}>
        Save
      </Button>
    </>
  )
}

export default Editor;
