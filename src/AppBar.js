import { Row, Col, Nav, Navbar, Container, Button, Form, FormControl, Modal, InputGroup, Carousel } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import { LinkContainer } from 'react-router-bootstrap'


function AppBar() {



    return (
        <div>
          
            <Navbar fixed="top" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Kuro Neko 	(ﾉ◕w◕)ﾉ*:･ﾟ✧</Navbar.Brand>
                <Nav className="mr-auto">
                    <LinkContainer to="/">
                        <Button>Manga</Button>
                    </LinkContainer>

                    <LinkContainer to="/about">
                        <Button>Anime</Button>
                    </LinkContainer>

                    <LinkContainer to="/animenews">
                        <Button>Anime News</Button>
                    </LinkContainer>

                    <LinkContainer to="/characters">
                        <Button>Characters</Button>
                    </LinkContainer>

                    
                    <LinkContainer to="/upcoming">
                        <Button>Upcoming Anime</Button>
                    </LinkContainer>

                    <LinkContainer to="/Myanimelist">
                        <Button>MyAnimeList</Button>
                    </LinkContainer>
                   
                    <LinkContainer to="/ghibli">
                        <Button>Ghibli</Button>
                    </LinkContainer>
                </Nav>


            </Navbar>
        </div>
    )
}
export default AppBar;