import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import {
  Divider,
} from '@mui/material';
import { styled, alpha , useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import PetsIcon from '@mui/icons-material/Pets';
import HowToAdoptIcon from '@mui/icons-material/HowToVote';
import FeaturedPetsIcon from '@mui/icons-material/Stars';
import { grey } from '@mui/material/colors';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

const drawerWidth = 180;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));
//-

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));



const AppNavBar = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
    <AppBar position="static" style={{ backgroundColor: 'black' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          
            <Search >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                sx={{ width: '20ch' }}
              />
            </Search>
          <Typography variant="h4" component="div" sx={{ flexGrow: 30 }} color={'black'}>
            Make your home happier and lovely with a pet 
          </Typography>
          <Button color="inherit" component={RouterLink} to="/login">Sign in</Button>
          <Button color="inherit" component={RouterLink} to="/r">Register</Button>
          <Button color="inherit" component={RouterLink} to="/d">Donate</Button>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: 'black',
            color: 'white',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} style={{ backgroundColor: 'white' }}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <List>
        <ListItem button component={RouterLink} to="/cb">
          <ListItemIcon>
            <PetsIcon sx={{ color: grey[500]}}/>
          </ListItemIcon>
          <ListItemText primary="Available Pets" />
        </ListItem>
        <ListItem button component={RouterLink} to="/ap">
          <ListItemIcon>
            <HowToAdoptIcon sx={{ color: grey[500]}}/>
          </ListItemIcon>
          <ListItemText primary="How to Adopt" />
        </ListItem>
        <ListItem button component={RouterLink} to="/fb">
          <ListItemIcon>
            <FeaturedPetsIcon sx={{ color: grey[500]}}/>
          </ListItemIcon>
          <ListItemText primary="Featured Pets" />
        </ListItem>
        <ListItem button component={RouterLink} to="/au">
          <ListItemIcon>
            <InfoIcon sx={{ color: grey[500]}}/>
          </ListItemIcon>
          <ListItemText primary="About Us" />
        </ListItem>
        <ListItem button component={RouterLink} to="/se">
          <ListItemIcon>
            <SettingsIcon sx={{ color: grey[500]}}/>
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button component={RouterLink} to="/cu">
          <ListItemIcon>
            <ConnectWithoutContactIcon sx={{ color: grey[500]}}/>
          </ListItemIcon>
          <ListItemText primary="Contact Us" />
        </ListItem>
      </List>
      <Divider />
      </Drawer>
      <Main open={open}/>
        <DrawerHeader />        
      </Toolbar>
    </AppBar>
    </Box>
  );
};

export default AppNavBar;