import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Componenets/Navbar';
import Home from './Componenets/pages/Home'
import Services from './Componenets/pages/Services'
import ACV from './Componenets/pages/ACV'
import SignUp from './Componenets/pages/SignUp'
import Footer from './Componenets/Footer';
import Post from './Componenets/pages/Post';
import Project from './Componenets/pages/Project';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      
      <Switch>
        <Route path = '/' exact component = {Home}/>
        <Route path = '/project' exact component = {Project}/>
        <Route path = '/ACV' exact component = {ACV}/>
        <Route path='/sign-up' component={() => { 
          window.location.href = 'https://www.youtube.com/channel/UCaqnSwav0t1NwhEUDniBgqg'; 
          return null;
      }}/>
       <Route path='/instagram' component={() => { 
          window.location.href = 'https://www.instagram.com/mrmeanor'; 
          return null;
      }}/>
       <Route path='/facebook' component={() => { 
          window.location.href = 'https://www.facebook.com/bharatbhushan.karhade'; 
          return null;
      }}/>
       <Route path='/twitter' component={() => { 
          window.location.href = 'https://www.twitter.com/bharatkarhade'; 
          return null;
      }}/>
        <Route path='/linkedin' component={() => { 
          window.location.href = 'https://www.linkedin.com/in/bharatbh'; 
          return null;
      }}/>
        <Route path = '/post' exact component = {Post}/>
        
      </Switch>
      <Footer/>
    </Router>
      
    </>
  );
}

export default App;
