import React, { useState, useEffect } from "react";


const Studioapi = () => {
    const [hasError, setErrors] = useState(false);
    const [studioapi, setStudioapi] = useState([]);

    async function fetchData() {
        const res = await fetch("https://jikan1.p.rapidapi.com/producer/1/1", {
            headers: {
                'x-rapidapi-host': 'jikan1.p.rapidapi.com', 'x-rapidapi-key': '2783fd7940msh6fd0f859ca392bfp1491b0jsn4e02d5dd8d55'
            }
        });
        res
            .json()
            .then(res => setStudioapi(res.anime))
            .catch(err => setErrors(err));
    }

    useEffect(() => {
        fetchData();
    });

function extractGenresFromApiResponse(genresfromApi){
let genres=[]
for(let i=0;i<genresfromApi.length;i++){
    let currentElement=genresfromApi[i]
    genres.push(currentElement.name)

}
let csv=""
for(let j=0;j<genres.length;j++){
    let currentElement = genres[j]
   csv= currentElement +"_"+ csv
}
return csv

 }

    return (
        <div>
            {
                studioapi.map(item =>
                    <div style={{ 'backgroundColor': 'black', 'color': 'white' }}>
                       <p><h4> {item.title}</h4></p>
                       <p><h5>Genres: {extractGenresFromApiResponse( item.genres)}</h5></p>
                       <p><h5>Episodes: {item.episodes}</h5></p>
                       <img src=  {item.image_url} />
                       <p><h5>Synopsis:</h5>  {item.synopsis}</p>

                    </div>)
            }
        </div>
    );
};
export default Studioapi;  