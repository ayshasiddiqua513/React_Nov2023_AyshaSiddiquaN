import React from 'react';
import { Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';

const foreignBreedsData = [
    {
      name: 'Dalmatian',
      country: 'Croatia',
      description: 'Outgoing, Energetic, Playful, Sensitive, Intelligent, Active',
      image: 'https://placekitten.com/300/201', // Replace with actual image URL
    },
  {
    name: 'Shiba Inu',
    country: 'Japan',
    description: 'Alert, Active, Attentive, Charming, Keen, Courageous',
    image: 'https://img.freepik.com/premium-photo/adorable-mother-with-four-baby-rabbits-isolated_63313-1475.jpg', // Replace with actual image URL
  },
  {
    name: 'Affenpinscher',
    country: 'Germany',
    description: 'Outgoing, Energetic, Playful, Sensitive, Intelligent, Active',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwQPlFPigS3SVGfFjtm5-ng4RCryHDE9WRljQkba3JDU0k5VbmgaUsZe3QBhDZ-lGZux8&usqp=CAU', // Replace with actual image URL
  },
  {
    name: 'Afgan Hound',
    country: 'Afganistan',
    description: 'Aloof, Clownish, Dignified, Independent',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNlEUhqh8xnqqzVfY75Fc4uhuiOEY687iOvlhPVfiLHHRtVF1dytlkxvECr0m6MbBCEFY&usqp=CAU', // Replace with actual image URL
  },
  {
    name: 'Ami',
    country: 'Africa',
    description: 'Wild, Hardworking, Dutiful',
    image: 'https://cdn2.thedogapi.com/images/rkiByec47.jpg', 
  },
  {
    name: 'Airedale Terrier',
    country: 'England',
    description: 'Outgoing, Friendly, Alert, Confident, Intelligent, Courageous',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeGOQFxJZG8eHR7Qn9KfgWXKQ8mnLk4QR-NkCkHcpqDSVThmTsbNUeDxxbqpeyEXH66VI&usqp=CAU', 
  },
  {
    name: 'Akbash',
    country: 'Antartica',
    description: 'Loyal, Independent, Intelligent, Brave',
    image: 'https://cdn2.thedogapi.com/images/26pHT3Qk7.jpg', 
  },
  {
    name: 'Alapaha',
    country: 'Africa',
    description: 'Docile, Alert, Responsive, Dignified, Composed, Friendly, Receptive, Faithful, Courageous',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2LKv0f0YIPJY1DS4HTURO8yZwg78RJlOhRfZTHXjnK6NS_uJZw25Yr64wJxwHbKvpnU0&usqp=CAU', 
  },
  {
    name: 'Akita',
    country: 'England',
    description: 'Loving, Protective, Trainable, Dutiful, Responsible',
    image: 'https://cdn2.thecatapi.com/images/13MkvUreZ.jpg', 
  },
  {
    name: 'Alaskan',
    country: 'America',
    description: 'Friendly, Energetic, Loyal, Gentle, Confident',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRweu6IMeZGzIQbpcrSRlA9fkndwtOI6FjFuB3GvChWkzQvmKZv4_58Pqo3jv0O7_6-rTo&usqp=CAU', 
  },
  {
    name: 'Pudding',
    country: 'USA',
    description: 'Friendly, Assertive, Energetic, Loyal, Gentle, Confident, Dominant',
    image: 'https://cdn2.thedogapi.com/images/pk1AAdloG.jpg', 
  },
  {
    name: 'Blue',
    country: 'Persian',
    description: 'Strong Willed, Stubborn, Friendly, Clownish, Affectionate, Loyal, Obedient, Intelligent, Courageous',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS93KDM-ATn6zcvsEVZ6geASeA0Htl6txWyl68sf1vWjAZryY-QeolrtZAdanJKQTepV4c&usqp=CAU', 
  },
];

const ForeignBreeds = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Foreign Breeds
      </Typography>
      <Grid container spacing={2}>
        {foreignBreedsData.map((breed, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={breed.image}
                alt={breed.name}
              />
              <CardContent>
                <Typography variant="h6">{breed.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {breed.country}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {breed.description}
                </Typography>
                <PetsIcon color="primary" />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ForeignBreeds;
