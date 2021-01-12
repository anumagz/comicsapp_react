import React, { useState, useEffect } from "react";


const Animeapi = () => {
  const [hasError, setErrors] = useState(false);
  const [animeapi, setAnimeapi] = useState([]);

  async function fetchData() {
    const res = await fetch("https://jikan1.p.rapidapi.com/genre/anime/1/1", {
      headers: {
        'x-rapidapi-host':'jikan1.p.rapidapi.com','x-rapidapi-key':'2783fd7940msh6fd0f859ca392bfp1491b0jsn4e02d5dd8d55'
      }
    });
    res
      .json()
      .then(res => setAnimeapi(res.anime))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <div>
   {
     animeapi.map(item=>
      <div style={{'backgroundColor': 'black','color':'white'}}>
       <p><h4>{item.title}</h4></p>
       <img src={item.image_url}/>
       <p><h5>Episodes:{item.episodes} </h5></p>
       <p> <h4>Synopsis:</h4>{item.synopsis}</p>
  
      </div>)
   }
   </div>
  );
};
export default Animeapi;