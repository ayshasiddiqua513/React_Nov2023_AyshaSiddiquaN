import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Link as RouterLink } from 'react-router-dom';
function Start(){
    return (
        <div className='start'>
            <div className='grid' >
                <Grid >
                    <h1>Welcome Your Furry Bestie!</h1>
                    <Button variant="contained" 
                        color="primary" 
                        style={{ backgroundColor: 'black' }}
                        component={RouterLink} to="/h">
                        START
                    </Button>
                </Grid>
            </div>
        </div>
    )
}
export default Start;