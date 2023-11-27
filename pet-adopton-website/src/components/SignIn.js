// import React from 'react';
// import { Typography, TextField, Button, Container, Paper } from '@mui/material';
// import PetsIcon from '@mui/icons-material/EmojiNature';
// import { Link as RouterLink } from 'react-router-dom';

// const SignIn = () => {
//   const handleSignIn = () => {
//     // Handle SignIn logic here
//   };

//   return (
//     <div className="img">
//     <Container component="main" maxWidth="xs" >
//       <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//         <PetsIcon color="primary" style={{ fontSize: 80, marginBottom: 20 }} />
//         <Typography variant="h5" component="h1">
//           Registration
//         </Typography>
//         <TextField label="Full Name Please" fullWidth margin="normal" />
//         <TextField label="Email" fullWidth margin="normal" />
//         <TextField label="Password" type="password" fullWidth margin="normal" />
//         <Button variant="contained" color="primary" onClick={handleSignIn} style={{ marginTop: 20 }} sx={{ backgroundColor: '#FFA500' }} 
//               component={RouterLink} to="/h">
//           Register
//         </Button>
//       </Paper>
//     </Container>
//     </div>
//   );
// };

// export default SignIn;
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { Grid } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PetsIcon from '@mui/icons-material/Pets';
import { Link as RouterLink } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [defpassword, setDefpassword] = useState('');
  const [userid, setUserid] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const checkUser = async () => {
    try {
      const response = await axios.get('http://localhost:3002/user');
      console.log('Response:', response.data);

      const users = response.data;

      console.log('Users:', users);
      console.log('input:', { userid });

      if (users) {
        const user = users.find((user) => user.empId === userid);

        if (user) {
          console.log('useroutput:', { user });
          if (user.password === defpassword) {
            navigate('/main');
          } else {
            setErrorMessage('Invalid password');
          }
        } else {
          setErrorMessage('User does not exist');
        }
      } else {
        setErrorMessage('Error fetching user data');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('Error during login');
    }
  };
  return (
    <body className="bg1">
      <div>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '300px',
            margin: 'auto',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: '10px 20px 10px rgba(0, 0, 0, 0.1)',
            marginTop: '3vh',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
          }}
          noValidate
          autoComplete="off"
        >
          <PetsIcon
            sx={{
              fontSize: '50px',
              color: 'secondary.main',
            }}
          />
          <h2>SIGN IN</h2>
          <TextField
            required
            id="Emp_id"
            label="Employee Id"
            variant="outlined"
            sx={{
              marginBottom: '15px',
              width: '100%',
            }}
            onChange={(e) => setUserid(e.target.value)}
          />
          <TextField
            required
            id="Password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            fullWidth
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleTogglePasswordVisibility}
                    edge="end"
                    sx={{ color: 'text.primary' }}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              marginBottom: '20px',
              width: '100%',
            }}
            onChange={(e) => setDefpassword(e.target.value)}
          />

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot UserId?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/password" variant="body2">
                Forget Password?
              </Link>
            </Grid>
          </Grid>
          {errorMessage && (
            <p style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</p>
          )}
          <Button
            variant="contained"
            color="error"
            sx={{ marginTop: '15px',  color: 'secondary' }}
            type="button"
            onClick={checkUser}
            component={RouterLink} to="/h"
          >
            Sign in
          </Button>
        </Box>
      </div>
    </body>
  );
};

export default SignIn;
