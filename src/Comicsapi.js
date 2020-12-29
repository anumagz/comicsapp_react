import React, { useState, useEffect } from "react";

const Comicsapi = () => {
  const [hasError, setErrors] = useState(false);
  const [comicsapi, setComicsapi] = useState({});

  async function fetchData() {
    const res = await fetch("http://localhost:3000/comics");
    res
      .json()
      .then(res => setComicsapi(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <div>
      <span>{JSON.stringify(comicsapi)}</span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
};
export default Comicsapi;
