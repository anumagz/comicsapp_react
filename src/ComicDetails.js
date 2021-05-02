import React, { useEffect, useState } from 'react';
import { Row } from "react-bootstrap";
import EditComic from "./EditComic"

import {
    useParams
} from "react-router-dom";

function ComicDetails() {
    let { comicName } = useParams();
    async function fetchData() {
        const res = await fetch(`http://localhost:3000/comics/${comicName}`);
        res
            .json()
            .then(res => setComicarray(res.rows))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        fetchData();
    }, [])

  

    const [comicArray, setComicarray] = useState([])


    return (<div>

        {
           comicArray.length === 0 ? <h1>Loading... </h1> :     
            comicArray.map((comic) =>
                <Row>
                    <h5>Genre: {comic.Genre}</h5>
                    <h5>Status: {comic.Status}</h5>
                    <h5>Author: {comic.Author}</h5>

                    <p>{comic.Plot}</p>
                    <EditComic comicprop={comic} comicName={comicName}/>
                    </Row>)}

                   
    </div>
    
    )
}
export default ComicDetails;