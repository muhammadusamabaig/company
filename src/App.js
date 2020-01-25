import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';'
import Rooot from './rooot';
import Footer from './footer';
// import Cpp from "./clock.js"
import Scroll from './scrool';
import Modaal from './modal'

import {
  BrowserRouter as Router,
Link, Switch, Route 
} from "react-router-dom";

import Contact from './contacthead'



  const CustomRout= () =>  (
    <div>
   {/* <Modaal/>  */}
      <Contact/>
      <Scroll/> 
   <Rooot/>
        

  
  <Footer/>   
  
  </div>
//     <Router>
//       <div>
// <Usama/>
//         <Route path="/Rooot"  component={Rooot}/>
//         <Route path="/Usama"  component={Usama}/>
        
//       </div>
        
//         </Router>
    

  )

                                                                                                                                                                                                                                                                                                                                     



export default CustomRout;
