import React, { useState, useEffect } from "react";


const Scheduleapi = () => {
  const [hasError, setErrors] = useState(false);
  const [scheduleapi, setScheduleapi] = useState([]);

  async function fetchData() {
    const res = await fetch("https://jikan1.p.rapidapi.com/schedule/monday", {
      headers: {
        'x-rapidapi-host':'jikan1.p.rapidapi.com','x-rapidapi-key':'2783fd7940msh6fd0f859ca392bfp1491b0jsn4e02d5dd8d55'
      }
    });
    res
      .json()
      .then(res => setScheduleapi(res.monday))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <div>
   {
     scheduleapi.map(item=>
      <div style={{'backgroundColor': 'black','color':'white'}}>
      <h4>{item.title}</h4>  
      <img src={item.image_url}/>
      <p><h5>Synopsis:</h5> {item.synopsis}</p>
  
      </div>)
   }
   </div>
  );
};
export default Scheduleapi;  