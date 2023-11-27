import React from 'react';
import Box from '@mui/material/Box';
import { Typography, Paper, Grid } from '@mui/material';

const AboutUs = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Paper style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="body1">
          Welcome to our Pet Adoption Platform! Our mission is to connect loving homes with
          adorable pets in need of adoption. We believe that every pet deserves a loving and
          caring home, and we work tirelessly to make that happen.
        </Typography>
        <br />
        <Typography variant="body1">
          Our platform provides a user-friendly interface for potential adopters to browse
          available pets, learn about the adoption process, and find resources for responsible
          pet ownership.
        </Typography>
        <br />
        <Typography variant="body1">
          At [Your Organization Name], we are passionate about making a positive impact on the
          lives of pets and the families that adopt them. Our dedicated team of animal lovers
          works together to ensure that every adoption is a success.
        </Typography>
      </Paper>

      <Typography variant="h5" gutterBottom>
        Our Team
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          {/* Team Member 1 */}
          <Paper style={{ padding: '20px', marginBottom: '20px' }}>
            <Typography variant="subtitle1">Aysha Siddiqua</Typography>
            <Typography variant="body2">Founder & CEO</Typography>
            {/* Add more details about the team member */}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          {/* Team Member 2 */}
          <Paper style={{ padding: '20px', marginBottom: '20px' }}>
            <Typography variant="subtitle1">Nasim Akhtar</Typography>
            <Typography variant="body2">Lead Adoption Specialist</Typography>
            {/* Add more details about the team member */}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          {/* Team Member 3 */}
          <Paper style={{ padding: '20px', marginBottom: '20px' }}>
            <Typography variant="subtitle1">Md Ammar</Typography>
            <Typography variant="body2">Community Outreach Coordinator</Typography>
            {/* Add more details about the team member */}
          </Paper>
        </Grid>
      </Grid>
      <div>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc28HNijCJGtkPwUgoQG5q8DHuSpLFeN7yNA&usqp=CAU" alt="Cat" style={{ width: '200px', marginRight: '10px' }} />
          <img  src="https://i.pinimg.com/736x/20/05/67/2005674a23e6b5b41ba52373bde6e271.jpg" alt="Cat" style={{ width: '200px', marginRight: '10px' }} />
          <img  src="https://i.pinimg.com/originals/9a/94/0c/9a940ceec4b25bb152f47e21814ea913.jpg" alt="Bunny" style={{ width: '200px', marginRight:'30px' }} />
          <img  src="https://st2.depositphotos.com/1241729/6942/i/450/depositphotos_69428331-stock-photo-gold-fish-in-a-fishbowl.jpg" alt="Fish" style={{ width: '200px', marginRight:'30px' }} />
          <img  src="https://a-z-animals.com/media/2021/11/shutterstock_265616255.jpg" alt="Dog" style={{ width: '200px', marginRight:'30px' }} />
        </Box>
      </div>
    </div>
  );
};

export default AboutUs;
