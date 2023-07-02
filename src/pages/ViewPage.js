import { useState } from 'react';
import { Button, Typography, Grid, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {AddProductCard, EditableItinerary} from '../sections/@dashboard/products/ProductCard';


function ViewPage() {
  
    const stopList = [
      {
        stopName: "Opera House",
        image: "https://tse2.mm.bing.net/th?id=OIP.irCWc82XhAlRHxbNva-5PQHaEj&pid=Api",
        duration: "1 hour"
      },
      {
        stopName: "Royal Botanic Gardens",
        image: "https://tse1.mm.bing.net/th?id=OIP.29QYDUqHRhPgu6HLGQ0X_wHaE7&pid=Api",
        duration: "2 hours",
      },
    ]

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
  }

  const [shareClicked, setShareClicked] = useState(false);
  const [upvoted, setUpvoted] = useState(false);

  const product = {
    name: "Not just the Opera House",
    cover: "https://a.cdn-hotels.com/gdcs/production90/d515/39e765a9-77d3-40e7-bdaf-94f6731a5b27.jpg",
    price: "1 night",
    colors: [],
    status: "",
    priceSale: ""
  }


  return (
    <>
      <Typography variant='h4'>View Itinerary</Typography>
    
      <Button
        style={{border: '2px solid', marginTop: "10px"}}
        variant='outlined'
        onClick={() => setShareClicked(true)}
      >
        Share
      </Button>

      <Button
        style={{marginLeft: '20px', border: '2px solid', marginTop: "10px"}}
        variant='outlined'
        onClick={() => setUpvoted(true)}
      >
        Upvote
      </Button>

      {shareClicked && <Alert severity="info" style={{marginTop: "8px"}}>A shareable link has been copied to your clipboard.</Alert>}
      {upvoted && <Alert severity="success" style={{marginTop: "8px"}}>Itinerary upvoted!</Alert>}

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

      {/* Map all stops here. Each field should be editable. 
      Order: text input, image upload, and text input. */}
      <br />
      <br />
      <Grid container spacing={3}>
        {
          stopList.map((s, index) => {
            const product = {
              name: s.stopName,
              cover: s.image,
              price: s.duration
            };
            
            return <Grid item xs={12} sm={6} md={3}>
              <div style={{textAlign: 'center', paddingBottom: '5px'}}>
                Stop {index + 1}
              </div>
              <AddProductCard product={product}/>
            </Grid>;
          })
        }
      </Grid>
    </>
  )
}

export default ViewPage;
