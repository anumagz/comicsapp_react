import React, { useEffect, useState } from 'react';
import './App.css';
import { Row, Col, Container} from "react-bootstrap";
import API_URL from './constants'

class character {
    constructor(name, gender, age, height, hair_color, eye_color, japanese_va) {
        this.Name = name
        this.Gender = gender
        this.Age= age
        this.Height = height
        this.hair_Color= hair_color
        this.eye_Color=eye_color
        this.japanese_Va=japanese_va
    }
   
}


function Characters() {

    async function fetchData() {
        const res = await fetch(`${API_URL}/characters_db`);
        res
            .json()
            .then(res => setComicarray(res.rows))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        fetchData();
    }, [])

    const [characterArray, setComicarray] = useState([])




    return (<div>
     


        <Container-fluid>
            
            {
                characterArray.map((character) =>

                    <Container>
                        
                        <h2>Name:{character.name}</h2>
                        <Row>

                            <Col>
                                <img src={character.image} width="100%" height="100%" />
                            </Col>
                            <Col>

                             
                                <h5>Gender: {character.gender}</h5>
                                <h5>Height: {character.height}cm</h5>
                                <h5>Hair Color: {character.hair_color}</h5>
                                <h5>Eye Color: {character.eye_color}</h5>
                                <h5>Age: {character.age}</h5>
                                <h5>Japanese VA: {character.japanese_va}</h5>
                                <p>{character.characterDetails}</p>
                                <br />
                            </Col>
                        </Row>


                    </Container>

                )

            }



        </Container-fluid>


    </div>)
}
export default Characters;