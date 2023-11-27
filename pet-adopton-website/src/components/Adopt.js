import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, CardActions, Button, Grid, TextField } from '@mui/material';

const Adopt = () => {
  // Assume you have a list of pets
  const [pets] = useState([
    { id: 1, name: 'Buddy', type: 'Dog', age: 2, description: 'Friendly and playful dog.' },
    { id: 2, name: 'Whiskers', type: 'Cat', age: 1, description: 'Independent and adorable cat.' },
    // Add more pets as needed
  ]);

  // State to track the selected pet for adoption
  const [selectedPet, setSelectedPet] = useState(null);

  // Function to handle the adoption process
  const handleAdopt = () => {
    // Implement your adoption logic here
    if (selectedPet) {
      alert(`Congratulations! You've adopted ${selectedPet.name} the ${selectedPet.type}.`);
      // You may want to update your backend or state to reflect the adoption
    } else {
      alert('Please select a pet before adopting.');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Adopt a Pet
      </Typography>
      <Grid container spacing={2}>
        {pets.map((pet) => (
          <Grid item key={pet.id} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  {pet.name} - {pet.type}
                </Typography>
                <Typography color="text.secondary" gutterBottom>
                  Age: {pet.age} years
                </Typography>
                <Typography variant="body2" paragraph>
                  {pet.description}
                </Typography>
                <TextField
                  fullWidth
                  label="Your Name"
                  variant="outlined"
                  onChange={(e) => setSelectedPet({ ...pet, adopterName: e.target.value })}
                  margin="dense"
                />
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={handleAdopt}
                  disabled={!selectedPet || selectedPet.adopterName === undefined}
                >
                  Adopt {pet.name}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Adopt;