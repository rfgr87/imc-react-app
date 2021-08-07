import React from "react";

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel';
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
// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "/src/components/Grid/GridItem.js";

import image1 from "./LasTresLuces1.jpg";
import image2 from "./LasTresLuces2.jpg";
import image3 from "./LasTresLuces3.jpg";
import image4 from "./LasTresLuces4.jpg";

import image5 from "./AbstraccionesJíbaras1.jpg";
import image6 from "./AbstraccionesJíbaras2.jpg";
import image7 from "./AbstraccionesJíbaras3.jpg";
import image8 from "./AbstraccionesJíbaras4.jpg";
import image9 from "./AbstraccionesJíbaras5.jpg";
import image10 from "./AbstraccionesJíbaras6.jpg";

import image11 from "./PactoTaino1.png";

import image12 from "./Bomba oara orquesta y bailadoras.png";

import image13 from "./ConstructosNuevosDe.jpg"

import image14 from "./ParametrosDELevtura.jpg"

import image15 from "./MA1.jpg"
import image16 from "./MA2.jpg"
import image17 from "./MA3.jpg"
import image18 from "./MA4.png"
import image19 from "./MA5.png"
import image20 from "./MA6.png"
import image21 from "./MA7.png"
import image22 from "./MA8.png"
import image23 from "./MA9.png"
import image24 from "./MA10.png"
import image25 from "./MA11.png"
import image26 from "./MA12.png"
import image27 from "./MA13.png"
import image28 from "./MA14.png"
import image29 from "./MA15.png"
import image30 from "./MA16.png"
import image31 from "./MA17.png"
import image32 from "./MA18.png"
import image33 from "./MA19.png"
import image34 from "./MA20.png"
import image35 from "./MA21.png"

import image36 from "./Como-leer-petroglifos-tainos-1.jpg";
import image37 from "./Como-leer-petroglifos-tainos-2.jpg";
import image38 from "./Como-leer-petroglifos-tainos-3.jpg";
import image39 from "./Screen+Shot+2020-10-31+at+8.33.10+PM.png";
import image40 from "./Screen+Shot+2020-10-31+at+8.33.16+PM.png";
import image41 from "./Screen+Shot+2020-10-31+at+8.33.21+PM.png";
import image42 from "./Screen+Shot+2020-10-31+at+8.33.26+PM.png";
import image43 from "./Screen+Shot+2020-10-31+at+8.33.31+PM.png";
import image44 from "./Screen+Shot+2020-10-31+at+8.33.36+PM.png";
import image45 from "./Screen+Shot+2020-10-31+at+8.33.41+PM.png";
import image46 from "./Screen+Shot+2020-10-31+at+8.33.46+PM.png";
import image47 from "./Screen+Shot+2020-10-31+at+8.33.51+PM.png";
import image48 from "./Screen+Shot+2020-10-31+at+8.33.56+PM.png";
import image49 from "./Screen+Shot+2020-10-31+at+8.34.01+PM.png";
import image50 from "./Screen+Shot+2020-10-31+at+8.34.05+PM.png";
import image51 from "./Screen+Shot+2020-10-31+at+8.34.16+PM.png";
import image52 from "./Screen+Shot+2020-10-31+at+8.34.20+PM.png";
import image53 from "./Screen+Shot+2020-10-31+at+8.34.25+PM.png";
import image54 from "./Screen+Shot+2020-10-31+at+8.34.29+PM.png";
import image55 from "./Screen+Shot+2020-10-31+at+8.34.33+PM.png";
import image56 from "./Screen+Shot+2020-10-31+at+8.34.37+PM.png";
import image57 from "./Screen+Shot+2020-10-31+at+8.34.43+PM.png";
import image58 from "./Screen+Shot+2020-10-31+at+8.34.47+PM.png";
import image59 from "./Screen+Shot+2020-10-31+at+8.34.52+PM.png";
import image60 from "./Screen+Shot+2020-10-31+at+8.34.57+PM.png";
import image61 from "./Screen+Shot+2020-10-31+at+8.35.02+PM.png";
import image62 from "./Screen+Shot+2020-10-31+at+8.35.07+PM.png";
import image63 from "./Screen+Shot+2020-10-31+at+8.35.21+PM.png";
import image64 from "./Screen+Shot+2020-10-31+at+8.35.26+PM.png";
import image65 from "./Screen+Shot+2020-10-31+at+8.35.30+PM.png";
import image66 from "./Screen+Shot+2020-10-31+at+8.35.34+PM.png";
import image67 from "./Screen+Shot+2020-10-31+at+8.35.39+PM.png";
import image68 from "./Screen+Shot+2020-10-31+at+8.35.43+PM.png";
import image69 from "./Screen+Shot+2020-10-31+at+8.35.47+PM.png";
import image70 from "./Screen+Shot+2020-10-31+at+8.35.51+PM.png";
import image71 from "./Screen+Shot+2020-10-31+at+8.35.55+PM.png";
import image72 from "./Screen+Shot+2020-10-31+at+8.36.01+PM.png";
import image73 from "./Screen+Shot+2020-10-31+at+8.36.07+PM.png";
import image74 from "./Screen+Shot+2020-10-31+at+8.36.12+PM.png";
import image75 from "./Screen+Shot+2020-10-31+at+8.37.01+PM.png";
import image76 from "./Screen+Shot+2020-10-31+at+8.37.06+PM.png";
import image77 from "./Screen+Shot+2020-10-31+at+8.37.12+PM.png";
import image78 from "./Screen+Shot+2020-10-31+at+8.37.24+PM.png";
import image79 from "./Screen+Shot+2020-10-31+at+8.37.35+PM.png";
import image80 from "./Screen+Shot+2020-10-31+at+8.37.40+PM.png";
import image81 from "./Screen+Shot+2020-10-31+at+8.37.45+PM.png";
import image82 from "./Screen+Shot+2020-10-31+at+8.37.49+PM.png";
import image83 from "./Screen+Shot+2020-10-31+at+8.37.53+PM.png";
import image84 from "./Screen+Shot+2020-10-31+at+8.37.57+PM.png";
import image85 from "./Screen+Shot+2020-10-31+at+8.38.02+PM.png";
import image86 from "./Screen+Shot+2020-10-31+at+8.38.06+PM.png";
import image87 from "./Screen+Shot+2020-10-31+at+8.38.11+PM.png";
import image88 from "./Screen+Shot+2020-10-31+at+8.38.15+PM.png";
import image89 from "./Screen+Shot+2020-10-31+at+8.38.19+PM.png";
import image90 from "./Screen+Shot+2020-10-31+at+8.38.23+PM.png";
import image91 from "./Screen+Shot+2020-10-31+at+8.38.34+PM.png";
import image92 from "./Screen+Shot+2020-10-31+at+8.38.39+PM.png";
import image93 from "./Screen+Shot+2020-10-31+at+8.38.42+PM.png";
import image94 from "./Screen+Shot+2020-10-31+at+8.38.47+PM.png";
import image95 from "./Screen+Shot+2020-10-31+at+8.38.51+PM.png";
import image96 from "./Screen+Shot+2020-10-31+at+8.38.55+PM.png";
import image97 from "./Screen+Shot+2020-10-31+at+8.38.59+PM.png";
import image98 from "./Screen+Shot+2020-10-31+at+8.39.04+PM.png";
import image99 from "./Screen+Shot+2020-10-31+at+8.39.08+PM.png";
import image100 from "./Screen+Shot+2020-10-31+at+8.39.14+PM.png";
import image101 from "./Screen+Shot+2020-10-31+at+8.39.20+PM.png";
import image102 from "./Screen+Shot+2020-10-31+at+8.39.24+PM.png";
import image103 from "./Screen+Shot+2020-10-31+at+8.39.38+PM.png";
import image104 from "./Screen+Shot+2020-10-31+at+8.39.43+PM.png";
import image105 from "./Screen+Shot+2020-10-31+at+8.39.47+PM.png";
import image106 from "./Screen+Shot+2020-10-31+at+8.39.51+PM.png";
import image107 from "./Screen+Shot+2020-10-31+at+8.39.55+PM.png";
import image108 from "./Screen+Shot+2020-10-31+at+8.40.01+PM.png";
import image109 from "./Screen+Shot+2020-10-31+at+8.40.07+PM.png";
import image110 from "./Screen+Shot+2020-10-31+at+8.40.11+PM.png";
import image111 from "./Screen+Shot+2020-10-31+at+8.40.16+PM.png";
import image112 from "./Screen+Shot+2020-10-31+at+8.40.20+PM.png";
import image113 from "./Screen+Shot+2020-10-31+at+8.40.24+PM.png";
import image114 from "./Screen+Shot+2020-10-31+at+8.40.29+PM.png";
import image115 from "./Screen+Shot+2020-10-31+at+8.40.45+PM.png";
import image116 from "./Screen+Shot+2020-10-31+at+8.40.51+PM.png";
import image117 from "./Screen+Shot+2020-10-31+at+8.40.55+PM.png";
import image118 from "./Screen+Shot+2020-10-31+at+8.40.59+PM.png";
import image119 from "./Screen+Shot+2020-10-31+at+8.41.03+PM.png";
import image120 from "./Screen+Shot+2020-10-31+at+8.41.08+PM.png";
import image121 from "./Screen+Shot+2020-10-31+at+8.41.12+PM.png";
import image122 from "./Screen+Shot+2020-10-31+at+8.41.16+PM.png";
import image123 from "./Screen+Shot+2020-10-31+at+8.41.19+PM.png";
import image124 from "./Screen+Shot+2020-10-31+at+8.41.23+PM.png";
import image125 from "./Screen+Shot+2020-10-31+at+8.41.27+PM.png";
import image126 from "./Screen+Shot+2020-10-31+at+8.41.31+PM.png";
import image127 from "./Screen+Shot+2020-10-31+at+8.41.44+PM.png";
import image128 from "./Screen+Shot+2020-10-31+at+8.41.48+PM.png";
import image129 from "./Screen+Shot+2020-10-31+at+8.41.52+PM.png";
import image130 from "./Screen+Shot+2020-10-31+at+8.41.56+PM.png";
import image131 from "./Screen+Shot+2020-10-31+at+8.41.59+PM.png";
import image132 from "./Screen+Shot+2020-10-31+at+8.42.03+PM.png";
import image133 from "./Screen+Shot+2020-10-31+at+8.42.07+PM.png";
import image134 from "./Screen+Shot+2020-10-31+at+8.42.10+PM.png";
import image135 from "./Screen+Shot+2020-10-31+at+8.42.13+PM.png";
import image136 from "./Screen+Shot+2020-10-31+at+8.42.17+PM.png";
import image137 from "./Screen+Shot+2020-10-31+at+8.42.21+PM.png";
import image138 from "./Screen+Shot+2020-10-31+at+8.42.24+PM.png";

