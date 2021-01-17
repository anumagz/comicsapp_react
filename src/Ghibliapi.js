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
      <p>Director:  {item.director}</p>
       <p>Producer: {item.producer}</p>
       <p>Release Date: {item.release_date}</p>
       <p> {item.description}</p>
      </div>)
   }
   </div>
  );
};
export default Ghibliapi;