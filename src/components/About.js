import React from 'react';
import { Image, Button, Divider, Breadcrumb} from 'antd';
import { CoffeeOutlined, FireOutlined, HomeOutlined, UserOutlined, YoutubeOutlined } from '@ant-design/icons';

function About(props) {

  const center = {
    textAlign: 'center',
    
  }; 
  




  return (
    // <h3>Requested Param: {props.match.params.id}</h3>
    <>
    {/* <div style={center}>
      <h3>Sobre Kaufhaus</h3>
      </div>
      <Divider />
      <p></p> */}
   <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item href="">
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">
            <CoffeeOutlined />
            <span>Mision</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">
            <FireOutlined />
            <span>Vision</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">
            <UserOutlined />
            <span>Quienes somos</span>
          </Breadcrumb.Item>
    </Breadcrumb>
    <Divider> Quienes somos</Divider>
    <p>
    En septiembre de 2003, un Grupo Aleman abre sus locales en Asuncion. Desde su incorporación al Grupo, Das Kaufhaus ha desarrollado un plan de crecimiento y mejora continua, invirtiendo en edificios, maquinarias, equipos, infraestructura, imagen, comunicación y sobre todo, en recursos humanos altamente capacitados. Das Kaufhaus se caracteriza por su plan de expansión, apostando siempre al país y a su gente, generando no sólo nuevas fuentes de trabajo sino también un cambio social, cultural y de consumo; acercando a los consumidores las novedades en tecnología y productos variados, ofreciendo precios verdaderamente competitivos 
    y pensando siempre en la economía familiar.
    </p>
    <Divider orientation="left">Mision</Divider>
    <p>
  Es la proporcionar bienestar a nuestros clientes en un ambiente cálido, cómodo y moderno; contribuyendo de esta manera a mejorar su calidad de vida con buenos productos a bajos precios.
    </p>
    <Divider orientation="right">Vision</Divider>
    <p>
    Ser el Supermercado más efectivo e innovador del país, que cuenta con los profesionales capacitados, para ofrecer a los clientes la mejor atención, ofreciendo diversidad de productos de calidad y accesibles a todos los niveles del país.
    </p>
    </>
  );
}

export default About;