import React from 'react';
import { Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';

const countryBreedsData = [
    {
      name: 'kris',
      country: 'Tamil Nadu',
      description: 'Bold, Independent, Confident, Intelligent, Courageous',
      image: 'https://www.pawpurrfect.co/wp-content/uploads/2022/05/Spotted-Cat.jpg', // Replace with actual image URL
    },
  {
    name: 'Toy',
    country: 'Karnataka',
    description: 'Alert, Active, Attentive, Charming, Keen, Courageous',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLAdGd4yy4iswaPNDYcPtf0T7kHjo5waLIfw&usqp=CAU', // Replace with actual image URL
  },
  {
    name: 'enpins',
    country: 'Delhi',
    description: 'Outgoing, Energetic, Playful, Sensitive, Intelligent, Active',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlpPd5s_N1bG45hNofC2zApIbgGJsvuy0-an9XY16nIhsUFwCOBJhhnX7o_Dzs7g7DoZc&usqp=CAU', // Replace with actual image URL
  },
  {
    name: 'Afgan',
    country: 'Gujrat',
    description: 'Aloof, Clownish, Dignified, Independent',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgPa7gMD5i71wXN9QArJH7vWJHnymWjPFKBpYfMOI3_EZWmjVCa5q8gXci7AwBozRIV0c&usqp=CAU', // Replace with actual image URL
  },
  {
    name: 'Ami',
    country: 'Bihar',
    description: 'Wild, Hardworking, Dutiful',
    image: 'https://images.saymedia-content.com/.image/t_share/MTk1NTM1MzEzOTMyOTE5ODU5/indian-desi-or-indian-pariah-dog-breed-information-facts-and-characteristics.png', 
  },
  {
    name: 'Terrier',
    country: 'UP',
    description: 'Outgoing, Friendly, Alert, Confident, Intelligent, Courageous',
    image: 'https://www.shutterstock.com/image-photo/sokoke-cat-lying-on-rocks-260nw-2013896003.jpg', 
  },
  {
    name: 'Shepherd',
    country: 'Kerala',
    description: 'Loyal, Independent, Intelligent, Brave',
    image: 'https://i.pinimg.com/736x/61/b1/96/61b19634bab391e4520c8b778e21e361.jpg', 
  },
  {
    name: 'Alapaha',
    country: 'Assam',
    description: 'Docile, Alert, Responsive, Dignified, Composed, Friendly, Receptive, Faithful, Courageous',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2LKv0f0YIPJY1DS4HTURO8yZwg78RJlOhRfZTHXjnK6NS_uJZw25Yr64wJxwHbKvpnU0&usqp=CAU', 
  },
  {
    name: 'Tibetan',
    country: 'AP',
    description: 'Loving, Protective, Trainable, Dutiful, Responsible',
    image: 'https://thewire.in/wp-content/uploads/2017/04/puppy-flickr.jpg', 
  },
  {
    name: 'Springer',
    country: 'Megalaya',
    description: 'Friendly, Energetic, Loyal, Gentle, Confident',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRweu6IMeZGzIQbpcrSRlA9fkndwtOI6FjFuB3GvChWkzQvmKZv4_58Pqo3jv0O7_6-rTo&usqp=CAU', 
  },
  {
    name: 'Pudding',
    country: 'J&K',
    description: 'Friendly, Assertive, Energetic, Loyal, Gentle, Confident, Dominant',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDhKNkv1IMTXcDpPe7wrRA74Sj16ZbflNllg&usqp=CAU', 
  },
  {
    name: 'Blue',
    country: 'Rajasthan',
    description: 'Strong Willed, Stubborn, Friendly, Clownish, Affectionate, Loyal, Obedient, Intelligent, Courageous',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQIBaKdKHTbz_C9A-j8xMe-m7HDOOCGbl4WA&usqp=CAU', 
  },
];

const CountryBreeds = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Country Breeds
      </Typography>
      <Grid container spacing={2}>
        {countryBreedsData.map((breed, index) => (
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

export default CountryBreeds;
