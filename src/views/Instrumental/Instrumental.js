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

import image1 from "./img015.jpg";


function Releases(props) {
    
    return (
      <div style={{ 
        position: "absolute",
        backgroundImage: `url(${image1})`,
        backgroundColor: "white",
        //backgroundColor: "white",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: "100%",
        padddingRigth: "0px",
        paddingBottom: "0px",
        margin: 0,
        padding: 0
        
        }}>
   <Router>
  <Navbar bg="light" expand="lg">
  <Navbar.Brand >Roy F Guzmán</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="bio">Bio</Nav.Link>
      <NavDropdown title="Works" id="basic-nav-dropdown">
        <NavDropdown.Item href="electro-acoustic">Electro-Acoustic</NavDropdown.Item>
        <NavDropdown.Item href="instrumental">Instrumental</NavDropdown.Item>
        <NavDropdown.Item href="collaborations">Collaborations</NavDropdown.Item>
        <NavDropdown.Item href="scores">Scores</NavDropdown.Item>
        <NavDropdown.Item href="texts">Texts</NavDropdown.Item>



      </NavDropdown>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
</Router>

    <div>
    <h5 style={{
      color:"black", 
      fontSize: "300%",
      fontFamily: "Menlo",
      fontWeight: "normal",
      fontStyle: "normal",
      position: "relative",
      backgroundColor: "white",
    //   backgroundImage: `url(${image1})`, //"#000000",
      opacity: "1.0",   
      marginLeft: "1%",
      marginTop: "1%",
      width: "100%",
      padding: "0px",
      border: '1px solid red'
       }}> 
       Instrumental Works And Improvisations<br></br></h5>
       </div>

       <div style={{ 
              display: "inline-block",
              position: "relative",        
              backgroundColor: "white",
              fontFamily: "Menlo",
              fontWeight: "600",
              fontStyle: "normal", 
              color: "black",
              borderWidth:1,
              marginRigth: "0%",
              marginBottom: "0%",
              heigth: "100%",
              width: "50%",
              border: '1px solid red',
              padding: "0.5%",
              paddingBottom: "0%"

              }}>
              <p>
              {"Escardillos for solo instruments"}
              </p>
              </div>

       <Container justify="center">
       <Row>
         
        <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "10px",
          marginLeft:  "10%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=140320302/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/escardillos-para-clarinete">Escardillos Para Clarinete by Roy F Guzmán</a></iframe>
          </Col>
      

         <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "10px",
          marginLeft:  "10%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=988926118/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/escardillos-para-trompeta">Escardillos Para Trompeta by Roy F Guzmán</a></iframe> 
          </Col>

          <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "10px",
          marginLeft:  "10%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=3571532270/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/escardillos-para-saxof-n">Escardillos Para Saxofón by Roy F Guzmán</a></iframe>
          </Col>

          <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "10px",
          marginLeft:  "10%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=956399468/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/escardillos-para-flauta">Escardillos para Flauta by Roy F Guzmán</a></iframe>
          </Col>


        </Row>
    </Container>

    <div style={{ 
              display: "inline-block",
              position: "relative",        
              backgroundColor: "white",
              fontFamily: "Menlo",
              fontWeight: "600",
              fontStyle: "normal", 
              color: "black",
              borderWidth:1,
              marginRigth: "0%",
              marginBottom: "0%",
              heigth: "100%",
              width: "50%",
              border: '1px solid red',
              padding: "0.5%",
              paddingBottom: "0%"

              }}>
              <p>
              {"Colective Improvisations"}
              </p>
              </div>

              <Container justify="center">
       <Row>

       <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "10px",
          marginLeft:  "10%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=53339679/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/abstracciones-de-la-loiza-con-improvisaci-n">Abstracciones De La Loiza Con Improvisación by Roy F Guzmán, Daniel Ramirez, Luigie Vazquez</a></iframe>
          </Col>

       <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "10px",
          marginLeft:  "10%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=3476397977/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/impro-15-04-21-roy-f-guzm-n-daniel-ramirez-luigie-vazquez">Impro[15-04-21] Roy F Guzmán, Daniel Ramirez, Luigie Vazquez by Roy F Guzmán, Daniel Ramirez, Luigie Vazquez</a></iframe>
          </Col>

       <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "10px",
          marginLeft:  "10%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=2274152333/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/04-12-21-daniel-ramirez-roy-f-guzm-n">[04-12-21] Daniel Ramirez, Roy F Guzmán by Daniel Ramirez, Roy F Guzmán</a></iframe>
        </Col>

       <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "10px",
          marginLeft:  "10%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=4260505046/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/impro-29-03-21-daniel-ramirez-roy-f-guzm-n">Impro[29-03-21] Daniel Ramirez, Roy F Guzmán by Roy F Guzmán, Daniel Ramirez</a></iframe>
        </Col>

       <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "10px",
          marginLeft:  "10%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=2160455226/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/impro-02-12-21-daniel-ramirez-roy-f-guzm-n">Impro[02-12-21] Daniel Ramirez, Roy F Guzmán by Daniel Ramirez, Roy F Guzmán</a></iframe>
        </Col>

       <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "10px",
          marginLeft:  "10%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=2593807833/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/01-24-21-daniel-ramirez-luigie-vasquez-roy-f-guzm-n">[01-24-21] Daniel Ramirez, Luigie Vasquez, Roy F Guzmán by Daniel Ramirez, Luigie Vazquez, Roy F Guzmán</a></iframe>
        </Col>

       <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "10px",
          marginLeft:  "10%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=2023642915/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/impro-13-01-21-daniel-ramirez-roy-f-guzm-n">Impro[13-01-21] Daniel Ramirez, Roy F Guzmán by Daniel Ramirez, Roy F Guzmán</a></iframe>
        </Col>
         
       <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "10px",
          marginLeft:  "10%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=2108809561/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/improvisaci-n-juan-luis-ohalloran-roy-f-guzm-n">Improvisación: Juan Luis O&#39;Halloran, Roy F Guzmán by Juan Luis O&#39;Halloran, Roy F Guzmán</a></iframe>
        </Col>
         
       <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "10px",
          marginLeft:  "10%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=1327203978/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/daniel-ramirez-luigie-vazquez-roy-f-guzm-n-01-05-21">Daniel Ramirez, Luigie Vazquez, Roy F Guzmán [01/05/21] by Daniel Ramirez, Luigie Vazquez, Roy F Guzmán</a></iframe>
        </Col>

        <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "10px",
          marginLeft:  "10%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=1187897579/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/live-impro-juan-luis-ohalloran-luigie-vazquez-roy-f-guzm-n">Live Impro: Juan Luis O&#39;Halloran, Luigie Vazquez, Roy F Guzmán by Roy F Guzmán</a></iframe>
          </Col>
      
          <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "10px",
          marginLeft:  "10%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=1857741448/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/02-07-20-daniel-ramirez-roy-f-guzm-n">02/07/20 Daniel Ramirez, Roy F Guzmán by Roy F Guzmán, Daniel Ramirez</a></iframe>
          </Col>

          <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "10px",
          marginLeft:  "10%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=1964308513/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/nicolas-chientaroli-daniel-clason-roy-f-guzm-n-live-at-oorsprung-series">Nicolas Chientaroli, Daniel Clason, Roy F Guzmán live at Oorsprung Series by Nicolas Chiantaroli, Daniel Clason, Roy F Guzmán</a></iframe>
          </Col>


         <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "10px",
          marginLeft:  "10%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=4100835008/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/daniel-gracia-mario-gracia-roy-guzm-n">Daniel Gracia, Mario Gracia, Roy Guzmán by Roy F Guzmán</a></iframe>
          </Col>


          <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "10px",
          marginLeft:  "10%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=693766321/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/live-impro-daniel-ramirez-luigie-vazquez-roy-f-guzman">Live Impro: Daniel Ramirez, Luigie Vazquez, Roy F Guzman by Daniel Ramirez, Luigie Vazquez, Roy F Guzman</a></iframe>
          </Col>

        </Row>
    </Container>





    <div style={{ 
              display: "inline-block",
              position: "relative",        
              backgroundColor: "white",
              fontFamily: "Menlo",
              fontWeight: "600",
              fontStyle: "normal", 
              color: "black",
              borderWidth:1,
              marginRigth: "0%",
              marginBottom: "0%",
              heigth: "100%",
              width: "50%",
              border: '1px solid red',
              padding: "0.5%",
              paddingBottom: "0%"

              }}>
              <p>
              {"Sin Título - Solo Guitar"}
              </p>
              </div>

              <Container justify="center">
       <Row>

        <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "10px",
          marginLeft:  "10%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=2891453191/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-10">Sin Título #10 by Roy F Guzmán</a></iframe>
        </Col>

        <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "10px",
          marginLeft:  "10%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=11760726/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-9">Sin Título #9 by Roy F Guzmán</a></iframe>
        </Col>

        <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "10px",
          marginLeft:  "10%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=4206467342/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-8">Sin-Título #8 by Roy F Guzmán</a></iframe>
        </Col>

       <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "10px",
          marginLeft:  "10%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=1787931975/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-7">Sin Título #7 by Roy F Guzmán</a></iframe>
        </Col>

       <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "10px",
          marginLeft:  "10%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=4077431155/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-6">Sin Título #6 by Roy F. Guzman Rodriguez</a></iframe>
        </Col>

       <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "10px",
          marginLeft:  "10%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=466208403/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-5">Sin Título #5 by Roy F Guzmán</a></iframe>
        </Col>

       <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "10px",
          marginLeft:  "10%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=3655298087/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-titulo-4-2">Sin Titulo #4 by Roy F Guzman</a></iframe>
        </Col>

        <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "10px",
          marginLeft:  "10%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=1388260202/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-titulo-1-2">Sin Titulo #1 by Roy F Guzman</a></iframe>
        </Col>

       <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "10px",
          marginLeft:  "10%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=49951073/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-titulo-2-2">Sin Titulo #2 by Roy F Guzman</a></iframe>
        </Col>

       <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "10px",
          marginLeft:  "10%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=2159910613/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-titulo-0">Sin Titulo #0 by Roy F Guzman</a></iframe>
        </Col>

        <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "10px",
          marginLeft:  "10%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=1830055459/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/05-21-17">05/21/17 by Roy F Guzmán</a></iframe>
        </Col>
      
          <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "10px",
          marginLeft:  "10%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=501541992/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/04-26-17">04/26/17 by Roy F Guzmán</a></iframe>
          </Col>

          <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "10px",
          marginLeft:  "10%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=2661227548/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/seises-y-aguinaldos">Seises y Aguinaldos by Roy F Guzmán</a></iframe>
          </Col>

         <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "10px",
          marginLeft:  "10%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=4136991643/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/balad-as-s">Balad(as/s) by Roy F Guzmán</a></iframe>
          </Col>

          <Col><iframe style = {{
          display: "inline-block",
          position: "relative",
          border: 0, 
          width: "300px", 
          height: "420px", 
          marginTop: "10px",
          marginLeft:  "10%"}} 
          src="https://bandcamp.com/EmbeddedPlayer/album=1321238036/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/-">+ by Roy F Guzmán</a></iframe>
          </Col>


        </Row>
    </Container>
    
    

   </div>
  
    )
  }

  export default Releases
