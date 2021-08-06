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

import image1 from "./PureData1.jpg";
import image2 from "./image.png";


export default function Cursos(props) {
 
  return (
    <div style={{ 
      position: "absolute",
      backgroundColor: "black",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: "100%",
      height: "2000px",
      padddingRigth: "0px",
      paddingBottom: "100%",
      margin: 0,
      padding: 0
      }}>
  <Router>
  <Navbar bg="dark" variant="light" >
  <Navbar.Brand color="white">[IMC]</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Inicio</Nav.Link>
      <Nav.Link href="nosotros">Nosotros</Nav.Link>
      <Nav.Link href="cursos">Cursos</Nav.Link>
      <NavDropdown title="Instructores" id="basic-nav-dropdown">
        <NavDropdown.Item href="royfguzman">Roy F Guzmán</NavDropdown.Item>        
      </NavDropdown>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
</Router>





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
       {"[Cursos]"}</p>
       </div>

         <br></br>
         <div>
         <p style={{
       display: "inline-block",
       position: "relative",
      color:"white", 
      fontSize: "100%",
      fontFamily: "Menlo",
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
       {"Los cursos que se ofrecene en el IMC-PR son 1) Pure Data, 2) Composición con soporte digital DAW Reaper, 3) Procesamiento de Señales Digitales, 4) Transductores y Grabaciones de Campo y 5) Super Collider."}</p>
       </div>
       <div>
         <p style={{
       display: "inline-block",
       position: "relative",
      color:"white", 
      fontSize: "100%",
      fontFamily: "Menlo",
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
       {"Los cursos tienen costos de $160 por 16 clases de una hora y media."}<br></br><br></br>
       {"Cursos de este semestre son:"}</p>
       </div>
         <Container justify="center">
      <Row>
      <Col>  <div>
    <p style={{
       display: "inline-block",
       position: "relative",
      color:"white", 
      fontSize: "100%",
      fontFamily: "Menlo",
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
       {"[Pure Data]"}</p>
       </div>
       </Col>
       <Col>
       <div>
    <p style={{
       display: "inline-block",
       position: "relative",
      color:"white", 
      fontSize: "100%",
      fontFamily: "Menlo",
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
       {"[Composición con soporte digital DAW - Reaper]"}</p>
       </div>
       </Col>
       </Row>
       </Container>
       <Container justify="center">
      <Row>
    
            <Col>  <div style={{ 
              position: "relative",
              backgroundSize: "100% 100%",
              fontSize: "100%",
              fontFamily: "Menlo",
              fontWeight: "normal",
              fontStyle: "normal",
              color: "white",
              borderWidth:2,
              borderColor: 'red',
              margin: "0px",
              width: "90%",
              height: "100%",
              border: '1px solid red',
              marginBottom: "10px",
              padding: "5%"

              }}>
              <p>
              {"PureData - PureData es un programa de música algoritmica mediante la programación visual con objetos. Intenta asimilar un estudio análogo. Las 16 clases van a ser dedicadas a estudiar desde los elementos mas esenciales y básicos de PureData hasta conceptos complicados como Emergencia, Feedbacks, Sistemas Complejos entre otros temas de mayor complejidad."}<br></br><br></br>
             
              </p>
              </div>   </Col>
           
       
              <Col>  <div style={{ 

              position: "absolute",
              backgroundSize: "100% 100%",
              fontSize: "100%",
              fontFamily: "Menlo",
              fontWeight: "normal",
              fontStyle: "normal",
              color: "white",
              borderWidth:2,
              borderColor: 'red',
              margin: "0px",
              width: "90%",
              height: "100%",
              padding: "5%",
              border: '2px solid red'

              }}>
              <p>
              {"Composición con soporte digital-DAW-Reaper - En este curso se enseñará los elementos de la edición digital en Reaper. Se explicarán la mayoria de los elementos de Reaper para poder editar, grabar, mixear, masterizar y componer con los plugins mas esenciales y puros del campo de la composición digital y música concreta. Se estudiarán ejemplos de obras hechas por compositores Puertorriqueños y Caribeños como algunos del continente Sur Americano y Europeo."}<br></br><br></br>
            
              </p>
              </div>   </Col>
      
      </Row>
      </Container>
       
      <Container justify="center">
      <Row>
    
            <Col>  <div style={{ 
              position: "relative",
              backgroundSize: "100% 100%",
              backgroundImage: `url(${image1})`,

              fontSize: "100%",
              fontFamily: "Menlo",
              fontWeight: "normal",
              fontStyle: "normal",
              color: "black",
              borderWidth:2,
              borderColor: 'red',
              margin: "0px",
              width: "100%",
              height: "600px",
              border: '1px solid',
              marginBottom: "10px",
              padding: "5%"

              }}>
              <p>
             
              </p>
              </div>   </Col>
           
       
              <Col>  <div style={{ 

              position: "absolute",
              backgroundSize: "100% 100%",
              backgroundImage: `url(${image2})`,

              fontSize: "100%",
              fontFamily: "Menlo",
              fontWeight: "normal",
              fontStyle: "normal",
              color: "red",
              borderWidth:2,
              borderColor: 'red',
              margin: "0px",
              width: "100%",
              height: "80%",
              padding: "0%",

              }}>
              <p>
            
              </p>
              </div>   </Col>
      
      </Row>
      </Container>
      </div>
    
               
  );
}
