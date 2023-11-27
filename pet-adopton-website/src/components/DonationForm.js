import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import YardIcon from '@mui/icons-material/Yard';
import { orange } from '@mui/material/colors';
import SavingsIcon from '@mui/icons-material/Savings';
import LensBlurIcon from '@mui/icons-material/LensBlur';
import BugReportIcon from '@mui/icons-material/BugReport';

const DonationForm = () => {
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donationAmount, setDonationAmount] = useState('');
  const [donationMessage, setDonationMessage] = useState('');

  const handleDonorNameChange = (e) => {
    setDonorName(e.target.value);
  };

  const handleDonorEmailChange = (e) => {
    setDonorEmail(e.target.value);
  };

  const handleDonationAmountChange = (e) => {
    setDonationAmount(e.target.value);
  };

  const handleDonationMessageChange = (e) => {
    setDonationMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission, you can send the data to a server or perform any other actions.
    console.log('Donation Form Submitted:', { donorName, donorEmail, donationAmount, donationMessage });
    // Reset the form after submission
    setDonorName('');
    setDonorEmail('');
    setDonationAmount('');
    setDonationMessage('');
  };

  return (
    <div>
      <div>
        <Typography variant="h2"  style={{backgroundColor:"gainsboro"}}>
          DONATE
        </Typography>
      </div>
      <div style={{backgroundColor:"black", color:"white"}}>
        <br/>
        <br/>
        <YardIcon sx={{ color: orange[500], fontSize: 60,marginLeft: '-10px' }} />
        <Typography variant="h3" gutterBottom>
          Your Donation Can Save a Life Today!.
        </Typography>
        <Typography paragraph>
If you cannot provide a loving home at this time, please be a part of our effort to help us continue to save more lives by donating today.
        </Typography> 
        <br/>
        <br/>
      </div>
      <div style={{ marginLeft: '20px' }}>
        <table style={{ width: '100%' }}>
          <tr>
            <td style={{backgroundColor:"orange"}}>
              <SavingsIcon sx={{  fontSize: 60 ,textAlign: 'left'}}/>
              <Typography variant="h4" gutterBottom>
                DONATE TODAY
              </Typography>
      <form onSubmit={handleSubmit}>
      <label>
        Donor Name:&nbsp;
        <input type="text" value={donorName} onChange={handleDonorNameChange} required />
      </label>
      <br />
      <br />
      <label>
        Donor Email:&nbsp;
        <input type="email" value={donorEmail} onChange={handleDonorEmailChange} required />
      </label>
      <br />
      <br />
      <label>
        Donation Amount:&nbsp;
        <input type="number" value={donationAmount} onChange={handleDonationAmountChange} required />
      </label>
      <br />
      <br />
      <label>
        Donation Message:&nbsp;
        <input type="text" value={donationMessage} onChange={handleDonationMessageChange} required/>
      </label>
      <br />
      <br />
      <Button
        type="submit"
        variant="contained"
        style={{ backgroundColor: '#008000' }}
        endIcon={<SendIcon />}
        component={RouterLink} to="/h">Donate Now
      </Button>
      <br />
      <br />
    </form></td>
    <td style={{backgroundColor:"white",textAlign:'left'}}>
      <LensBlurIcon sx={{  fontSize: 60 }}/>
        <Typography variant="h4" gutterBottom>
          WAYS TO DONATE
        </Typography>
        <Typography >&nbsp;&nbsp;&nbsp;&nbsp;Remember, <b>Beautiful Togethe</b>r is a 501(c)(3)
        organization, so all monetary donations are tax deductible <br/>
        to the extent that the IRS allows. EIN: 47-4273597.
        </Typography> 
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <img  src="https://beautifultogethersanctuary.com/wp-content/uploads/2022/04/guidestar.png" alt="Bunny" style={{ width: '100px', marginRight:'80px' }} />
          <img  src="https://beautifultogethersanctuary.com/wp-content/uploads/2022/12/2022-top-rated-awards-badge-embed.png" alt="Dog" style={{ width: '100px', marginRight:'60px' }} />
        </Box>
        <Typography>
        62 million dogs are homeless in India, most lacking food, shelter, and medical care. Puppies like Jojo have a slim chance of survival when they are born – mostly like they will be dumped, poisoned, or run over by a car.
You can prevent the future suffering of unwanted litters by donating today. Just $30 or ₹2500 covers the cost of one sterilization – and today that amount is 100% matched by SPCA International. Give a gift today and save lives. 
        </Typography>
    </td>
          </tr>
        </table>
      </div>
      <div style={{backgroundColor:"gainsboro"}}>
        <BugReportIcon sx={{  fontSize: 65 }}/>
        <br/>
        <Typography variant='h4'>
        HOW YOUR DONATION HELPS OUR PETS
        </Typography>
        <br/>
        <Box sx={{ display:'flex', justifyContent: 'center'}}>
          <img  src="https://beautifultogethersanctuary.com/wp-content/uploads/2021/03/IMG_6622.jpg" alt="Cat" style={{ width: '400px', height:'300px', marginRight: '10px' }} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <br/>
          <img  src="https://beautifultogethersanctuary.com/wp-content/uploads/2021/03/IMG_0F55FFF5AF7D-1.jpg" alt="Cat" style={{ width: '400px', height:'500px', marginRight:'30px' }} />
        </Box>
        <Typography>
        Every rupee you donate helps us to feed, supply and care for the animals we are fostering, pay the fees required for pulling animals out of many rural shelters, and manage the often significant medical costs of animals in need of refuge.

In addition, as we begin the build out of the sanctuary, where we will support animals in need, support pets and people in crisis and provide services to our community in support of pets. This endeavor represents a significant amount of hope - and it will also require significant support.

<br/><b>We thank you for any and all!</b>
        </Typography>
      </div>
    </div>
  );
};

export default DonationForm;
