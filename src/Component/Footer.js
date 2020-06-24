import React from 'react';
import { MDBIcon } from "mdbreact";
import { Link } from 'react-router-dom';

export default (footer) => {
    return(
        
        <footer class="page-footer font-small purple mt-5">
         
      <div
      style={{backgroundImage: `url("https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg")`,backgroundRepeat: 'no-repeat',width:'100',height:'350px', color:'white',opacity:'10'
      }}>   
             <div className="container pt-5 mt-5 ">
          <h3><strong className="fab">Get In Touch</strong></h3>
             <p>
                 its all you want
             </p>
            <h4><i class="fab fa-periscope"> Find Us</i></h4> 
            <p> <Link>location</Link></p>

            <h4><MDBIcon icon="mobile-alt" /> Contact Us</h4>

             </div>
             <div class="content text-right font-weight-bold mx-4">   
<h2>
<ul>
   <div className="content text-right font-weight-bold mx-4">

  <li class="list-inline-item"><a href="https://www.instagram.com" class="bt btn-ins d-inline-flex "><i class="fab fa-instagram" > </i></a></li>
  <li class="list-inline-item"><a href="https://www.facebook.com" class="btn-floating btn-fac"><i class="fab fa-facebook-f" > </i></a></li>
  <li class="list-inline-item"><a href="https://www.twitter.com" class="btn-floating btn-tw"><i class="fab fa-twitter"> </i></a></li>
  <li class="list-inline-item"><a href="https://www.linkedin.com"  class="btn-floating btn-lin"><i class="fab fa-linkedin-in"> </i></a></li>
  </div>
</ul>
</h2>
<h5 class="font-weight-bold my-4">Join our community</h5>

      </div>
      </div>
          
          <div class="footer-copyright text-center py-3">© 2020 Copyright:
            <Link href="https://"></Link>
          </div>
        
        
        </footer> 
        
    );
}