import image139 from "./MetaComposition.jpg";
import image140 from "./Meta2.jpg";
import image141 from "./CuadradoVerde.png";

import image142 from "./Como-leer-petroglifos-tainos-1.jpg";
import image143 from "./Como-leer-petroglifos-tainos-2.jpg";
import image144 from "./Como-leer-petroglifos-tainos-3.jpg";

import image145 from "./Screen+Shot+2020-11-19+at+4.36.31+PM.png";
import image146 from "./Screen+Shot+2020-11-19+at+4.36.40+PM.png";
import image147 from "./Screen+Shot+2020-11-19+at+4.36.52+PM.png";
import image148 from "./Screen+Shot+2020-11-19+at+4.39.30+PM.png";
import image149 from "./Screen+Shot+2020-11-19+at+4.39.44+PM.png";
import image150 from "./Screen+Shot+2020-11-19+at+4.39.57+PM.png";
import image151 from "./Screen+Shot+2020-11-19+at+4.40.09+PM.png";
import image152 from "./Screen+Shot+2020-11-19+at+4.40.25+PM.png";
import image153 from "./Screen+Shot+2020-11-19+at+4.40.37+PM.png";
import image154 from "./Screen+Shot+2020-11-19+at+4.40.46+PM.png";
import image155 from "./Screen+Shot+2020-11-19+at+4.40.56+PM.png";
import image156 from "./Screen+Shot+2020-11-19+at+4.41.07+PM.png";
import image157 from "./Screen+Shot+2020-11-19+at+4.41.18+PM.png";
import image158 from "./Screen+Shot+2020-11-19+at+4.41.28+PM.png";
import image159 from "./Screen+Shot+2020-11-19+at+4.41.38+PM.png";
import image160 from "./Screen+Shot+2020-11-19+at+4.41.47+PM.png";
import image161 from "./Screen+Shot+2020-11-19+at+4.41.54+PM.png";
import image162 from "./Screen+Shot+2020-11-19+at+4.48.57+PM.png";
import image163 from "./Screen+Shot+2020-11-19+at+4.49.08+PM.png";
import image164 from "./Screen+Shot+2020-11-19+at+4.49.19+PM.png";
import image165 from "./Screen+Shot+2020-11-19+at+4.49.30+PM.png";
import image166 from "./Screen+Shot+2020-11-19+at+4.49.40+PM.png";
import image167 from "./Screen+Shot+2020-11-19+at+4.50.08+PM.png";
import image168 from "./Screen+Shot+2020-11-19+at+4.50.16+PM.png";
import image169 from "./Screen+Shot+2020-11-19+at+5.05.32+PM.png";
import image170 from "./Screen+Shot+2020-11-19+at+5.05.38+PM.png";
import image171 from "./Screen+Shot+2020-11-19+at+5.05.45+PM.png";
import image172 from "./Screen+Shot+2020-11-19+at+5.05.54+PM.png";

import image173 from "./Petroglifos+Tainos+2+-+Cuadrados+-+Para+Piano+1.jpg";
import image174 from "./Petroglifos+Tainos+2+-+Cuadrados+-+Para+Piano+2.jpg";
import image175 from "./Petroglifos+Tainos+2+-+Cuadrados+-+Para+Piano+3.jpg";
import image176 from "./Petroglifos+Tainos+2+-+Cuadrados+-+Para+Piano+4.jpg";
import image177 from "./Petroglifos+Tainos+2+-+Cuadrados+-+Para+Piano+5.jpg";

import image178 from "./FB_IMG_1540761181753.jpg"

import image179 from "./foto1.jpg";
import image180 from "./foto2.jpg";
import image181 from "./foto3.jpg";
import image182 from "./foto4.jpg";
import image183 from "./foto5.jpg";
import image184 from "./foto6.jpg";
import image185 from "./foto7.jpg";
import image186 from "./foto8.jpg";
import image187 from "./foto9.jpg";
import image188 from "./foto11.jpg";

import image189 from "./144275271_242361870799539_9042826646577602601_o.jpg";
import image190 from "./Analogias Anatopicas.jpg";

import image191 from "./Patrones de Guerra 1.jpg";
import image192 from "./Patrones de Guerra 2.jpg";
import image193 from "./Patrones de Guerra 3.jpg";
import image194 from "./Patrones de Guerra 4.jpg";

import image195 from "./Axioma De Petroglifos Tainos Foto.png";
import image196 from "./Axiomas De Petroglifos Tainos Para Orquestas De Cámara 1.jpg";
import image197 from "./Axiomas De Petroglifos Tainos Para Orquestas De Cámara 2.jpg";
import image198 from "./Axiomas De Petroglifos Tainos Para Orquestas De Cámara 3.jpg";
import image199 from "./Axiomas De Petroglifos Tainos Para Orquestas De Cámara 4.jpg";
import image200 from "./Axiomas De Petroglifos Tainos Para Orquestas De Cámara 5.jpg";
import image201 from "./Axiomas De Petroglifos Tainos Para Orquestas De Cámara 6.jpg";

import image202 from "./AbstraccionesJíbaras1.jpg";
import image203 from "./AbstraccionesJíbaras2.jpg";
import image204 from "./AbstraccionesJíbaras3.jpg";
import image205 from "./AbstraccionesJíbaras4.jpg";
import image206 from "./AbstraccionesJíbaras5.jpg";
import image207 from "./AbstraccionesJíbaras6.jpg";

