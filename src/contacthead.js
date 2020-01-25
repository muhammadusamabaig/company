
 import react from 'react';
 import React, { Component } from 'react';

import './contactphone.css';
  
import { Navbar ,Nav,Form,Button, FormControl} from 'react-bootstrap';

//navigation hy ya

class Contact extends Component{

  myFunction() {


   
   var x = document.getElementById("myTopnav")
        if (x.className === "topnav") {
          x.className += " responsive"
        } else {
          x.className = "topnav"
        }
      console.log("usmaa")
      }

    
  render(){  
        return(
            <div class="topnav" id="myTopnav">
            <a href="#home" class="active"><img style={{height
            :"32px",width:"32px"}} src="home.png"/></a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
            <a href="#news">Term & Conditions</a>
            <a href="#contact">Contact</a>
            <a href="#about">Career</a>
            <a href="#about">Products</a>

            <a href="javascript:void(0);" class="icon" onClick={this.myFunction}>
              <i class="fa fa-bars"></i>
            </a>
          </div>

    )
  }
}
                                                                                                                                                                                                                                                                                                                                     



                                                                                                                                                                                                                                                                                                                                     



export default Contact;
