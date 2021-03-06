import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import GridContainer from "./GridContainer.js";
import GridItem from "./GridItem.js";
import NavPills from "./NavPills.js";
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

import styles1 from "./profilePage1.js";
// import styles2 from "assets/jss/material-kit-react/views/profilePage1.js";
import styles2 from "./parallaxStyle1.js";


import image1 from "./foto-piezaroy1.jpg";

import image2 from "./foto-decolonial1.jpg";
import profile from "./foto-roy1.png";
import image3 from "./foto-piezaroy1.jpg";


const useStyles1 = makeStyles(styles1);
const useStyles2 = makeStyles(styles2);

export default function ProfilePage1(props) {
  const classes = useStyles1();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgFluid
  );
 
  return (
    <div style={{ 
      position: "absolute",
      backgroundColor: "black",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: "100%",
      height: "9000px",
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
        <NavDropdown.Item href="royfguzman">Roy F Guzm??n</NavDropdown.Item>        
      </NavDropdown>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
</Router>


      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
            <GridContainer justify="left" >
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Roy F Guzm??n</h3>
                    
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
              {"Roy F Guzm??n - Compositor de m??sica electr??nica algor??tmica e instrumental, improvisador y poeta nacido en San Juan, Puerto Rico el 28 de junio de 1987."} <br></br><br></br>
              {"Sus temas de investigaciones previas y actuales son la teor??a del caos para material estructural musical, el tema de ???abstracciones??? trabajado mediante partituras sonoras con instrumentos utiliz??ndolas como una met??fora de la percepci??n de toda la realidad, ???M??sica a Lo Pobre??? que incluye el tema de la resiliencia, la est??tica que produce las limitaciones aut??nticas de los sistemas como universal abstracta del folklor, la no dualidad, el concepto de axiomas de objetos conceptuales y f??sicos, geometr??as abstractas en formas musicales, el estudio y formalizaci??n de la lectura de partituras no tradicionales, la expansi??n de la parametrizaci??n y constructos musicales, la investigaci??n del concepto de Formas Sonoras Pl??sticas donde crea t??cnicas para producir la ilusi??n de un s??lido en un medio temporal con el programa El Cubo De Chuito para manipulaci??n de audio en 3 dimensiones y la creaci??n de m??sica conceptual basada en teor??as sobre la espiritualidad abstracta ind??gena Taina."}<br></br><br></br>
              {"Recientemente explora la Meta Composici??n donde se propone que la abstracci??n perceptual llamada realidad se ve afectada por las estructuras objetuales, constructos nuevos, formas, s??mbolos y textos composicionales."}<br></br><br></br>
              {"Crea Poes??a Concreta Multi Semi??tica donde se explora el multi semiotismo sincr??nico y asincr??nico y la Meta Poes??a Integral donde se explora el color semi??tico como una integral de un multisemiotismo de una gestalt universal popular. Tambi??n investiga y crea deducciones y creaciones sobre la metaf??sica de la espiritualidad ancestral latinoamericana y su potencial desarrollo axiom??tico y abstracto para la creaci??n de nuevos constructos y filosof??as que tienen el potencial de alterar la realidad perceptual."}<br></br><br></br>
              {"Es el director y creador del CMEPR - Colectivo de M??sica Experimental de Puerto Rico y el director y creador del IMC - Instituto de M??sica por Computadora de Puerto Rico"}<br></br><br></br>
              {"Sus obras an sido colocadas en los festivales New York Electro-Acoustic Festival, SurAural en Bolivia, en Laboratorio de Experimentaci??n Aeropuerto en Mexico y an sido tocadas por Jack Quartet, el cuarteto Tabonuco y el CMEPR."}<br></br><br></br>
              {"A contribuido a el sello Archivo 22 bits en Chile con Axiomas Ind??genas, a Yuca Tapes-Puerto Rico, a SuperSpace Records en Per?? y a sido distinguido en el Concertzender en la radio Electronic Frecuencies en Holanda y actualmente trabaja con otros colectivos y compositores en Puerto Rico cultivando la escena de la m??sica contempor??nea y experimental instrumental y electr??nica de Puerto Rico."}<br></br><br></br>
              {"Tiene un Bachillerato en M??sica de Berklee College of Music y estudios de m??sica por computadora y composici??n en el Instituto de Sonolog??a en La Haya, Paises Bajos donde estudi?? con Paul Berg y Richard Barrett. A estudiado en Musiques et Recherches, B??lgica con Benjamin Thigpen y a tomado clases magistrales con Christian Wolff y Barry Truax."}<br></br><br></br>

              <a href="https://www.royfguzman.com">www.royfguzman.com</a><br></br>
              <a href="https://www.cmepr.net">www.cmepr.com</a><br></br>
              <a href="https://www.royguzman.bandcamp.com">www.royguzman.bandcamp.com</a>
              {" "}
              </p>
            
            </div>
            
          </div>
        </div>
        <div style={{ 
          position: "absolute",
          backgroundColor: "black",
          height: "1900px",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: "100%",
          padddingRigth: "45px",
          paddingBottom: "20px",
          margin: 0,
          padding: 0}}>
      <GridContainer justify="center">
              <GridItem  className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="white"
                  tabs={[
                    {
                      tabButton: "M??sica",
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem >
                          <iframe style = {{
                            display: "inline-block",
                            position: "relative",
                            border: 0, 
                            width: "300px", 
                            height: "420px", 
                            marginTop: "0%",
                            marginLeft:  "0%"}} 
                            src="https://bandcamp.com/EmbeddedPlayer/album=97623958/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-28-12-20">sin-t??tulo[28-12-20] by Roy F Guzm??n</a></iframe>
                          
                          <iframe style={{
                            display: "inline-block",
                            position: "relative",
                            border: 0, 
                            width: "300px", 
                            height: "420px", 
                            marginTop: "0%",
                            marginLeft:  "0%"}} 
                            src="https://bandcamp.com/EmbeddedPlayer/album=1694358983/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/m">[M] by Roy F Guzman</a></iframe>   
                         
                          <iframe style={{
                            display: "inline-block",
                            position: "relative",
                            border: 0, 
                            width: "300px", 
                            height: "420px", 
                            marginTop: "0%",
                            marginLeft:  "0%"}} 
                            src="https://bandcamp.com/EmbeddedPlayer/album=4107089838/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-10-4-20-3">sin-t??tulo[10-4-20][3] by Roy F Guzm??n</a></iframe> 
                          <iframe style={{
                            display: "inline-block",
                            position: "relative",
                            border: 0, 
                            width: "300px", 
                            height: "420px", 
                            marginTop: "0%",
                            marginLeft:  "0%"}} 
                            src="https://bandcamp.com/EmbeddedPlayer/album=3480594853/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/abstracciones-de-puerto-rico-para-cuarteto-de-cuerdas">Abstracciones de Puerto Rico para Cuarteto de Cuerdas by Roy F Guzm??n</a></iframe>         
                          <iframe  style={{
      display: "inline-block",

      position: "relative",
      border: 0, 
      width: "300px", 
      height: "420px", 
      marginTop: "0%",
      marginLeft:  "0%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=1768060898/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/x-05-x-08-x-2005-265">x = 0.5+x*(-0.8)*(x/[2.005..2.65]) by Roy F Guzm??n</a></iframe>      

   
    <iframe  style={{
      display: "inline-block",

      position: "relative",
      border: 0, 
      width: "300px", 
      height: "420px", 
      marginTop: "0%",
      marginLeft:  "0%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=4291500311/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/axiom-tica-j-bara-para-cuarteto-de-cuerdas">Axiom??tica J??bara para Cuarteto de Cuerdas by Roy F Guzm??n</a></iframe>    
   
   <iframe style={{
      display: "inline-block",

     position: "relative",
     border: 0, 
     width: "300px", 
      height: "420px", 
     marginTop: "0%",
     marginLeft:  "0%"}} 
     src="https://bandcamp.com/EmbeddedPlayer/album=1983507765/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/congas">congas by Roy F Guzm??n</a></iframe>      
    
    <iframe style={{
      display: "inline-block",

     position: "relative",
     border: 0, 
     width: "300px", 
      height: "420px", 
     marginTop: "0%",
     marginLeft:  "0%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=2664903003/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/tito-2">Tito by Roy F Guzman</a></iframe>
   
    <iframe style={{
      display: "inline-block",

     position: "relative",
      border: 0, 
      width: "300px", 
      height: "420px",  
      marginTop: "0%",
      marginLeft:  "0%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=836594118/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-25-12-20-1">sin-t??tulo[25-12-20][1] by Roy F Guzm??n</a></iframe> 
                  
      <iframe style={{
      display: "inline-block",
      position: "relative",
      border: 0, 
      width: "300px", 
      height: "420px",  
      marginTop: "0%",
      marginLeft:  "0%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=988926118/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/escardillos-para-trompeta">Escardillos Para Trompeta by Roy F Guzm??n</a></iframe>               

      <iframe style={{
      display: "inline-block",
      position: "relative",
      border: 0, 
      width: "300px", 
      height: "420px",  
      marginTop: "0%",
      marginLeft:  "0%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=802527053/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/01-06-21-improvisaciones-con-acorde-n">[01-06-21] Improvisaciones con Acorde??n by Roy F Guzm??n</a></iframe>                    
      <iframe style={{
      display: "inline-block",
      position: "relative",
      border: 0, 
      width: "300px", 
      height: "420px",  
      marginTop: "0%",
      marginLeft:  "0%"}}  
      src="https://bandcamp.com/EmbeddedPlayer/album=2829187536/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/folclor-abstracto-i">Folclor Abstracto I by Roy F Guzm??n</a></iframe>                      
      </GridItem>      
      </GridContainer>
        )
      }
                    // {
                    //   tabButton: "Partituras",
                    //   // tabIcon: Palette,
                    //   tabContent: (
                    //     <GridContainer justify="center">
                    //       <GridItem xs={12} sm={12} md={4}>
                    //         <img
                    //           alt="..."
                    //           src={work1}
                    //           className={navImageClasses}
                    //         />
                    //         <img
                    //           alt="..."
                    //           src={work2}
                    //           className={navImageClasses}
                    //         />
                    //         <img
                    //           alt="..."
                    //           src={work3}
                    //           className={navImageClasses}
                    //         />
                    //       </GridItem>
                    //       <GridItem xs={12} sm={12} md={4}>
                    //         <img
                    //           alt="..."
                    //           src={work4}
                    //           className={navImageClasses}
                    //         />
                    //         <img
                    //           alt="..."
                    //           src={work5}
                    //           className={navImageClasses}
                    //         />
                    //       </GridItem>
                    //     </GridContainer>
                    //   )
                    // },
                    // {
                    //   tabButton: "Textos",
                    //   tabContent: (
                    //     <GridContainer justify="center">
                    //       <GridItem xs={12} sm={12} md={4}>
                    //         <img
                    //           alt="..."
                    //           src={work4}
                    //           className={navImageClasses}
                    //         />
                    //         <img
                    //           alt="..."
                    //           src={studio3}
                    //           className={navImageClasses}
                    //         />
                    //       </GridItem>
                    //       <GridItem xs={12} sm={12} md={4}>
                    //         <img
                    //           alt="..."
                    //           src={work2}
                    //           className={navImageClasses}
                    //         />
                    //         <img
                    //           alt="..."
                    //           src={work1}
                    //           className={navImageClasses}
                    //         />
                    //         <img
                    //           alt="..."
                    //           src={studio1}
                    //           className={navImageClasses}
                    //         />
                    //       </GridItem>
                    //     </GridContainer>
                    //   )
                    // }
                  ]}
                />
              </GridItem>
            </GridContainer>
            </div>
    </div>
  );
}
