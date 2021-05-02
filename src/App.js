import React from 'react';
import './App.css';
import Top10 from './Top10';
import AppBar from './AppBar';
import AddComic from "./AddComic";
import ComicCarousel from "./ComicCarousel"
import { Row, Col, Container } from "react-bootstrap";
import Comicsapi from './Comicsapi';
import Ghibliapi from './Ghibliapi';
import Animeapi from './Animeapi';
import Scheduleapi from './Scheduleapi';
import Studioapi from './Studioapi';
import ComicDetails from './ComicDetails';
import Characters from "./Characters"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Ghiblicarousel from './Ghiblicarousel';
import Ghiblicarousel2 from './Ghiblicarousel2';


function App() {

  return (<div>
    <Router>
      <h1>.</h1>
      <AppBar />


      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">

          <Animeapi />
        </Route>
        < Route path="/characters">

          <Characters />
        </Route>
        <Route path="/animenews">

          <Comicsapi />
        </Route>
        <Route path="/upcoming">

          < Scheduleapi />
        </Route>
        <Route path="/MyAnimeList">

          <Studioapi />
        </Route>
        <Route path="/ghibli">



          <Ghiblicarousel2 />
          <Ghibliapi />
          <Ghiblicarousel />
        </Route>

        <Route path="/comics/:comicName">
          <div><ComicDetails /></div>
        </Route>

        <Route path="/">
          <Top10 />
          <ComicCarousel />

        </Route>
      </Switch>
    </Router>
  </div >
  )
}
export default App;
