import React from 'react';
import { Typography, TextField, Button, Container } from '@mui/material';
import PetsIcon from '@mui/icons-material/EmojiNature';
import { Link as RouterLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

  const theme = createTheme();

  const Registration = () => {
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        name: data.get('name'),
        email: data.get('email'),
        petPreference: data.get('petPreference'),
        acceptTerms: data.get('acceptTerms'),
      });
    };
  return (
    <div className="img">
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} style={{ color: 'rgb(231, 121, 17)' }}>
            <PetsIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Pet Adoption Registration
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Your Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  autoComplete="address"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  autoComplete="tel"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="password"
                  id="password"
                  label="Password"
                  name="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="profile-picture"
                  type="file"
                  name="profilePicture"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="date-of-birth"
                  label="Date of Birth"
                  type="date"
                  name="dateOfBirth"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  select
                  required
                  fullWidth
                  id="petPreference"
                  label="Preferred Pet"
                  name="petPreference"
                  SelectProps={{ native: true }}
                >
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="rabbit">Rabbit</option>
                  {/* Add more options as needed */}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox required value="acceptTerms" color="primary" />}
                  label={
                    <span>
                      I accept the{' '}
                      <Link component={RouterLink} to="/terms" target="_blank">
                        terms and conditions
                      </Link>
                    </span>
                  }
                  name="acceptTerms"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="secondary"
              component={RouterLink} to="/h"
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
            </Grid>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc28HNijCJGtkPwUgoQG5q8DHuSpLFeN7yNA&usqp=CAU" alt="Cat" style={{ width: '100px', marginRight: '10px' }} />
          <img  src="https://i.pinimg.com/originals/9a/94/0c/9a940ceec4b25bb152f47e21814ea913.jpg" alt="Bunny" style={{ width: '100px', marginRight:'30px' }} />
          <img  src="https://a-z-animals.com/media/2021/11/shutterstock_265616255.jpg" alt="Dog" style={{ width: '100px', marginRight:'30px' }} />
        </Box>
      </Container>
    </ThemeProvider>
    </div>
  );
};
export default Registration;