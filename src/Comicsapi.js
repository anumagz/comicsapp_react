import React, { useState, useEffect } from "react";


const Comicsapi = () => {
  const [hasError, setErrors] = useState(false);
  const [comicsapi, setComicsapi] = useState([]);

  async function fetchData() {
    const res = await fetch("https://jikan1.p.rapidapi.com/top/anime/1/upcoming", {
      headers: {
        'x-rapidapi-host':'jikan1.p.rapidapi.com','x-rapidapi-key':'2783fd7940msh6fd0f859ca392bfp1491b0jsn4e02d5dd8d55'
      }
    });
    res
      .json()
      .then(res => setComicsapi(res.top))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <div>
   {
     comicsapi.map(item=>
      <div style={{'backgroundColor': 'black','color':'white'}}>
        <p><h5>{item.title}:</h5>  </p>
        <img src=  {item.image_url}/>
  
        {/* {item.image_url} */}
       
      </div>)
   }
   </div>
  );
};
export default Comicsapi;
