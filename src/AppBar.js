import { Row, Col, Nav, Navbar, Container, Button, Form, FormControl, Modal, InputGroup, Carousel } from "react-bootstrap";
import React, { useEffect,useState } from 'react';
function AppBar(){

 

    return(
        <div>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Links</Nav.Link>
    </Nav>


</Navbar>

</div>
    )
}
export default AppBar;