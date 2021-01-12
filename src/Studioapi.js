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

    return (
        <div>
            {
                studioapi.map(item =>
                    <div style={{ 'backgroundColor': 'black', 'color': 'white' }}>
                       <p><h4> {item.title}</h4></p>
                       <p>Episodes: {item.episodes}</p>
                       <img src=  {item.image_url}/>
                       <p><h4>Synopsis:</h4>  {item.synopsis}</p>

                    </div>)
            }
        </div>
    );
};
export default Studioapi;  