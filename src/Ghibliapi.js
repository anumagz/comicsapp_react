import React, { useState, useEffect } from "react";

const Ghibliapi = () => {
  const [hasError, setErrors] = useState(false);
  const [ghibliapi, setGhibliapi] = useState([]);

  async function fetchData() {
    const res = await fetch("https://ghibliapi.herokuapp.com/films", {
     
    });
    res
      .json()
      .then(res => setGhibliapi(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <div>
   {
     ghibliapi.map(item=>
      <div  style={{'backgroundColor': 'black','color':'white'}}>
       
        <h4>{item.title}: </h4>
      <p><h6>Director:  </h6>{item.director}</p>
       <p><h6>Producer: </h6>{item.producer}</p>
       <p><h6>Release Date: </h6>{item.release_date}</p>
       <p><h6>Description:</h6>{item.description}</p>
       
      </div>)
   }
   </div>
  );
};
export default Ghibliapi;