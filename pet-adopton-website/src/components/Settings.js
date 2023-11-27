import React from 'react';
import { Container, Typography, Grid, Paper, Switch, Select, MenuItem, FormControl, InputLabel, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Settings = () => {
  // You can use state to manage user preferences
  const [darkMode, setDarkMode] = React.useState(false);
  const [notifications, setNotifications] = React.useState(true);
  const [language, setLanguage] = React.useState('en');

  // Theme toggle function
  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  // Notifications toggle function
  const handleNotificationsToggle = () => {
    setNotifications(!notifications);
  };

  // Language change function
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  // Define a custom theme based on dark mode preference
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Settings
        </Typography>
        <Grid container spacing={2}>
          {/* Dark Mode Toggle */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ padding: 2, display: 'flex', alignItems: 'center' }}>
              <IconButton onClick={handleThemeToggle}>
                <Brightness4Icon />
              </IconButton>
              <Typography variant="subtitle1">Dark Mode</Typography>
              <Switch checked={darkMode} onChange={handleThemeToggle} />
            </Paper>
          </Grid>

          {/* Notifications Toggle */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ padding: 2, display: 'flex', alignItems: 'center' }}>
              <IconButton>
                <NotificationsIcon />
              </IconButton>
              <Typography variant="subtitle1">Notifications</Typography>
              <Switch checked={notifications} onChange={handleNotificationsToggle} />
            </Paper>
          </Grid>

          {/* Language Selection */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ padding: 2, display: 'flex', alignItems: 'center' }}>
              <IconButton>
                <LanguageIcon />
              </IconButton>
              <FormControl fullWidth>
                <InputLabel id="language-label">Language</InputLabel>
                <Select
                  labelId="language-label"
                  id="language"
                  value={language}
                  onChange={handleLanguageChange}
                >
                  <MenuItem value="en">English</MenuItem>
                  <MenuItem value="es">Español</MenuItem>
                  <MenuItem value="fr">Français</MenuItem>
                </Select>
              </FormControl>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Settings;
