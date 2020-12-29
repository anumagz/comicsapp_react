import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Button, Form, FormControl, Modal, InputGroup, Carousel } from "react-bootstrap";

function AddComic(props) { 
    const [title, setTitle] = useState("");
    const [plot, setPlot] = useState("");
    const [genre, setGenre] = useState("");
    const [status, setStatus] = useState("");
    const [author, setAuthor] = useState("");
    const handleTitleChangeEvent = (event) => setTitle(event.target.value);
    const handlePlotChangeEvent = (event) => setPlot(event.target.value);
    const handleGenreChangeEvent = (event) => setGenre(event.target.value);
    const handleStatusChangeEvent = (event) => setStatus(event.target.value);
    const handleAuthorChangeEvent = (event) => setAuthor(event.target.value);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmitEvent = () => {
        console.log(title)
        console.log(plot)
        console.log(genre)
        props.callAddComic(title,genre,status,author,"",plot)
        handleClose()
    }

    return (<div>
        <Button variant="primary" onClick={handleShow}>
            Add Comics
</Button>



        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Comics</Modal.Title>
            </Modal.Header>
            <Modal.Body><Form>
                <Form.Group controlId="formTitle">
                    <Form.Label>Title:</Form.Label>
                    <Form.Control id="comicTitle" type="text" placeholder="Enter Title" onChange={handleTitleChangeEvent} />

                </Form.Group>
                <Form.Group controlId="formPlot">
                    <Form.Label>Plot:</Form.Label>
                    <Form.Control id="comicPlot" type="text" placeholder="Enter Plot" onChange={handlePlotChangeEvent} />

                </Form.Group>

                <Form.Group controlId="formGenre">
                    <Form.Label>Genre:</Form.Label>
                    <Form.Control id="comicGenre" type="text" placeholder="Enter Genre" onChange={handleGenreChangeEvent} />
                </Form.Group>
                <Form.Group controlId="formPlot">
                    <Form.Label>Status:</Form.Label>
                    <Form.Control id="comicPlot" type="text" placeholder="Enter Status" onChange={handleStatusChangeEvent} />

                </Form.Group>
                <Form.Group controlId="formPlot">
                    <Form.Label>Author:</Form.Label>
                    <Form.Control id="comicPlot" type="text" placeholder="Enter Author" onChange={handleAuthorChangeEvent} />

                </Form.Group>

            </Form></Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
</Button>

<Button variant="primary" type="button" onClick={handleSubmitEvent}>
                    Submit
  </Button>
            </Modal.Footer>
        </Modal>
    </div>)
}
export default AddComic;