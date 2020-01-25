
 import React, { Component } from 'react';
 import {Button} from "react-bootstrap";
 import Modal from 'react-modal';
class Modaal extends Component{
constructor(){
    super();
    this.state={
show:false
}
    
}
customer={
    content:{
        width:"70%",
        height:"350px",
        marginLeft:"6%",
        borderBottom:"5px solid pink",
        position:"Absolute",
        left:"10%" ,
        
        


    }
}
handle()
    {
        this.setState({
            show:!this.state.show

        })
        
    }
  render(){  
        return(
           <div>
              <button onClick={this.handle.bind(this)} style={{  position:"Absolute",
        left:"20%" , top:"40%"
}}>affan</button>
               <Modal style={this.customer} isOpen={this.state.show} >
                   <div style={{marginLeft:"100%",fontSize:'22px'}} onClick={this.handle.bind(this)}>&times;</div>
                   <h1 style={{color :"blue",fontFamily:"arial",fontSize:"22px",borderBottom:"2px solid black",marginTop:"0%"}}>sing up</h1>
                  
                   <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      
               </Modal>
              
               </div>
    

    )
  }
}
                                                                                                                                                                                                                                                                                                                                     



                                                                                                                                                                                                                                                                                                                                     



export default Modaal;

// function Modaal() {
 

//   return (
//     <div>
//       <button className="btn btn-success" data-toggle="modal" data-target="#mymodal" >oerfjeoirje</button>
//        <div className="modal" id="mymodal">
//            <div className="modal-dialog">  
//            <div className="modal-content">
//                <div className="modal-header">
                
//                        <h3 className="text primary">singn up</h3>
                   
//                </div>
              
            
//                   </div>
//        </div>
// </div>
// </div>
//   );
// }                                                                                                                                                                                                                                                                                                                          



                                                                                                                                                                                                                                                                                                                                     