import image208 from "./Villa Palmera I 1.jpg";
import image209 from "./Villa Palmera I 2.jpg";
import image210 from "./Villa Palmera I 3.jpg";
import image211 from "./Villa Palmera I 4.jpg";
import image212 from "./Villa Palmera I 5.jpg";

import image213 from "./Santurce I 1.jpg";
import image214 from "./Santurce I 2.jpg";
import image215 from "./Santurce I 3.jpg";
import image216 from "./Santurce I 4.jpg";
import image217 from "./Santurce I 5.jpg";
import image218 from "./Santurce I 6.jpg";
import image219 from "./Santurce I 7.jpg";
import image220 from "./Santurce I 8.jpg";
import image221 from "./Santurce I 9.jpg";

import image222 from "./La Perla 1.jpg";
import image223 from "./La Perla 2.jpg";
import image224 from "./La Perla 3.jpg";
import image225 from "./La Perla 4.jpg";
import image226 from "./La Perla 5.jpg";
import image227 from "./La Perla 6.jpg";
import image228 from "./La Perla 7.jpg";
import image229 from "./La Perla 8.jpg";

import image230 from "./Colores for String Quartet with Legend 1.jpg";
import image231 from "./Colores for String Quartet with Legend 2.jpg";
import image232 from "./Colores for String Quartet with Legend 3.jpg";
import image233 from "./Colores for String Quartet with Legend 4.jpg";
import image234 from "./Colores for String Quartet with Legend 5.jpg";
import image235 from "./Colores for String Quartet with Legend 6.jpg";
import image236 from "./Colores for String Quartet with Legend 7.jpg";
import image237 from "./Colores for String Quartet with Legend 8.jpg";
import image238 from "./Colores for String Quartet with Legend 9.jpg";
import image239 from "./Colores for String Quartet with Legend 10.jpg";

import image240 from "./Primitives.png";

import image241 from "./Abstracción Espiritual Boricua Sobre El Pacto Con La Tierra.jpg";

import image242 from "./Escardillos Para Trompeta.jpg";

import image243 from "./PlenaYBomba.png";

import image244 from "./PiezaCaracoles.png";

import image245 from "./Proporciones Extremas.png";

import image246 from "./TrianguloCuadradoCirculo.png";

import image247 from "./Estrella.jpg";

import image248 from "./Arawakos.png";

import image249 from "./Chile.jpg";

import image250 from "./Dax.jpg";

import image251 from "./Balacea1.png";
import image252 from "./Balacea2.jpg";
import image253 from "./Balacea3.jpeg";
import image254 from "./Balacea4.jpg";
import image255 from "./Balacea5.jpg";
import image256 from "./Balacea6.jpg";

import image257 from "./1+Preview+of+“Piece+for+Piano+1+I.JPG”.jpg";
import image258 from "./1+Preview+of+“Piece+for+Piano+1+II.JPG”.jpg";
import image259 from "./1+Preview+of+“Piece+for+Piano+1+III.JPG”.jpg";

import image260 from "./Piano+Piece+2-1.jpg";
import image261 from "./Piano+Piece+2-2.jpg";
import image262 from "./Piano+Piece+2-3.jpg";

import image263 from "./Aurora1.jpg";
import image264 from "./Aurora2.jpg";
import image265 from "./Aurora3.jpg";

import image266 from "./Garabato1.png";
import image267 from "./Garabato2.jpg";
import image268 from "./Garabato3.jpg";

import image269 from "./Azul1.jpg";
import image270 from "./Azul2.jpg";
import image271 from "./Azul3.jpg";

import image272 from "./A+Stupid+Butterfly+1.png";
import image273 from "./A+Stupid+Butterfly+2.png";
import image274 from "./A+Stupid+Butterfly+3.png";
import image275 from "./A+Stupid+Butterfly+4.png";

import image276 from "./Para Los Lagartijos1.jpg";
import image277 from "./Para Los Lagartijos2.jpg";

import image278 from "./96.1.jpeg";
import image279 from "./96.2.jpeg";
import image280 from "./96.3jpeg.jpeg";

import image281 from "./SQII+1.jpg";
import image282 from "./SQII+2.jpg";
import image283 from "./SQII+3.jpg";
import image284 from "./SQII+4.jpg";
import image285 from "./SQII+5.jpg";
import image286 from "./SQII+6.jpg";
import image287 from "./SQII+7.jpg";
import image288 from "./SQII+8.jpg";
import image289 from "./SQII+9.jpg";
import image290 from "./SQII+10.jpg";
import image291 from "./SQII+11.jpg";
import image292 from "./SQII+12.jpg";
import image293 from "./SQII+13.jpg";
import image294 from "./SQII+14.jpg";

import image295 from "./SerieDeObrasSencillas.png";
import image296 from "./AcordesEnSusEscalasInversas.jpg";
import image297 from "./---.jpg";

import image298 from "./numeritos1.jpg";
import image299 from "./numeritos2.jpg";
import image300 from "./numeritos3.jpg";
import image301 from "./numeritos4.jpg";
import image302 from "./numeritos5.jpg";
import image303 from "./numeritos6.jpg";
import image304 from "./numeritos7.jpg";
import image305 from "./numeritos8.jpg";
import image306 from "./numeritos9.jpg";
import image307 from "./numeritos10.jpg";
import image308 from "./numeritos11.jpg";
import image309 from "./numeritos12.jpg";
import image310 from "./numeritos13.jpg";

import image311 from "./Aguinaldo Caguano 1.jpg";
import image312 from "./Aguinaldo Cagueno 2.jpg";
import image313 from "./Aguinaldo Cagueno 3.jpg";
import image314 from "./Aguinaldo Cagueno 4.jpg";
import image315 from "./Aguinaldo Cagueno 5.jpg";
import image316 from "./Aguinaldo Cagueno 6.jpg";
import image317 from "./Aguinaldo Orocoveno 1.jpg";
import image318 from "./Aguinaldo Orocoveno 2.jpg";
import image319 from "./Aguinaldo Orocoveno 3.jpg";
import image320 from "./Aguinaldo Orocoveno 4.jpg";
import image321 from "./Aguinalod Orocoveno 5.jpg";
import image322 from "./Mapeye+1.jpg";
import image323 from "./Mapeye+2.jpg";
import image324 from "./Mapeye+3.jpg";
import image325 from "./Mapeye+4.jpg";
import image326 from "./Mapeye+6.jpg";
import image327 from "./Mapeye+7.jpg";
import image328 from "./Mapeye+8.jpg";
import image329 from "./Seis Cayeyano 1.jpg";
import image330 from "./Seis Cayeyano 2.jpg";
import image331 from "./Seis Cayeyano 3.jpg";
import image332 from "./Seis Cayeyano 4.jpg";
import image333 from "./Seis Cayeyano 5.jpg";
import image334 from "./Seis Cayeyano 6-1.jpg";
import image335 from "./Seis Cayeyano 6-2.jpg";
import image336 from "./Seis Cayeyano 6-3.jpg";
import image337 from "./Seis Fajardeno 1.jpg";
import image338 from "./Seis Fajardeno 2.jpg";
import image339 from "./Seis Fajardeno 3.jpg";
import image340 from "./Seis Fajardeno 4.jpg";
import image341 from "./Seis+Con+Decimas+1.jpg";
import image342 from "./Seis+Con+Decimas+2.jpg";
import image343 from "./Seis+Con+Decimas+3.jpg";
import image344 from "./Seis+Con+Decimas+4.jpg";
import image345 from "./Seis+Con+Decimas+5.jpg";
import image346 from "./Seis+Con+Decimas+6.jpg";
import image347 from "./Seis+Con+Decimas+7.jpg";
import image348 from "./Seis+Con+Decimas+8.jpg";
import image349 from "./Seis+De+Andino+1.jpg";
import image350 from "./Seis+De+Andino+2.jpg";
import image351 from "./Seis+De+Andino+3.jpg";
import image352 from "./Seis+De+Andino+4.jpg";
import image353 from "./Seis+De+Andino+5.jpg";
import image354 from "./Seis+De+Andino+6.jpg";
import image355 from "./Seis+De+Andino+7.jpg";
import image356 from "./Seis+De+Andino+8.jpg";

