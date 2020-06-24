import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router';
import Home from './Pages/Home.js';
import Profile from './Pages/Profile.js';
import About from './Pages/About.js';


function App()
  {
    return (
      
     
      <Router>
         
      
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Profile"  component={Profile} />
        

      </Router>
      
    );
  }



export default App;
