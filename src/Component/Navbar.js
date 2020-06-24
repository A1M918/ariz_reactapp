import React from 'react';
import Menu from './Menu';

export default (Navbar) => {
  return (

    <div>
      <Menu />

      <div style={{ top: "-150px", zIndex: "-1" }} id="slider2" class="carousel slide carousel-fade" >
     
     
      <div class="carousel-inner" role="listbox">
        <ol class="carousel-indicators">
          <li data-target="#slider2" data-slide-to="0" class="active"></li>
          <li data-target="#slider2" data-slide-to="1"></li>
          <li data-target="#slider2" data-slide-to="2"></li>
        </ol>

          <div class="carousel-item active">
            <div class="view">
              <img class=" w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"
                alt="Navbar" />
            </div>
          </div>

          <div class="carousel-item">
            <div class="view">
              <img class=" w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                alt="Navbar" />
              <div class="mask rgba-black-strong"></div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="view">
              <img class=" w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                alt="Navbar" />
              <div class="mask rgba-black-slight"></div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
}