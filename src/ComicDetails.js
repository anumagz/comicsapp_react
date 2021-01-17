import React, { useEffect, useState } from 'react';
import {
    useParams
  } from "react-router-dom";
  
function ComicDetails(){
    let { comicName } = useParams();

    return(
        <div>{comicName}</div>
    )
}
export default ComicDetails;