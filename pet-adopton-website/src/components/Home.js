import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import AppNavBar from './AppNavBar';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  const footerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '5px',
  };
  
  const sectionStyle = {
    flex: 1,
    textAlign: 'center',
  };
  
  const headingStyle = {
    marginBottom: '10px',
  };
  
  const linkStyle = {
    display: 'block',
    marginBottom: '5px',
    color: '#333',
    textDecoration: 'none',
  };
  return (
    <footer style={footerStyle} className='img'>
      <div style={sectionStyle}>
        <h4 style={headingStyle}>Online Shopping</h4>
        <Link to="/terms-and-conditions" style={linkStyle}>Dogs</Link>
        <Link to="/privacy-policy" style={linkStyle}>Cats</Link>
        <Link to="/customer-support-policy" style={linkStyle}>Pets</Link>
        <Link to="/customer-support-policy" style={linkStyle}>Pet Pharmacy</Link>
      </div>
      <div style={sectionStyle}>
        <h4 style={headingStyle}>Policy Info</h4>
        <Link to="/terms-and-conditions" style={linkStyle}>Terms & Conditions</Link>
        <Link to="/privacy-policy" style={linkStyle}>Privacy Policy</Link>
        <Link to="/customer-support-policy" style={linkStyle}>Customer Policy</Link>
      </div>
      <div style={sectionStyle}>
        <h4 style={headingStyle}>Explore</h4>
        <Link to="/terms-and-conditions" style={linkStyle}>Our story</Link>
        <Link to="/privacy-policy" style={linkStyle}>FAQs</Link>
        <Link to="/customer-support-policy" style={linkStyle}>Blog</Link>
        <Link to="/customer-support-policy" style={linkStyle}>Contact Us</Link>
      </div>
      <div style={sectionStyle}>
        <h4 style={headingStyle}>Quick Links</h4>
        <Link to="/terms-and-conditions" style={linkStyle}>My Account</Link>
        <Link to="/privacy-policy" style={linkStyle}>Track Ypur Order</Link>
        <Link to="/customer-support-policy" style={linkStyle}>Refund policy</Link>
        <Link to="/customer-support-policy" style={linkStyle}>Return policy</Link>
        <Link to="/customer-support-policy" style={linkStyle}>Refer and Save</Link>
      </div>
      <div style={sectionStyle}>
        <h4 style={headingStyle}>Follow Us </h4>
        <GitHubIcon/>&nbsp;
        <InstagramIcon/>&nbsp;
        <FacebookIcon/>&nbsp;
        <TwitterIcon/>&nbsp;
        <LinkedInIcon/>&nbsp;
      </div>
      <div>
        <h4>EVERY DONATION HELPS</h4>
          <Button variant="contained" color="primary" style={{ backgroundColor: 'black' }}
           component={RouterLink} to="/d">Donate</Button><br/>
         <p style={{textAlign:"center"}}>© 2023 Pet Adoption Platform. All rights reserved.</p>
      </div> 
    </footer>
  );
};

const Home = () => {
  const images = [
    {
      url: 'https://i0.wp.com/www.onegreenplanet.org/wp-content/uploads/2023/02/shutterstock_159549530-scaled-e1675290587774.jpg?fit=1600%2C1067&ssl=1',
      title: 'Kitty',
      width: '30%',
    },
    {
      url: 'https://img.freepik.com/premium-photo/adorable-mother-with-four-baby-rabbits-isolated_63313-1475.jpg',
      title: 'Bunny',
      width: '40%',
    },
    {
      url: 'https://img.freepik.com/premium-photo/groups-dog-worldanimalday_991959-38.jpg?size=338&ext=jpg&ga=GA1.1.1518270500.1698624000&semt=ais',
      title: 'Puppy',
      width: '30%',
    },
  ];
  
  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 300,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));
  
  const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  });
  
  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }));
  
  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  }));
  
  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }));
  const image = [
    {
      url: 'https://png.pngtree.com/png-vector/20191022/ourmid/pngtree-element-hand-painted-pet-supplies-set-png-image_1824133.jpg',
      title: 'Pet Supplies',
      width: '34%',
    },
    {
      url: 'https://t.pimg.jp/070/324/378/1/70324378.jpg',
      title: 'Pet Health Care',
      width: '33%',
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAbLxzG0tm20GSju9HFXv01LB9Y-9aXmRGUA&usqp=CAU',
      title: 'Pet Grooming',
      width: '33%',
    },
  ];
  
  const Imagebutton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));
  
  const Imagesrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  });
  
  const ImageP = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }));
  
  const Imagebackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  }));
  
  const Imagemarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }));
  return (
    <div>
      <AppNavBar/><br/>
      <Typography variant="h4">Welcome to Pet Adoption Platform</Typography>
      <Typography variant="body1" textAlign="center" gutterBottom>
        Finding your new furry friend has never been easier. Explore our diverse range of pets available for adoption.        
      </Typography>
      <Typography variant="body1" textAlign="center" paragraph>
        At Pet Adoption Platform, we believe in connecting people with their perfect pets. Whether you're looking for a loyal companion or a playful friend, our platform offers a variety of options for you to explore and find the ideal match.
      </Typography>
      <blockquote>
        <Typography variant="body1" textAlign="center" fontStyle="italic">
          "The greatness of a nation and its moral progress can be judged by the way its animals are treated." - Mahatma Gandhi
        </Typography>
      </blockquote>
      <br />
      <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
    <br/>
      <Typography variant="h4" textAlign="center" gutterBottom >
      Discover Different Pet Breeds
      </Typography>
      <Typography variant="body1" textAlign="center" gutterBottom>
        <b>Whether you prefer local breeds or exotic ones, we've got a wide selection of breeds waiting for you.</b>
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {/* Add category buttons here */}
        <Grid item>
          <Button variant="contained" color="primary" style={{ backgroundColor: 'black' }} component={RouterLink} to="/cb">
            Country Breeds
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" style={{ backgroundColor: 'black' }} component={RouterLink} to="/fb">
            Foriegn Breeds
          </Button>
        </Grid>
      </Grid>
      <br/>
      <Typography variant="h4" align="center" gutterBottom>
        Explore Other Pet Products
      </Typography>
      <Typography variant="body1" textAlign="center" gutterBottom>
        <b>Beyond adoption, we offer a range of products to keep your pets happy and healthy. Find everything you need.</b>
      </Typography>
        {/* Search Bar */}
      <TextField label="Search for products/Breeds/Toys/Supplies..." variant="filled" fullWidth margin="none" />
      <br/>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 150, width: '100%' }}>
      {image.map((image) => (
        <Imagebutton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <Imagesrc style={{ backgroundImage: `url(${image.url})` }} />
          <Imagebackdrop className="MuiImageBackdrop-root" />
          <ImageP>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <Imagemarked className="MuiImageMarked-root" />
            </Typography>
          </ImageP>
          </Imagebutton>
        ))}
      </Box>
      <br/>
      <Footer />
    </div>
  );
};

export default Home;