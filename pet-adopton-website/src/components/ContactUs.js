import React from 'react';
import { Container, Typography, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const ContactUs = () => {
  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3} style={{ padding: 20 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <Typography paragraph>
          Thank you for choosing our pet adoption platform. If you have any questions, concerns, or feedback, please feel free to reach out to us. Your satisfaction is our priority, and we are here to assist you in any way we can.
        </Typography>
        <Typography variant="subtitle1" paragraph>
          "The greatness of a nation and its moral progress can be judged by the way its animals are treated." - Mahatma Gandhi
        </Typography>
        <Typography paragraph>
          Please use the following table to contact us through email:
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Customer Support</TableCell>
                <TableCell>support@petadoptionplatform.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>General Inquiries</TableCell>
                <TableCell>info@petadoptionplatform.com</TableCell>
              </TableRow>
              {/* Add more contacts as needed */}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default ContactUs;
