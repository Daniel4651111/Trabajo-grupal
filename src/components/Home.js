import React from 'react';
import { Card, Carousel, Image, Button, Divider} from 'antd';

const { Meta } = Card;

function Home() {

  const carouselStyle = {
    height: '325px',
    color: '#fff',
    lineHeight: '350px',
    textAlign: 'center',
    
  };
  const tarjetaStyle = {
    boxSizing: 'border-box',
    textAlign: 'center',
  };
  const contentStyle = {
    textAlign: 'center',
  }

  return (
    // <h3>Requested Param: {props.match.params.id}</h3>
    <>
      <Carousel autoplay>
        <div  >
        <h3 style={carouselStyle}>
        <img src="https://www.superseis.com.py/images/thumbs/0222864.png" alt=""/>
          </h3>
        </div>
        <div>
          <h3 style={carouselStyle}>
          <img src="https://www.superseis.com.py/images/thumbs/0220624.jpeg" alt=""/>
          </h3>
        </div>
        <div>
          <h3 style={carouselStyle}>
          <img src="https://www.superseis.com.py/images/thumbs/0218692.jpeg" alt=""/>
          </h3>
        </div>
        <div>
          <h3 style={carouselStyle}>
          <img src="https://www.superseis.com.py/images/thumbs/0216001.png" alt=""/>
          </h3>
        </div>
      </Carousel>
      <div style={tarjetaStyle}>
<div style={contentStyle}>
      <br></br>
      <h3><b>BIENVENIDO!!</b></h3>
      <b>Disfrute de las nuevas y INCREIBLES ofertas que estan disponibles en nuestro locales! Que esperas!!! Visita ya a la sucursal mas sercana y recibe las mejores OFERTAS!!</b>
      <Divider />
      <Button href= "https://www.google.com/maps/search/supermercados/@-25.3103163,-57.5621539,12.67z" type="link">Mapa de los Supermercados de Asuncion</Button>
      <Divider />
      <p>Precios válidos únicamente para la versión online.</p>
      <p>Los pedidos a ser entregados en el día se reciben hasta las 16 horas.</p>
      <p>Los pedidos que se hagan los sábados a partir de las 16 horas y los domingos serán entregados el día lunes.</p>
</div>

<h4>OPERAMOS CON ESTAS TARJETAS</h4>
  <img src="https://www.superseis.com.py/images/tarjetas1.png"/>
  <img src="https://www.superseis.com.py/images/tarjetas2.png"/>
  <img src="https://www.superseis.com.py/images/tarjetas4.png"/>
  <img src="https://www.superseis.com.py/images/tarjetas9.png"/>
</div>






    </>
  );
}

export default Home;