import image357 from "./Intentos de Mi Organicidad para Orquesta de Cámara 1.jpg";
import image358 from "./Intentos de Mi Organicidad para Orquesta de Cámara 2.jpg";
import image359 from "./Intentos de Mi Organicidad para Orquesta de Cámara 3.jpg";

import image360 from "./Destroying+Imperialist+Ideals.jpg";
import image361 from "./ABC.png";
import image362 from "./Escardillos Para Vientos Maderas y Saxos.png";
import image363 from "./Reconquista.jpg";
import image364 from "./String+quartet+3+-+1.jpg";
import image365 from "./Seis+Cubista.jpg";
import image366 from "./Trio+de+Metales.jpg";
import image367 from "./Cosas+Sencillas+para+uno+o+mas+instrumentos+1.jpg";
import image368 from "./Cosas+Sencillas+para+uno+o+mas+instrumentos+2.jpg";

import image369 from "./Non+Duality+in+Musical+Composition.jpg";
import image370 from "./Non+Duality+in+Musical+Composition+2.jpg";
import image371 from "./Non+Duality+in+Musical+Composition+3.jpg";

import image372 from "./Cosas+Sencillas+para+uno+o+mas+instrumentos+1.jpg";
import image373 from "./Cosas+Sencillas+para+uno+o+mas+instrumentos+2.jpg";

import image374 from "./Para+Los+Mayas+-+2021.jpg";

import image375 from "./Relaciones Lógicas Discretas 1.jpg";
import image376 from "./Relaciones Lógicas Discretas 2.jpg";

import image377 from "./Seises Y Aguinaldos.jpg";

import image378 from "./Rumba pa solista o conjunto de cámara.jpg";


export default function Scores(props) {
    
  return (
    <div style={{ 
        position: "absolute",
        backgroundColor: "white",
        // backgroundColor: 
        backgroundColor: "white",
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

<div style={{
    margin: "10px",
    padding: "10px"}}>

<Container justify="center">
      <Row>  
        <Col>
        <h3>Abstracciones de Puerto Rico para Cuarteto de Cuerdas</h3>
        <iframe style={{border: "0", width: "350px", height: "470px"}} src="https://bandcamp.com/EmbeddedPlayer/album=3480594853/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/abstracciones-de-puerto-rico-para-cuarteto-de-cuerdas">Abstracciones de Puerto Rico para Cuarteto de Cuerdas by Roy F Guzmán</a></iframe>
        </Col>
         <Col><div style={{ 
              position: "relative",
              fontSize: "70%",
              fontFamily: "Menlo",
              fontWeight: "normal",
              fontStyle: "normal",
              fontFamily: "Menlo",
              color: "red",
              borderWidth:2,
              borderColor: 'red',
              margin: "0px",
              width: "100%",
              border: '1px solid black',
              marginBottom: "10px",
              padding: "5%"

              }}>
              <p>
                {"Carolina Pons, Violín"}<br></br>
                {"Nayomi Lozano, Violín"}<br></br>
                {"Lourdes Naomi, Viola"}<br></br>
                {"Gisela Rosa, Cello"}<br></br>
                {"Roy F Guzmán, Composición"}<br></br><br></br>
                {"Abstracciones de Puerto Rico para Cuarteto de Cuerdas "}<br></br><br></br>
                {"Estas piezas son creadas utilizando un procedimiento de composición propio llamado Abstracciones donde se utilizan partituras sonoras y se abstraen estas partituras interpretadas por instrumentistas. Se busca una abstracción obtenida por la imperfecta emulación del material de la partitura sonora, esto ayuda mediante los errores de emulación a pocas leídas tener una abstracción del material y de esta manera obtener un material nuevo."}<br></br><br></br>
                {"Abstracciones y su concepto:"}<br></br><br></br>
                {"El intento como el material de lo nuevo. La formalización de la imperfección y sus artefactos y errores de intentar emular un material sin llegar a lograrlo perfectamente como procedimiento y estética para llegar a una abstracción del mismo siendo la misma abstracción el símbolo y su “real” a la misma vez."}<br></br><br></br>
                {"El proceso de extraer orbitas de información del partituras sonoras viene siendo la renderisación imperfecta de su totalidad, una abstracción de su totalidad con limites diferenciando la misma abstracción de otras posibles abstracciones de la totalidad del caos."}<br></br><br></br>
                {"Ahora la abstracción se convierte en su real. No en un símbolo de su realidad platónica ya que la abstracción en si misma ya es una cosa nueva y diferente de donde vino, la totalidad no significable."}<br></br><br></br>
                {"Este concepto también tiene su incepción y es inspirado en el saqueo ejercido a Puerto Rico. Esto me inspiró a pensar que el formalizar una imperfección y mantener la estética errónea constante logra una innovación y nueva propuesta estética. Abstracciones es mi forma de lograr esta innovación a partir de una imperfección predeterminada y a propósito de emular un material sonoro en este caso grabaciones de campo de varias areas de San Juan en Puerto Rico."}           
              </p>
              </div>   
              </Col>
          </Row>

<Row> 
<Col><div style={{
            border: '1px solid red',

    margin: "0px",
    padding: "0px"}}>
<Carousel fade>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image1}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image2}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image3}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image4}>
    </img> 
    </Media> 
  </Carousel.Item>
</Carousel>
      
</div>
</Col>
</Row>   


<Row> 
    <Col><div style={{
      marginTop: "10px",
    border: '1px solid red',
    margin: "0px",
    padding: "0px"}}>
<Carousel fade>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image5}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image6}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image7}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image8}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image9}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image10}>
    </img> 
    </Media> 
  </Carousel.Item>
</Carousel>
      
</div>
</Col>
</Row>   
         
  <Row>
          <Col>
          <iframe style={{paddingTop: "10px", border: "0", width: "350px", height: "470px"}} src="https://bandcamp.com/EmbeddedPlayer/album=4107089838/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-10-4-20-3">sin-título[10-4-20][3] by Roy F Guzmán</a></iframe>
          </Col>
          <Col><div style={{ 
            marginTop: "10px",
            // paddingTop: "10px",
            padding: "10px",
              position: "relative",
              fontSize: "70%",
              fontFamily: "Menlo",
              fontWeight: "normal",
              fontStyle: "normal",
              fontFamily: "Menlo",
              color: "red",
              borderWidth:2,
              borderColor: 'red',
              margin: "0px",
              width: "100%",
              border: '1px solid black',
              marginBottom: "10px",

              }}>
              <p>
                {"This is a conceptual art music piece based on ideas and abstractions of aesthetic ranges and an aesthetic multidimensional matrix or space that based on a theory of multisemiotism this lack of elaborated material and emphasis on specific idea results in the acquisition of a huge amount of semiotics and meaning related to it. In this case is based on the concept of discrete points, an elemental object in mathematics that are the atomic particles which creates lines, contours and every single thing that exists in a 3 dimensional plane, perhaps multidimensional planes, axises, time, polarities and any other meaning that periodic and consecutive sound events or points might represent."}<br></br><br></br>
                {"This idea can also be related to the spiritual domain of African decent individuals. This aesthetic is found in Jazz and in some of my thoughts on spirituality regarding certain collectives could be seen as an identity of Afro American spirituality that might or might not be in the awarenesses of these individuals."}<br></br><br></br>
                {"In my researches trying to find my identity in this spiritual abstract space I find myself in awareness of this abstract idea that is part of my Puerto Rican heritage. Fusing these abstract formal knowledge and assumptions or deductions of abstract ancient knowledge related to my heritage, ancient cultures like Pre Colombian civilizations, African civilizations and adding these European analysis I was able to find an object that I feel is in accordance with what I might represent as a Puerto Rican artist."}<br></br>
              </p>
              </div>   
              </Col>
        </Row>
    </Container>
</div>

<Container justify="center">
  <Row>
  <Col> 
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image11}>
  </img> 
  </Media> 
  </Col>
  <Col> 
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image12}>
  </img> 
  </Media> 
  </Col>
  </Row>
