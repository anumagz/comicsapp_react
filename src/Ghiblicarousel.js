import React from 'react';
import {  Carousel } from "react-bootstrap";

function Ghiblicarousel(){
    return(
 <div class="carousel">
 <Carousel>
     <Carousel.Item interval={1000}>
         <img
             className="d-block w-40"
             src={require("./marnie.png")}
             alt="First slide"
         />

     </Carousel.Item>
     <Carousel.Item interval={1000}>
         <img
             className="d-block w-40"
             src={require("./kaguya.jpg")}
             alt="Second slide"
         />

     </Carousel.Item>
     <Carousel.Item interval={1000}>
         <img
             className="d-block w-40"
             src={require("./wind.jpg")}
             alt="Third slide"
         />

     </Carousel.Item>
      <Carousel.Item interval={1000}>
         <img
             className="d-block w-40"
             src={require("./poppy.jpg")}
             alt="Fourth slide"
         />

     </Carousel.Item>
     <Carousel.Item interval={1000}>
         <img
             className="d-block w-40"
             src={require("./arriety.jpg")}
             alt="Fifth slide"
         />

     </Carousel.Item>
     <Carousel.Item interval={1000}>
         <img
             className="d-block w-40"
             src={require("./ponyo.png")}
             alt="Sixth slide"
         />

     </Carousel.Item>
     <Carousel.Item interval={1000}>
         <img
             className="d-block w-40"
             src={require("./earthsea.jpg")}
             alt="Seventh slide"
         />

     </Carousel.Item>
     <Carousel.Item interval={1000}>
         <img
             className="d-block w-40"
             src={require("./howl.jpg")}
             alt="Eighth slide"
         />

</Carousel.Item>
     <Carousel.Item interval={1000}>
         <img
             className="d-block w-40"
             src={require("./cat.jpg")}
             alt="Ninth slide"
         />

</Carousel.Item>
     <Carousel.Item interval={1000}>
         <img
             className="d-block w-40"
             src={require("./spirited.jpg")}
             alt="Tenth slide"
         />

     </Carousel.Item> */}
 </Carousel>
</div>)}
export default Ghiblicarousel;