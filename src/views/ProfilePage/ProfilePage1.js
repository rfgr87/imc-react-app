import React from "react";

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "/src/components/Grid/GridItem.js";

import image1 from "./IMCFOTO6.png";
import image2 from "./IMCFOTO5.png";


export default function ProfilePage1(props) {
 
  return (
    <div>
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
      position: "absolute",
      backgroundColor: "black",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: "100%",
      height: "100%",
      padddingRigth: "0px",
      paddingBottom: "100%",
      margin: 0,
      padding: 0
      }}>

<div style={{ 
      position: "relative",
      backgroundImage: `url(${image1})`,
      backgroundColor: "black",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: "100%",
      padddingRigth: "0px",
      paddingBottom: "q00",
      margin: 0,
      padding: 0
      }}>


<div>
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
      width: "80%",
      padding: "0px",
       }}> 
       {"[IMC-PR]"}</p>
       </div>

            <br></br>
           
    
       
      <Container justify="center">
      <Row>
    
            <Col>  <div style={{ 
              position: "relative",

              fontSize: "100%",
              fontFamily: "calichi",
              fontWeight: "normal",
              fontStyle: "normal",
              color: "red",
              borderWidth:2,
              borderColor: 'red',
              margin: "0px",
              width: "50%",
              border: '1px solid',
              marginBottom: "10px",
              padding: "5%",

              }}>
              <p>
              {"IMC - Instituto de Música por Computadora - Puerto Rico es un instituto que se dedica a promover la composición musical asistida por la computadora y a el arte de la música electro-acústica en Puerto Rico mediante cursos dirigidos a formar profesionales del campo y crear conciertos."}<br></br><br></br>
             
              </p>
              </div>   </Col>
           
       
              <Col>  <div style={{ 

              position: "absolute",

              fontSize: "100%",
              fontFamily: "calichi",
              fontWeight: "normal",
              fontStyle: "normal",
              color: "yellow",
              borderWidth:2,
              borderColor: 'red',
              margin: "0px",
              width: "50%",
              padding: "5%",
              border: '1px solid'

              }}>
              <p>
              {"IMC - Institute of Computer Music - Puerto Rico is an institute that is dedicated to promoting computer-assisted musical composition and the art of electro-acoustic music in Puerto Rico through courses aimed at training professionals in the field and creating concerts."}<br></br><br></br>
            
              </p>
              </div>   </Col>
      
      </Row>
      </Container>
      </div>
    </div>   
    </div>            
  );
}
