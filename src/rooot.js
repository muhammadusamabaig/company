import React, { Component } from 'react';
import './rooot.css';


class Rooot extends Component{






   render(){    return(
      
   <div className="mainimageheading">
        
<div className="h1_margin" ><span style={{color:"black"}} >Our</span> <span style={{color:"green"}}>ADVANTAGES</span></div>
<br/>
<div className="imgcontainer">
<a href="#" ><img className="clockpic  "  src={process.env.PUBLIC_URL + "/performance.png"} /></a>
<a href="#" ><img className="planpic"  src={process.env.PUBLIC_URL + "/plan.png"}/> </a>  
<a href="#" ><img className="requestpic" src={process.env.PUBLIC_URL + "/request.png"}/> </a>  
<a href="#" ><img className="thumpic"  src={process.env.PUBLIC_URL + "/thum.png"}/> </a>  
</div>
</div>
       )  }
 }

 export default Rooot
