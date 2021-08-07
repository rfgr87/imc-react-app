import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createBrowserHistory } from "history";
import Components from "../src/views/Components/Components.js";
import reportWebVitals from './reportWebVitals';
import { Router, Route, Switch } from "react-router-dom";


import ProfilePage1 from "../src//views/ProfilePage/ProfilePage1.js";
import Manifesto from "../src/views/Manifesto/Manifesto.js";
import ElectroAcoustic from "./views/ElectroAcoustic/ElectroAcoustic.js";
import Instrumental from "./views/Instrumental/Instrumental.js";
import Scores from "./views/Scores/Scores.js";
import Cursos from "./views/Cursos/Cursos.js";
import Media from "./views/Media/Media.js";


import 'bootstrap/dist/css/bootstrap.css';


var hist = createBrowserHistory();


ReactDOM.render(
  
  <Router history={hist}>
    <Switch>
      <Route path="/pedagogy" component={Manifesto} />
      <Route path="/royfguzman" component={ElectroAcoustic} />
      <Route path="/instrumental" component={Instrumental} />
      <Route path="/scores" component={Scores} />
      <Route path="/cursos" component={Cursos} />
      <Route path="/media" component={Media} />

      <Route path="/nosotros" component={ProfilePage1} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
