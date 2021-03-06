import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Media from 'react-bootstrap/Media';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

import image1 from "./IMCFOTO.png";


function Components(props) {
    
    return (
      <div style={{ 
        position: "absolute",
        backgroundImage: `url(${image1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: "100%",
        height: "250%",
        padddingRigth: "0px",
        paddingBottom: "100%",
        margin: 0,
        padding: 0
        
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
<div style={{ 
        position: "ansolute",
        backgroundImage: `url(${image1})`,
        backgroundSize: '500px 500px',
        backgroundPosition: 'center',
        width: "100%",
        height: "100%",
        padddingRigth: "0px",
        paddingBottom: "0%",
        margin: 0,
        padding: 0
        
        }}>
    <p style={{
       display: "inline-block",
       position: "relative",
      color:"white", 
      fontSize: "300%",
      fontFamily: "calichi",
      fontWeight: "normal",
      fontStyle: "normal",
      position: "relative",
      // backgroundColor: "none",
      // backgroundImage: `url(${image1})`, //"#000000",
      opacity: "1.0",   
      marginLeft: "10%",
      marginTop: "8%",
      width: "40%",
      padding: "0px",
      border: '1px solid red'
       }}> 
       {"IMC"}</p>
       
       <p style={{
          display: "inline-block",
          position: "relative",
      color:"white", 
      fontSize: "200%",
      fontFamily: "calichi",
      fontWeight: "normal",
      fontStyle: "normal",
      position: "relative",
      // backgroundColor: "none",
      // backgroundImage: `url(${image1})`, //"#000000",
      opacity: "1.0",   
      marginLeft: "35%",
      marginTop: "9%",
      width: "45%",
      padding: "0px",
      border: '1px solid red'
       }}> 
       {"Instituto de Música por Computadora - Puerto Rico"}<br></br>
       
       <br></br></p>
       
       <p style={{
          display: "inline-block",
          position: "relative",
      color:"white", 
      fontSize: "100%",
      fontFamily: "calichi",
      fontWeight: "normal",
      fontStyle: "normal",
      position: "relative",
      // backgroundColor: "none",
      // backgroundImage: `url(${image1})`, //"#000000",
      opacity: "1.0",   
      marginLeft: "2%",
      marginTop: "0%",
      width: "45%",
      padding: "0px",
       }}> 
       {"royfguzman@gmail.com"}<br></br>
      
       <br></br></p>
       </div>
       
    


   
 
       
       

   </div>
  
    )
  }

  export default Components
