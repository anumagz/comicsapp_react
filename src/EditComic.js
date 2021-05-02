import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Button, Form, FormControl, Modal, InputGroup, Carousel } from "react-bootstrap";

function EditComic(props) { 
    const [title, setTitle] = useState("");
    const [plot, setPlot] = useState(props.comicprop.Plot);
    const [genre, setGenre] = useState(props.comicprop.Genre);
    const [status, setStatus] = useState(props.comicprop.Status);
    const [author, setAuthor] = useState(props.comicprop.Author);
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
        callEditComicApi()
        handleClose()
    }

    async function callEditComicApi() {
        const res = await fetch(`http://localhost:3000/comics/${props.comicName}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify({status: status})
        });
        res
            .json()
            .then(res => console.log("Successfully updated"))
            .catch(err => console.log(err));
    }

    return (<div>
        <Button variant="primary" onClick={handleShow}>
            Add Comics
</Button>



        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Comics</Modal.Title>
            </Modal.Header>
            <Modal.Body><Form>
                <Form.Group controlId="formTitle">
                    <Form.Label>Title:</Form.Label>
                    <Form.Control id="comicTitle" type="text" placeholder="Enter Title" onChange={handleTitleChangeEvent} />

                </Form.Group>
                <Form.Group controlId="formPlot">
                    <Form.Label>Plot:</Form.Label>
                    <Form.Control id="comicPlot" type="text" defaultValue={plot} placeholder="Enter Plot" onChange={handlePlotChangeEvent} />

                </Form.Group>

                <Form.Group controlId="formGenre">
                    <Form.Label>Genre:</Form.Label>
                    <Form.Control id="comicGenre" type="text" placeholder="Enter Genre" onChange={handleGenreChangeEvent} />
                </Form.Group>
                <Form.Group controlId="formPlot">
                    <Form.Label>Status:</Form.Label>
                    <Form.Control id="comicPlot" type="text" placeholder="Enter Status" defaultValue={status} value={status} onChange={handleStatusChangeEvent} />

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
export default EditComic;