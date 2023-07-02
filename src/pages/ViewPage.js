import { useState } from 'react';
import { Button, Typography, Grid } from '@mui/material';
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

  const product = {
    name: "Not just the Opera House",
    cover: "https://www.nationalparks.nsw.gov.au/-/media/npws/images/regions/south-coast/south-coast-murramarang-01.jpg",
    price: "1 night",
    colors: [],
    status: "",
    priceSale: ""
  }


  return (
    <>
      <Typography variant='h4'>View Itinerary</Typography>

      <Button
        style={{border: '2px solid'}}
        variant='outlined'
        onClick={() => alert("Link copied to clipboard!")}
      >
        Share
      </Button>

      <Button
        style={{marginLeft: '20px', border: '2px solid'}}
        variant='outlined'
        onClick={() => alert("Link copied to clipboard!")}
      >
        Upvote
      </Button>

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
          return (
            <>
              <Grid item xs={12} sm={6} md={3}>
                <EditableItinerary product={product}/>
              </Grid>
            </>
          )
        })
      }
      </Grid>
    </>
  )
}

export default ViewPage;
