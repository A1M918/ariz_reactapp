import React from 'react';
import { MDBBtn } from "mdbreact";
import { Link } from 'react-router-dom';



export default (Navbar) => {
    return( 
      <div>
<div>
<nav class="navbar navbar-expand-md navbar-dark scrolling-navbar">
   
         
        <Link class="navbar-brand" to="#"><strong>Navbar</strong></Link>
    
            <ul className="navbar-nav ml-auto">
                <li class="nav-item active">
                    <Link class="nav-link" to="#..//Pages/Home.js">Home <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="#..//Pages/About.js">About</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="#..//Pages/Profile.js">Profile</Link>
                </li>
            </ul>
           
        </nav>
  <div style={{top:"-150px", zIndex:"-1"}}
 id="carousel-example-2" class="carousel slide carousel-fade" data-ride="carousel" >

    <ol class="carousel-indicators">
      <li data-target="#carousel-example-2" data-slide-to="0" class="active"></li>
      <li data-target="#carousel-example-2" data-slide-to="1"></li>
      <li data-target="#carousel-example-2" data-slide-to="2"></li>
    </ol>
   
    <div class="carousel-inner" role="listbox">
      
      <div class="carousel-item active">
       <div class="view">
          <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"
           alt="Navbar"/>
        </div>
       
      </div>
      <div class="carousel-item">
        <div class="view">
          <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
           alt="Navbar"/>
          <div class="mask rgba-black-strong"></div>
        </div>
       
      </div>
      <div class="carousel-item">

        <div class="view">
          <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
           alt="Navbar"/>
          <div class="mask rgba-black-slight"></div>
        </div>
        
      </div>
    </div>
    
    <Link class="carousel-control-prev" to="#carousel-example-2" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </Link>
    <Link class="carousel-control-next" to="#carousel-example-2" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </Link>
    
    <div class="carousel-caption d-none d-md-block">
         <h5>Our Product</h5>
         <p>It's all about what you want</p>
         <MDBBtn rounded outline color="light active">Custom</MDBBtn>
        
     </div>
  
  </div>
 </div></div>
  
    );
}