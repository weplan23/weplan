import { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';



const handleUpload = (val) => {
  // Send image URL? to database.
  console.log(`Image uploaded successfully! ${val}`);
}

// A hard coded list of stops for the itinerary.
const stopList = [
  {
    stopName: "Opera House",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Sydney_Australia._%2821339175489%29.jpg",
    length: "2 hours",
  },
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


  return (
    <>
      <Typography variant='h3'>Edit Itinerary</Typography>

      <div style={{
        backgroundColor: '#ddd',
        margin: '10px',
        padding: '5px',
      }}>
        <Typography variant='h5'>Details</Typography>

        {/* Inputs for title, location, and number of nights. */}
        Itinerary Title: 
        <input type="text" value="Hard code this!" onChange={e => setTitle(e.target.value)} />
        <br /> <br /> 
        Image URL:
        <input type="text" value="Hard code this!" onBlur={e => setItineraryImg(e.target.value)} />
        <br /> <br /> 
        Location: 
        <input type="text" value="Hard code this!" onChange={e => setLocation(e.target.value)} />
        <br /> <br /> 
        Duration: 
        <input type="number" value="-1" onChange={e => setDuration(e.target.value)} /> nights
      </div>

      {/* Add stop button. */}
      <br /> <br /> 
      <Typography variant='h5'>Your stops: </Typography>
      <Button 
        sx={{color: '#008800'}}
        style={{border: '2px solid'}}
        variant="outlined"
        onClick={addStop}>
        Add Stop
      </Button>


      {/* Map all stops here. Each field should be editable. 
      Order: text input, image upload, and text input. */}

      {
        stops.map((s, index) => {
          return (
            <div style={{
              // Styles for each stop.
              margin: '20px',
              padding: '10px',
              backgroundColor: '#ffffaa',
            }}>
              Stop {index + 1} name: 
              <input
                style={inputStyle}
                type="text" 
                value={s.stopName} 
                onChange={e => updateStopNameIndex(index, e.target.value)}
              />
              <br /><br /> 
              <img src={s.image} alt={`Stop ${index + 1}`}/>
              <br />
              Stop {index + 1} image URL: 
              <input
                style={inputStyle}
                type="text"
                value={s.image}
                onChange={e => updateStopImageIndex(index, e.target.value)}
              />
              <br /><br /> 
              Stop {index + 1} duration: 
              <input 
                style={inputStyle}
                type="text"
                value={s.duration}
                onChange={e => updateStopDurationIndex(index, e.target.value)}
              />
            </div>
          )
        })
      }

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
  )
}

export default Editor;
