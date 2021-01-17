import React from 'react';
import { Carousel } from "react-bootstrap";

function Ghiblicarousel2() {
    return (
        <div class="carousel">
            {/* <div> <img src={require("./spirit.jpg")}/></div>  */}
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-40"
                        src={require("./castle.jpg")}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Castle in the sky</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-40"
                        src={require("./grave.jpg")}
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-40"
                        src={require("./tottoro.jpg")}
                        alt="Third slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-40"
                        src={require("./kiki.jpg")}
                        alt="Fourth slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-40"
                        src={require("./yesterday.jpg")}
                        alt="Fifth slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-40"
                        src={require("./porco.jpg")}
                        alt="Sixth slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-40"
                        src={require("./pom.jpg")}
                        alt="Seventh slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-40"
                        src={require("./whisper.jpg")}
                        alt="Eighth slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-40"
                        src={require("./mononoke.png")}
                        alt="Ninth slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-40"
                        src={require("./yamada.jpg")}
                        alt="Tenth slide"
                    />

                </Carousel.Item>
            </Carousel>
        </div>)
}
export default Ghiblicarousel2;