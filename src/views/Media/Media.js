import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ReactPlayer from 'react-player/youtube'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";



function Medios() {
    

    return (
      <div style={{ 
      backgroundColor: `black`,
      height: "3500px",
      position: "absolute",
      backgroundPosition: '0px 0px',
      backgroundSize: "100% 100%",  
      backgroundRepeat: "no-repeat",
      width: "100%",
      paddingBottom: "80%",  
      marginBottom: "100px",  
      marginTop: "-1%",
      paddingTop: 0,
      }}>
        <Router>
  <Navbar bg="dark" variant="light" expand="lg" >
  <Navbar.Brand color="white">[IMC]</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Inicio</Nav.Link>
      <Nav.Link href="nosotros">Nosotros</Nav.Link>
      <Nav.Link href="cursos">Cursos</Nav.Link>
      <Nav.Link href="media">Medios</Nav.Link>

      <NavDropdown title="Instructores" id="basic-nav-dropdown">
        <NavDropdown.Item href="royfguzman">Roy F Guzmán</NavDropdown.Item>        
      </NavDropdown>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
</Router>
    <div>
    <h5 style={{
      color:"white", 
      fontFamily: "Menlo",
      fontSize: "50px",
      fontWeight: "normal",
      fontStyle: "normal",
      position: "relative",
      backgroundColor: `black`, //"#000000",
      opacity: "1.0",   
      marginLeft: "5%",
      marginTop: "100px",
      width: "69%",
      padding: "10px",
       }}> 
       Medios<br></br></h5>
       </div>
       <div>
    <h2 style={{
      color:"white", 
      fontFamily: "Menlo",
      fontSize: "20px",
      fontWeight: "normal",
      fontStyle: "normal",
      position: "relative",
      backgroundColor: `black`, //"#000000",
      opacity: "1.0",   
      marginLeft: "5%",
      marginTop: "100px",
      width: "69%",
      padding: "10px",
       }}> 
       Extractos de clases de Pure Data<br></br></h2>
       </div>

       <Container>
       <Row>
         
        <ReactPlayer url='https://youtu.be/Rx6Sal-BAnI' />

       

         <ReactPlayer url='https://youtu.be/pjxpXnWUo8A' />

         
        </Row>
    </Container>
    <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1101732172&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style={{fontSize: "10px", color: "#cccccc", lineBreak: "anywhere", wordBreak: "normal", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif", fontWeight: "100"}}><a href="https://soundcloud.com/user-747382031" title="IMC" target="_blank" style={{color: "#cccccc", textDecoration: "none"}}>IMC</a> · <a href="https://soundcloud.com/user-747382031/puredata-clase-3-ritmos-patch-3" title="PureData Clase 3 - Ritmos - Patch 3" target="_blank" style={{color: "#cccccc", textDecoration: "none"}}>PureData Clase 3 - Ritmos - Patch 3</a></div>
    <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1100410333&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style={{fontSize: "10px", color: "#cccccc", lineBreak: "anywhere", wordBreak: "normal",overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis",fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif", fontWeight: "100"}}><a href="https://soundcloud.com/user-747382031" title="IMC" target="_blank" style={{color: "#cccccc", textDecoration: "none"}}>IMC</a> · <a href="https://soundcloud.com/user-747382031/clase-de-snapshot1" title="Clase de Snapshot1" target="_blank" style={{color: "#cccccc", textDecoration: "none"}}>Clase de Snapshot1</a></div>    
    <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1102269721&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style={{fontSize: "10px", color: "#cccccc", lineBreak: "anywhere", wordBreak: "normal", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif", fontWeight: "100"}}><a href="https://soundcloud.com/user-747382031" title="IMC" target="_blank" sstyle={{color: "#cccccc", textDecoration: "none"}}>IMC</a> · <a href="https://soundcloud.com/user-747382031/puredata-clase-5-patch-5-fmearayo" title="PureData - Clase 5 - Patch 5 - FMEaRayo" target="_blank" style={{color: "#cccccc", textDecoration: "none"}} >PureData - Clase 5 - Patch 5 - FMEaRayo</a></div>
   </div>
  
    )
  }

  export default Medios
