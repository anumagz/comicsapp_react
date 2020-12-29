import React from 'react';
import './App.css';
import Top10 from './Top10';
import AppBar from './AppBar';
import AddComic from "./AddComic";
import ComicCarousel from "./ComicCarousel"
import { Row, Col, Container } from "react-bootstrap";
import Comicsapi from './Comicsapi';
function App() {

  return (<div>
    <AppBar/>
    <Top10/>
    <ComicCarousel/>
    
  </div >
  )
}
export default App;
