import React from 'react';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';
import Registration from './components/Registration';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import DonationForm from './components/DonationForm';
import  Start  from './components/Start';
import Admin from './components/Admin';
import AboutUs from './components/AboutUs';
import CountryBreeds from './components/CountryBreeds';
import ForeignBreeds from './components/ForeignBreeds';
import Settings  from './components/Settings';
import Adopt from './components/Adopt';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start/>}/>
          <Route path="/st" element={<Start/>}/>
          <Route path="/h"element={<Home/>}/>
          <Route path="/login"element={<SignUp/>}/>
          <Route path="/s"element={<SignIn/>}/>
          <Route path="/r"element={<Registration/>}/>
          <Route path="/d"element={<DonationForm/>}/>
          <Route path="/a"element={<Admin/>}/>
          <Route path="/au"element={<AboutUs/>}/>
          <Route path="/cb"element={<CountryBreeds/>}/>
          <Route path="/fb"element={<ForeignBreeds/>}/>
          <Route path="/se"element={<Settings/>}/>
          <Route path="/ap"element={<Adopt/>}/>
          <Route path="/cu"element={<ContactUs/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