</Container>
  <Row>
  <Col> 
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image13}>
  </img> 
  </Media> 
  </Col>
  </Row>


  <Container justify="center">
  <Row>
  <Col> 
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image14}>
  </img> 
  </Media> 
  </Col>
 
  <Col><div style={{
      marginTop: "10px",
    border: '1px solid red',
    margin: "0px",
    padding: "0px"}}>
<Carousel fade>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image15}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image16}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image17}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image18}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image19}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image20}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image21}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image22}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image23}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image24}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image25}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image26}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image27}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image28}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image29}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image30}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image31}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image32}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image33}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image34}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image35}>
    </img> 
    </Media> 
  </Carousel.Item>
</Carousel>
      
</div>
</Col>
</Row>  
</Container> 










<Container>
  <Row> 
    <Col><div style={{
      marginTop: "10px",
    border: '1px solid red',
    margin: "0px",
    padding: "0px"}}>

    <Col>
      <h3>Petroglifos Taínos I Para Cuarteto De Cuerdas</h3>
      <iframe style={{border: "0", width: "350px", height: "470px"}} src="https://bandcamp.com/EmbeddedPlayer/album=3236687846/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/petroglifos-ta-nos-i-para-cuarteto-de-cuerdas">Petroglifos Taínos I para Cuarteto de Cuerdas by Roy F Guzmán</a></iframe>
   <div style={{ 
              position: "relative",
              fontSize: "70%",
              fontFamily: "Menlo",
              fontWeight: "normal",
              fontStyle: "normal",
              fontFamily: "Menlo",
              color: "red",
              borderWidth:2,
              borderColor: 'red',
              margin: "0px",
              width: "100%",
              border: '1px solid black',
              marginBottom: "10px",
              padding: "5%"

              }}>
              <p>
                {"Carolina Pons, Violín"}<br></br>
                {"Nayomi Lozano, Violín"}<br></br>
                {"Lourdes Naomi, Viola"}<br></br>
                {"Gisela Rosa, Cello"}<br></br>
                {"Roy F Guzmán, Concepto"}<br></br><br></br>
                {"Petroglifos Taínos I para Cuarteto de Cuerdas"}<br></br><br></br>
                {"Estas obras son interpretaciones instrumentales de diseños Taínos basadas en una serie de sugerencias que consideran los diseños de forma geométrica como también simbólica. Los instrumentistas se dan a la tarea de fijar parámetros musicales que ellos derivan de las deducciones simbólicas y geométricas con una simpleza rudimentaria de manera que se logre concretizar un sonido homogéneo que pudiera diferenciar un petroglifo de otro."}<br></br><br></br>
                {"Se busca encontrar una abstracción sonora no idiomática basada en estos diseños Taínos."}<br></br><br></br>
                {"Las características principales de estos petroglifos son la simpleza, lo simbólico, la abstracción sutil, lo sutilmente figurativo y lo orgánico y circular. Con estas características se busco hacer análogos de esta información a material musical y el resultado tendió a ser segmentos de melodías simples tonales y amables al oído al igual de minimizar la cantidad de notas en algunos diseños para lograr una simpleza que pudiera caracterizar el diseño. No se buscó complejidades rítmicas ni harmónicas por el minimalismo y simpleza que evoca estos diseños pero si una sutil abstracción."}<br></br><br></br>
                {"Es importante tener los diseños de los petroglifos Taínos mientras se escuchan las obras ya que el contenido simplista tiene muchas sensaciones de memorias que pudieran evocar una estética europea de la época clásica. Al tener los diseños disponibles uno puede apreciar la esencia conceptual y abstracta relacionada directamente a estes mismos diseños."}<br></br><br></br>
              </p>
              </div>   
              </Col>
<Carousel fade>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image36}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image37}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image38}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image39}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image40}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image41}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image42}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image43}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image44}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image45}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image46}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image47}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image48}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image49}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image50}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image51}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image52}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image53}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image54}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image55}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image56}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image57}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image58}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image59}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image60}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image61}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image62}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image63}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image64}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image65}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image66}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image67}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image68}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image69}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image70}>
    </img> 
    </Media> 
  </Carousel.Item>

<Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image71}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image72}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image73}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image74}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image75}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image76}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image77}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image78}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image79}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image80}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image81}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image82}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image83}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image84}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image85}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image86}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image87}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image88}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image89}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image90}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image91}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image92}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image93}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image94}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image95}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image96}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image97}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image98}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image99}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image100}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image101}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image102}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image103}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image104}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image105}>
    </img> 
    </Media> 
  </Carousel.Item>

  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image106}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image107}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image108}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image109}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image110}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image111}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image112}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image113}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image114}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image115}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image116}>
    </img> 
    </Media> 
  </Carousel.Item>

<Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image117}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image118}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image119}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image120}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image121}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image122}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image123}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image124}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image125}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image126}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image127}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image128}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image129}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image130}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image131}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image132}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image133}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image134}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image135}>
    </img> 
    </Media> 
  </Carousel.Item>

  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image136}>
    </img> 
    </Media> 
  </Carousel.Item>

  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image137}>
    </img> 
    </Media> 
  </Carousel.Item>

  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image138}>
    </img> 
    </Media> 
  </Carousel.Item>

</Carousel>
      
      
</div>
</Col>

<Col>
  <h3>Meta Compositions</h3>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image139}>
    </img> 
    </Media> 
    <p>{""}</p>
    <Media>
  <img
  
   width="100%"
   height="100%" 
   src={image140}>
    </img> 
    </Media> 
    <h3 styles={{marginTop: "10px"}}>Cuadrado Verde</h3>
  <Media>
    <img
    width="100%"
    height="100%" 
    src={image141}>
    </img> 
  </Media> 
</Col>
</Row>
  <h3>NUEVAS ABSTRACCIONES DE PETROGLIFOS TAÍNOS 2 [CUADRADOS, CÍRCULOS, TRIÁNGULOS, LÍNEAS]</h3>
  <h5>Imagenes de Carlos Martinez Palmer</h5>
<Row>
<Col>
  <Carousel fade>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image142}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image143}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image144}>
    </img> 
    </Media> 
  </Carousel.Item>
</Carousel>
</Col>

<Col>
<Carousel fade>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%" 
   src={image145}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image146}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image147}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image148}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image149}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image150}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image151}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image152}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image153}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image154}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image155}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image156}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image157}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image158}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image159}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image160}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image161}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image162}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image163}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image164}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image165}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image166}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image167}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image168}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image169}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image170}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image171}>
    </img> 
    </Media> 
  </Carousel.Item>
  <Carousel.Item>
  <Media>
  <img
   width="100%"
   height="100%"  
   src={image172}>
    </img> 
    </Media> 
  </Carousel.Item>
</Carousel>
</Col>
</Row>  


<h3>NUEVAS ABSTRACCIONES DE PETROGLIFOS TAÍNOS 2 [CUADRADOS, CÍRCULOS, TRIÁNGULOS, LÍNEAS]</h3>
  <h5>Imagenes de Carlos Martinez Palmer</h5>
  <Row>
  <Col>
    <Carousel fade>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image173}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image174}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image175}>
      </img> 
      </Media> 
    </Carousel.Item>
  
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image176}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image177}>
      </img> 
      </Media> 
    </Carousel.Item>
    </Carousel>
    </Col>
    </Row>

  <Row>
  <Col>
  <h3>PINEAPPLE KREEPY para uno o mas instrumentos</h3>

  <Media>
    <img
     width="100%"
     height="100%"  
     src={image178}>
      </img> 
      </Media> 
