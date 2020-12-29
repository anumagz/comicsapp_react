import React from 'react';
import { Row, Col, Container, Button, Form, FormControl, Modal, InputGroup, Carousel } from "react-bootstrap";

function ComicCarousel(){
    return(
 <div class="carousel">
 <Carousel>
     <Carousel.Item interval={1000}>
         <img
             className="d-block w-30"
             src={require("./images (60).jpeg")}
             alt="First slide"
         />

     </Carousel.Item>
     <Carousel.Item interval={1000}>
         <img
             className="d-block w-30"
             src={require("./images (62).jpeg")}
             alt="Second slide"
         />

     </Carousel.Item>
     <Carousel.Item interval={1000}>
         <img
             className="d-block w-30"
             src={require("./images (68).jpeg")}
             alt="Third slide"
         />

     </Carousel.Item>
     <Carousel.Item interval={1000}>
         <img
             className="d-block w-30"
             src={require("./images (67).jpeg")}
             alt="Fourth slide"
         />

     </Carousel.Item>
     <Carousel.Item interval={1000}>
         <img
             className="d-block w-30"
             src={require("./images (65).jpeg")}
             alt="Fifth slide"
         />

     </Carousel.Item>
     <Carousel.Item interval={1000}>
         <img
             className="d-block w-30"
             src={require("./images (64).jpeg")}
             alt="Sixth slide"
         />

     </Carousel.Item>
     <Carousel.Item interval={1000}>
         <img
             className="d-block w-30"
             src={require("./images (61).jpeg")}
             alt="Seventh slide"
         />

     </Carousel.Item>
     <Carousel.Item interval={1000}>
         <img
             className="d-block w-30"
             src={require("./images (66).jpeg")}
             alt="Eighth slide"
         />

     </Carousel.Item>
 </Carousel>
</div>)}
export default ComicCarousel;