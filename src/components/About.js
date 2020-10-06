import React from 'react';
import { Image, Button, Divider} from 'antd';

function About(props) {

  const center = {
    textAlign: 'center',
    
  }; 
  




  return (
    // <h3>Requested Param: {props.match.params.id}</h3>
    <>
    <div style={center}>
      <h3>Sobre Kaufhaus</h3>
      </div>
      <Divider />
      <p>En septiembre de 2003, un Grupo Aleman abre sus locales en Asuncion. Desde su incorporación al Grupo, Das Kaufhaus ha desarrollado un plan de crecimiento y mejora continua, invirtiendo en edificios, maquinarias, equipos, infraestructura, imagen, comunicación y sobre todo, en recursos humanos altamente capacitados. Das Kaufhaus se caracteriza por su plan de expansión, apostando siempre al país y a su gente, generando no sólo nuevas fuentes de trabajo sino también un cambio social, cultural y de consumo; acercando a los consumidores las novedades en tecnología y productos variados, ofreciendo precios verdaderamente competitivos y pensando siempre en la economía familiar.</p>
    </>
  );
}

export default About;