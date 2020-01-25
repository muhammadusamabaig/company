import React, { Component } from 'react';
import { Carousel,Button} from 'react-bootstrap';
import './rooot.css';

const style={
  transition:'all 0.5s ease-out'
}
class Scrool extends Component{

constructor(props){
  super(props);

  this.state={
    opacity:1,
    scale:1

  }

}
opacite(){
  this.setState({
    opacity:1
    })
}
scal(){
  this.setState({
    scale:this.state.scale>1? 1:1.3
  })
}


  render(){    return(
      
 <div className="mainimageheading">
<Carousel style={{}}>

<Carousel.Item style={{}} >
  <img style={{border:"2px solid black"}}
    className="d-block w-100"
    height="400px"
    src={process.env.PUBLIC_URL + "/5539.jpg"}
    // style={{ width:"200px"}}
    alt="First slide"
  />
  <Carousel.Caption style={{border:"white"}} >
    <h3>company portfolio</h3>
    <p >Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  </Carousel.Caption>

</Carousel.Item>

<Carousel.Item>
  <img
    className="d-block w-100"
    src={process.env.PUBLIC_URL + "/830.jpg"}
    height="400px"
    alt="second"
  />

  <Carousel.Caption>
    <h3  style={{border:" 2px solidgreen"}}>Second slide label</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={process.env.PUBLIC_URL + "/houselake.Jpg"}   height="400px"  alt="Third slide"
  />

  <Carousel.Caption>
    <h3>Third slide label</h3>
    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>  

<br/><br/>

   <div style={{}}>
   <Button onClick={this.opacite.bind(this),this.scal.bind(this)}  style={{transition:style.transition,transform:'scale('+this.state.scale+')',marginLeft:"25%",opacity:this.state.opacity,width:"50%",boxShadow:'1px 6px 4px gray',borderRadius:"100px"} } className="butto"  variant="primary">Company Servay</Button>
    
    </div>
    
  </div>
  

    )
  }
}
                                                                                                                                                                                                                                                                                                                                     



export default Scrool;