</Col>
   

   <Col>
   <h3>Bellezas Del Deterioro</h3>

    <Carousel fade>
    <Carousel.Item>

    <Media>
    <img
     width="100%"
     height="100%" 
     src={image179}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image180}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image181}>
      </img> 
      </Media> 
    </Carousel.Item>
  
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image182}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image183}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image184}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image185}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image186}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image187}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image188}>
      </img> 
      </Media> 
    </Carousel.Item>
    </Carousel>
    </Col>
    </Row>


  <Row>
  <Col>
  <h3>Folklore Abstracto #1</h3>
  <Media>
    <img
     width="100%"
     height="100%"  
     src={image189}>
      </img> 
      </Media> 
  </Col>
  
  <Col>
  <h3>Analogías Anatópicas</h3>
  <Media>
    <img
     width="100%"
     height="100%"  
     src={image190}>
      </img> 
      </Media> 
  </Col>
  </Row>
   
  
  <Row>
  <Col>
  <Carousel fade>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image191}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image192}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image193}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image194}>
      </img> 
      </Media> 
    </Carousel.Item>
    </Carousel>
    </Col>
   
  <Col>
  <h3>Axiomas De Petroglifos Taínos Para Orquesta De Cámara</h3>
  <Carousel fade>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image195}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image196}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image197}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image198}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image199}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image200}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image201}>
      </img> 
      </Media> 
    </Carousel.Item>
    </Carousel>
    </Col>
    </Row>

    <Row>
    <Col>
  <h3>Abstracciones Jíbaras Para Orquesta De Cámara</h3>
  <Carousel fade>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image202}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image203}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image204}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image205}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image206}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image207}>
      </img> 
      </Media> 
    </Carousel.Item>
    </Carousel>
    </Col>
    </Row>

    <Row>
    <Col>
  <h3>Villa Palmera</h3>
  <Carousel fade>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image208}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image209}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image210}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image211}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image212}>
      </img> 
      </Media> 
    </Carousel.Item>
    </Carousel>
    </Col>

    <Col>
  <h3>Santurce</h3>
  <Carousel fade>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image213}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image214}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image215}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image216}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image217}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image218}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image219}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image220}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image221}>
      </img> 
      </Media> 
    </Carousel.Item>
    </Carousel>
    </Col>


  <Col>
  <h3>La Perla</h3>
  <Carousel fade>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image222}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image223}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image224}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image225}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image226}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image227}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image228}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image229}>
      </img> 
      </Media> 
    </Carousel.Item>
    </Carousel>
    </Col>
    </Row>



    <Row>  
        <Col>
        <h3>Música A Lo Pobre - [0​,​1​,​2​,​3​,​4​,​5​,​6​,​7​,​8​,​10​,​12​,​16] para Orquesta</h3>
        <iframe style={{border: "0", width: "350px", height: "470px"}} src="https://bandcamp.com/EmbeddedPlayer/album=4229161614/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/012345678101216-para-orquesta">[0,1,2,3,4,5,6,7,8,10,12,16] para Orquesta by Roy F Guzman</a></iframe>
       
        </Col>
         <Col>
         <h3>Musica A Lo Pobre</h3><br></br>
         <h5>Música A Lo Pobre -  Limitación y Resiliencia como Estética</h5>
         <div style={{ 
              position: "relative",
              fontSize: "70%",
              fontFamily: "Menlo",
              fontWeight: "normal",
              fontStyle: "normal",
              fontFamily: "Menlo",
              color: "red",
              borderWidth:2,
              borderColor: 'red',
              margin: "0px",
              width: "100%",
              border: '1px solid black',
              marginBottom: "10px",
              padding: "5%"

              }}>
              <p>
                {"La limitación y la resiliencia me an interesado muchísimo como motor estético y conceptual. Partir de la frase que la “necesidad es la madre de la invención” me parece un punto de partida muy potente. Algo que me e fijado pensando sobre algunas innovaciones artísticas conceptuales y estéticas relevantes en la historia es que algunas y muchas an sido resultado de alguna limitación de alguna forma. Muchas an sido innovaciones basados en conceptos profundos conceptuales también pero las que personalmente me an interesado son estas estéticas basadas en limitación, de una manera positiva de la palabra. Mejor dicho en la convicción de presentar algo con los medios, destreza y materiales disponibles. Quizás una mejor manera de verlo es “enfoque”, concentración conceptual más que limitación. La creación de un lenguaje, un concepto basado en los recursos disponibles conceptualmente y de material. El Arte-Povera de Italia me parece un buen ejemplo."}<br></br><br></br>
                {"El folclor para mi es un sistema dinámico con una paleta de posibilidades limitadas en relación a todas las disponibles en el mundo musical. Esta limitación crea una consistencia estética que se convierte en un lenguaje, estética y concepto individual y nuevo en relación a todo lo que existe. El guaguancó, la música andina, la música jíbara, en general todos los folklores tienen su paleta de elementos limitados y esto crea una autenticidad e individualidad estética."}<br></br><br></br>
                {"En mi investigación de maestría sobre teoría del caos me llevó a entender la infinitesimalidad, una infinitud hacia lo microscópico de una estructura caótica, o función por dejarlo en el campo matemático, puede ser análogo a las infinitudes de permutaciones de los limitados elementos disponibles. Buscar una abundancia dentro de la limitación. Expandir dentro de las limitaciones ya que se demuestra haber una infinitud de posibilidades dentro de ese rango de elementos. Este tipo de especialización y técnica de innovación estética se puede encontrar en el minimalismo. Se trata de un maximalismo dentro de un minimalismo. Morton Feldman es un gran ejemplo pero casi todos los compositores se an dedicado a una paleta limitada de posibilidades estéticas o conceptuales permutando las variables de los mismos con excepción a algunos que an recorrido diferentes estéticas como Ligeti."}<br></br><br></br>
                {"Tomar esta situación precaria como motor estético y expandir dentro de el rango limitado usando la infinitud de permutaciones posibles de las variables accesibles musicales e investigar hacia lo microscópico. Una diferencia mínima se convertirá en una con relevancia e impacto enorme dentro del rango. Usar la situación actual a nuestra ventaja artística. Un ejemplo sería de hacer un tipo de Música a Lo Pobre por tomar prestado de la corriente artística Italiana y de un plato riquísimo Peruano que lleva el adjetivo “A Lo Pobre”."}<br></br><br></br>
                {"Pues aquí la creación músical se llevaría a cabo en las pocas horas disponibles que un compositor en Puerto Rico que se niega a la institucionalización y burocracia de la música, para lograr una liberación y pureza artística ilimitada tuviera teniendo en su diario vivir un trabajo cualquiera para sobrevivir. El costo de lograr presentar las obras en algún espacio alternativo incluyendo los ensayos debe ser lo mínimo. Esto conlleva a concluir unas posibles características."}<br></br><br></br>
                {"Música a Lo Pobre"}<br></br>
                {"1- Concepto, un ejemplo ligado a su nombre es la resiliencia, “hacer mucho con poco” y la limitación."}<br></br>
                {"2- Fácil de ejecutar. Poca o ninguna necesidad de ensayo."}<br></br>
                {"3- Técnicas composicionales que logren terminar una obra con el tiempo mínimo de tiempo"}<br></br>
                {"4- El uso de gráficas, fotografías, notación tradicional mixta con no tradicional etc."}<br></br>
                {"5- El uso de algorítmos y/o instrucciones en texto."}<br></br>
                {"6- El uso de leyendas si se quiere guiar la lectura de gráficas y fotografías del instrumentista a niveles más específicos."}<br></br>
                {"7- El uso de la improvisación, guiada o libre."}<br></br>
                {"8- El uso de partituras sonoras."}<br></br>
                {"9- Y las que se le ocurra utilizar que logre su objetivo en su tiempo limitado."}<br></br><br></br>
                {"Todas estas técnicas tienen el potencial de lograr una variedad enorme de estéticas, desde estéticas caóticas, desordenadas y densas hasta estéticas delicadas y aparentemente ordenadas y meticulosas."}<br></br><br></br>
                {"La posibilidad de aceptar la presentación de obras hechas por medios alternativos a la presentación en vivo de una obra se abre. El uso de la computadora para sonificar material composicional es un recurso accesible para el compositor que requiere de muchos instrumentistas para poder tocar su obra."}<br></br><br></br>
                {"De esta manera es rentable el acto de componer y de presentar trabajos y crea un movimiento, hasta una estética que abraza las vicisitudes de la situación cultural y socio económica del país y las puede expresar en composiciones musicales logrando una estética particular basada en una resiliencia ante la situación."}           
              </p>
              </div>   
              </Col>
          </Row>

  <Row>
  <Col>
  <h3>Colores Para Cuarteto De Cuerdas</h3>
  <Carousel fade>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image230}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image231}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image232}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image233}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image234}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image235}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image236}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image237}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image238}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image239}>
      </img> 
      </Media> 
    </Carousel.Item>
    </Carousel>
    </Col>
    <Col>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image240}>
      </img> 
      </Media> 
    </Col>
    </Row>


    <Row>
    <Col>
    <h3>Abstracción Espiritual Contemporánea Boricua Sobre El Pacto Con La Tierra</h3>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image241}>
      </img> 
      </Media> 
    </Col>
    </Row>

    <Row>  
        <Col>
        <h3>Escardillos Para Trompeta</h3>
        <iframe style={{border: "0", width: "350px", height: "470px"}} src="https://bandcamp.com/EmbeddedPlayer/album=988926118/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/escardillos-para-trompeta-juan-luis-ohalloran">Escardillos Para Trompeta - Juan Luis O&#39;Halloran by Roy F Guzmán</a></iframe>
        </Col>
         <Col>
         <h3>Escardillos Para Trompeta</h3><br></br>
         <Media>
          <img
           width="100%"
          height="100%" 
            src={image242}>
           </img> 
          </Media> 
         <div style={{ 
              position: "relative",
              fontSize: "70%",
              fontFamily: "Menlo",
              fontWeight: "normal",
              fontStyle: "normal",
              fontFamily: "Menlo",
              color: "red",
              borderWidth:2,
              borderColor: 'red',
              margin: "0px",
              width: "100%",
              border: '1px solid black',
              marginBottom: "10px",
              padding: "5%"

              }}>
              <p>
                {"Trompetista - Juan Luis O'Halloran"}<br></br><br></br>
                {"Composición - Roy F Guzmán"}<br></br><br></br>
                {"Esta obra es una de las obras catalogadas como parte de la corriente llamada Música A Lo Pobre. Se explora los sonidos de una imperfección técnica logrando una virtuosidad dentro de este sonido de artefactos producidos por el enfoque en este espacio entre las técnicas tradicionales y las técnicas extendidas. Este area sonora se enfoca en no resaltar ni la perfección de un sonido tradicional ni la perfección de las meticulosas técnicas extendidas si no que explora la sonoridad cruda, sucia y de artefactos indeterminados producidos por el enfoque técnico de la utilización de movimientos físicos del instrumentista en ves de la musicalidad. Se explora la limitación, la crudeza, la resiliencia y el sonido abstracto folklórico de este instrumento."}<br></br><br></br>
                {"La obra esta escrita gráficamente donde se enfatiza cambios de presión de aire y movimientos aleatorios de los dedos en cualquier rango de distancia de los pistones. Se enfatiza en morfológicas complejas y el artefacto de saltos de harmónicos. El trompetista está encargado de ensamblar la estructura basada en unas indicaciones de velocidad, una gráfica multidimensional y su libre albedrío e interpretación de la partitura gráfica."}<br></br>
              </p>
              </div>   
              </Col>
          </Row>


        <Row>  
         <Col>
         <Media>
          <img
           width="100%"
          height="100%" 
            src={image243}>
           </img> 
          </Media> 
          </Col>
          <Col>
         <Media>
          <img
           width="100%"
          height="100%" 
            src={image244}>
           </img> 
          </Media> 
          </Col>
          </Row>
          <Row>
          <Col>
         <Media>
          <img
           width="100%"
          height="100%" 
            src={image245}>
           </img> 
          </Media> 
          </Col>
          <Col>
         <Media>
          <img
           width="100%"
          height="100%" 
            src={image246}>
           </img> 
          </Media> 
          </Col>
        </Row>

        <Row>  
        <Col>
        <h3>Estrella Para Orquesta</h3>
        <iframe style={{border: "0", width: "350px", height: "470px"}} src="https://bandcamp.com/EmbeddedPlayer/album=521323084/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/estrella-para-orquesta">Estrella para Orquesta by Roy F Guzman</a></iframe>
        
        </Col>
         <Col>
         <h3>Estrella Para Orquesta</h3><br></br>
         <Media>
          <img
           width="100%"
          height="100%" 
            src={image247}>
           </img> 
          </Media> 
         <div style={{ 
              position: "relative",
              fontSize: "70%",
              fontFamily: "Menlo",
              fontWeight: "normal",
              fontStyle: "normal",
              fontFamily: "Menlo",
              color: "red",
              borderWidth:2,
              borderColor: 'red',
              margin: "0px",
              width: "100%",
              border: '1px solid black',
              marginBottom: "10px",
              padding: "5%"

              }}>
              <p>
                {"Estrella es una pieza para orquesta basada en Guaguancó. Cada instrumento empieza tocando Guaguancó sobre una clave individual para cada uno. Esta clave se modula rápidamente expandiéndola convirtiendo el último ataque de la clave en el primer ataque del proximo modulada a esa duración mas larga. La clave se contrae convirtiendo el cuarto ataque en el primer ataque de la próxima clave modulándola a esa duración. Hay unas notas escogidas para toda la orquesta y los instrumentos de registro agudo tocan como si fueran quintos, los instrumentos de registro medio tocan como quinto, como tumbadora y como cajón, los instrumentos de registro grave tocan como cajón."}<br></br><br></br>
                {"I es Tenuto "}<br></br>
                {"II es Staccato"}<br></br>
                {"III Variación notas adicionales de los primeros harmónicos de cada una de las cuatro notas principales."}<br></br>
              </p>
              </div>   
              </Col>
          </Row>

          <Row>  
         <Col>
         <Media>
          <img
           width="100%"
          height="100%" 
            src={image247}>
           </img> 
          </Media>     
          </Col>
          <Col>
         <Media>
          <img
           width="100%"
          height="100%" 
            src={image248}>
           </img> 
          </Media> 
          </Col>      
          <Col>
         <Media>
          <img
           width="100%"
          height="100%" 
            src={image249}>
           </img> 
          </Media> 
          </Col>
          <Col>
         <Media>
          <img
           width="100%"
          height="100%" 
            src={image250}>
           </img> 
          </Media> 
          </Col>
        </Row>



  <Row>
  <Col>
  <h3>Balacea Para Piano</h3>
  <Carousel fade>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image251}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image252}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image253}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image254}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image255}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image256}>
      </img> 
      </Media> 
    </Carousel.Item>
    </Carousel>
    </Col> 
    
    
  <Col>
  <h3>Piano Piece #1</h3>
  <Carousel fade>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image257}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image258}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image259}>
      </img> 
      </Media> 
    </Carousel.Item>
    </Carousel>
    </Col> 
    
  <Col>
  <h3>Piano Piece #2</h3>
  <Carousel fade>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image260}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image261}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image262}>
      </img> 
      </Media> 
    </Carousel.Item>
    </Carousel>
    </Col> 
    </Row>

    <Row>  
      <Col>
      <h3>Aurora Para Guitarras</h3>
      <iframe style={{border: "0", width: "350px", height: "470px"}} src="https://bandcamp.com/EmbeddedPlayer/album=2691818908/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/aurora">Aurora by Roy F Guzmán</a></iframe>        
      </Col>
        <Col>
        <Carousel fade>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image263}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image264}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image265}>
      </img> 
      </Media> 
    </Carousel.Item>
    </Carousel>
      
    </Col>
    </Row>

    <Row>  
      <Col>
      <h3>Garabato</h3>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image266}>
      </img> 
      </Media> 
    </Col>
      <Col>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image267}>
      </img> 
      </Media> 
      </Col>
    <Col>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image268}>
      </img> 
      </Media> 
      </Col>
   
    </Row>

    <h3>Azul Para Cuarteto de Cuerdas</h3>
    <Row>  

    <Col>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image269}>
      </img> 
      </Media> 
    </Col>
      <Col>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image270}>
      </img> 
      </Media> 
      </Col>
    <Col>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image271}>
      </img> 
      </Media> 
      </Col>
   
    </Row>

    <h3>A Stupid Butter Fly</h3>
    <Row>  
    <Col>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image272}>
      </img> 
      </Media> 
    </Col>
      <Col>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image273}>
      </img> 
      </Media> 
      </Col>
    <Col>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image274}>
      </img> 
      </Media> 
      </Col>
      <Col>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image275}>
      </img> 
      </Media> 
      </Col>
   
    </Row>

    <h3>Pa Los Lagartijos - Una Melodia Andina</h3>
    <Row>  
    <Col>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image276}>
      </img> 
      </Media> 
    </Col>
      <Col>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image277}>
      </img> 
      </Media> 
      </Col>
    </Row>


    <h3>96 para Guitarra, Trompeta y Contrabajo</h3>
    <Row>  
    <Col>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image278}>
      </img> 
      </Media> 
    </Col>
      <Col>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image279}>
      </img> 
      </Media> 
      </Col>
      <Col>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image280}>
      </img> 
      </Media> 
      </Col>
    </Row>


    <h3>String Quartet # 2</h3>
    <Row>  
    <Col>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image281}>
      </img> 
      </Media> 
    </Col>
      <Col>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image282}>
      </img> 
      </Media> 
      </Col>
    </Row>

    <Row>  
    <Col>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image283}>
      </img> 
      </Media> 
      </Col>
    <Col>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image284}>
      </img> 
      </Media> 
    </Col>
    </Row>

     <Row>
    <Col>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image285}>
      </img> 
      </Media> 
      </Col>
      <Col>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image286}>
      </img> 
      </Media> 
      </Col>
    </Row>

    <Row>  
    <Col>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image287}>
      </img> 
      </Media> 
    </Col>
      <Col>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image288}>
      </img> 
      </Media> 
      </Col>
      </Row>

    <Row>
    <Col>  
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image289}>
      </img> 
      </Media> 
    </Col>
    <Col>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image290}>
      </img> 
      </Media> 
    </Col>
    </Row>

    <Row>
      <Col>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image291}>
      </img> 
      </Media> 
      </Col>
      <Col>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image292}>
      </img> 
      </Media> 
      </Col>
    </Row>

    <Row>  
    <Col>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image293}>
      </img> 
      </Media> 
    </Col>
      <Col>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image294}>
      </img> 
      </Media> 
      </Col>
    </Row>

    <Row>  
    <Col>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image295}>
      </img> 
      </Media> 
    </Col>
      <Col>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image297}>
      </img> 
      </Media> 
      </Col>
    </Row>

    <Row>  
      <Col>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image296}>
      </img> 
      </Media> 
      </Col>
      
      <Col>
      <h3>[numeritos]</h3>
        <Carousel fade>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image298}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image299}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image300}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image301}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image302}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image303}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image304}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image305}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image306}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image307}>
      </img> 
      </Media> 
    </Carousel.Item>  
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image308}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image309}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image310}>
      </img> 
      </Media> 
    </Carousel.Item> 
    </Carousel>
    </Col>
    </Row>

    <Row>
    <Col>
      <h3>Música Axiomática Jíbara</h3>
        <Carousel fade>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image311}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image312}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image313}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image314}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image315}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image316}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image317}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image318}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image319}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image320}>
      </img> 
      </Media> 
    </Carousel.Item>  
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image321}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image322}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image323}>
      </img> 
      </Media> 
    </Carousel.Item> 
    
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image324}>
      </img> 
      </Media> 
    </Carousel.Item> 
    
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image325}>
      </img> 
      </Media> 
    </Carousel.Item> 
    
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image326}>
      </img> 
      </Media> 
    </Carousel.Item> 
    
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image327}>
      </img> 
      </Media> 
    </Carousel.Item> 
    
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image328}>
      </img> 
      </Media> 
    </Carousel.Item> 
    
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image329}>
      </img> 
      </Media> 
    </Carousel.Item> 
    
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image330}>
      </img> 
      </Media> 
    </Carousel.Item> 
    
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image331}>
      </img> 
      </Media> 
    </Carousel.Item> 
    
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image332}>
      </img> 
      </Media> 
    </Carousel.Item> 
    
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image333}>
      </img> 
      </Media> 
    </Carousel.Item> 
    
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image333}>
      </img> 
      </Media> 
    </Carousel.Item> 
    
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image334}>
      </img> 
      </Media> 
    </Carousel.Item> 
    
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image335}>
      </img> 
      </Media> 
    </Carousel.Item> 
    
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image336}>
      </img> 
      </Media> 
    </Carousel.Item> 
    
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image337}>
      </img> 
      </Media> 
    </Carousel.Item> 
    
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image338}>
      </img> 
      </Media> 
    </Carousel.Item> 
    
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image339}>
      </img> 
      </Media> 
    </Carousel.Item> 
    
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image340}>
      </img> 
      </Media> 
    </Carousel.Item> 
    
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image341}>
      </img> 
      </Media> 
    </Carousel.Item> 
    
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image342}>
      </img> 
      </Media> 
    </Carousel.Item> 

    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image343}>
      </img> 
      </Media> 
    </Carousel.Item> 
    
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image344}>
      </img> 
      </Media> 
    </Carousel.Item> 
    
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image345}>
      </img> 
      </Media> 
    </Carousel.Item> 
    
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image346}>
      </img> 
      </Media> 
    </Carousel.Item> 
    
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image347}>
      </img> 
      </Media> 
    </Carousel.Item> 
    
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image348}>
      </img> 
      </Media> 
    </Carousel.Item> 
    
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image349}>
      </img> 
      </Media> 
    </Carousel.Item> 
    
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image350}>
      </img> 
      </Media> 
    </Carousel.Item> 
    
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image351}>
      </img> 
      </Media> 
    </Carousel.Item> 
    
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image352}>
      </img> 
      </Media> 
    </Carousel.Item> 
    
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image353}>
      </img> 
      </Media> 
    </Carousel.Item> 
    
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image354}>
      </img> 
      </Media> 
    </Carousel.Item> 
    
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image355}>
      </img> 
      </Media> 
    </Carousel.Item> 
    
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image356}>
      </img> 
      </Media> 
    </Carousel.Item> 
    </Carousel>
    </Col>

    <Col>
      <h3>Intentos De Mi Organicidad</h3>
        <Carousel fade>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image357}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image358}>
      </img> 
      </Media> 
    </Carousel.Item>
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image359}>
      </img> 
      </Media> 
    </Carousel.Item>
    </Carousel>
    </Col>
    </Row>

    <Row>  
    <Col>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image360}>
      </img> 
      </Media> 
    </Col>
      <Col>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image361}>
      </img> 
      </Media> 
      </Col>
    </Row>

    <Row>  
    <Col>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image362}>
      </img> 
      </Media> 
    </Col>
      <Col>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image363}>
      </img> 
      </Media> 
      </Col>
    </Row>

    <Row>  
    <Col>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image364}>
      </img> 
      </Media> 
    </Col>
      <Col>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image365}>
      </img> 
      </Media> 
      </Col>
    </Row>

    <Row>  
    <Col>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image366}>
      </img> 
      </Media> 
    </Col>
      <Col>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image367}>
      </img> 
      </Media> 
      </Col>
    </Row>

    <Row>  
    <Col>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image368}>
      </img> 
      </Media> 
    </Col>
      <Col>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image369}>
      </img> 
      </Media> 
      </Col>
    </Row>
    <Row>  
    <Col>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image370}>
      </img> 
      </Media> 
    </Col>
      <Col>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image371}>
      </img> 
      </Media> 
      </Col>
    </Row>

    <Row>  
    <Col>
    <Media>
    <img
     width="100%"
     height="100%" 
     src={image372}>
      </img> 
      </Media> 
    </Col>
      <Col>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image373}>
      </img> 
      </Media> 
      </Col>
      </Row>
      <Row>
      <Col>

    <Media>
    <img
     width="100%"
     height="100%"  
     src={image374}>
      </img> 
      </Media> 
      </Col>
      <Col>
      <Carousel>
      <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image375}>
      </img> 
      </Media> 
    </Carousel.Item> 
    
    <Carousel.Item>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image376}>
      </img> 
      </Media> 
    </Carousel.Item> 
    </Carousel>
      </Col>
    </Row>
   <Row>
    <Col>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image377}>
      </img> 
      </Media> 
      </Col>
      </Row>

      <Row>
    <Col>
    <Media>
    <img
     width="100%"
     height="100%"  
     src={image378}>
      </img> 
      </Media> 
      </Col>
      </Row>


</Container> 



</div>
  );
}
