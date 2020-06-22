import React, { Component } from 'react';
import Navbar from '../Component/Navbar.js';
import Footer from '../Component/Footer.js';
import Body from '../Component/Body.js';

class Home extends Component {
    render() {
        return (

            <div>
              <Navbar/>
                <Body/>
          
                <Footer />
            </div>
        );
    }

}
export default Home;