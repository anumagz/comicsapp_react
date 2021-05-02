import React, { useEffect, useState } from 'react';
import './App.css';
import AddComic from "./AddComic"
import ComicCarousel from "./ComicCarousel"
import { LinkContainer } from 'react-router-bootstrap'
import { Row, Col, Container, Button, Form, FormControl, Modal, InputGroup, Carousel} from "react-bootstrap";
import API_URL from './constants'
class comics {
    constructor(titles, genres, statuses, author, imagePath, summary) {
        this.Title = titles
        this.Genre = genres
        this.Status = statuses
        this.Author = author
        this.img_url = imagePath
        this.Plot = summary
    }
    changeStatus(statuses) {
        this.comicstatus = statuses
    }
}


function Top10() {

    async function fetchData() {
        const res = await fetch(`${API_URL}/comics`);
        res
            .json()
            .then(res => setComicarray(res.rows))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        fetchData();
    }, [])

    function addComic(titles, genres, statuses, author, imagePath, summary) {
        const newComic = new comics(titles, genres, statuses, author, imagePath, summary)
        setComicarray([newComic, ...comicArray])
        callCreateComicApi(newComic)
        console.log(`updated comicArray: `, comicArray)
    }
    const [comicArray, setComicarray] = useState([])

    async function callCreateComicApi(comics) {
        const res = await fetch("http://localhost:3000/comics", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(comics)
        });
        res
            .json()
            .then(res => setComicarray(res.rows))
            .catch(err => console.log(err));
    }
    /*  const array=[1,2,3]
 array.map((num)=>console.log(num))*/



    const [searchText, setSearchText] = React.useState("")
    function handleInputChange(event) {
        console.log(event)
        setSearchText(event.currentTarget.value)
        console.log(`current value of searchtext ${searchText}`)

    }

    function filterComics(comics) {
        if (searchText === "") {
            return true
        }
        else if (searchText === comics.Title) {
            return true
        } else if (searchText === comics.Genre) {
            return true
        } else if (searchText === comics.Status) {
            return true

        } else {
            return (searchText === comics.Author)
        }
    }



    return (<div>
        <AddComic callAddComic={addComic} />
        <InputGroup>
            <Form inline>
                <Form.Group controlId="formSearch">
                    <FormControl
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                        onChange={handleInputChange}
                    />

                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>
            </Form>

        </InputGroup>


        <Container-fluid>
            <div class="bg"></div>
            {/* <div ><img src={require ("./bla.jpg")} width="1349" height="700"/></div> */}
            {
                comicArray.filter(filterComics).map((comic) =>

                    <Container>
                        <LinkContainer to={`/comics/${comic.Title}`}>
                           <Button>View Details</Button>
                        </LinkContainer>
                        <h2>{comic.Title}</h2>
                        <Row>

                            <Col>
                                <img src={comic.img_url} width="100%" height="100%" />
                            </Col>
                            <Col>

                                <h5>Genre: {comic.Genre}</h5>
                                <h5>Status: {comic.Status}</h5>
                                <h5>Author: {comic.Author}</h5>

                                <p>{comic.Plot}</p>
                                <br />
                            </Col>
                        </Row>


                    </Container>

                )

            }



        </Container-fluid>
        <div class="latest" >

            <h4>Latest Release</h4>

            <div class="card-body">
                <p class=" card-text">
                    <ol>
                        <li>Bakuman</li>
                        <li>Fullmetal Alchemist</li>
                        <li>Bungo Stray Dogs</li>
                        <li>Bleach</li>
                        <li>Shield Hero</li>
                        <li>The Promised Neverland</li>
                        <li>Haikyuu</li>
                        <li>Noragami</li>
                    </ol>
                </p>
            </div>
        </div >


    </div>)
}
export default Top10;
