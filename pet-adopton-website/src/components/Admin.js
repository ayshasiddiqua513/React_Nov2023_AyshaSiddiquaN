import React from 'react';
import  AppBar  from './AppBar';

function Admin(){
    const containerStyle = {
        backgroundImage: `url(https://themeforest.img.customer.envatousercontent.com/files/243510858/woof_prev.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=ef7a2158794c2d9a2d21bc082a53cabc)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      };
    return (
        <div>
            <div>
            <AppBar/>
            </div>
            <div style={containerStyle}>
                {/* <Button component={RouterLink} to="/a">Home</Button> */}
            </div>
        </div>
    )
}
export default Admin;