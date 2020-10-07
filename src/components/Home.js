import React from 'react';
import { Card, Carousel, Image, Typography, Button, Divider, Col, Row } from 'antd';
const { Text } = Typography;
const { Meta } = Card;

function Home() {

  const carouselStyle = {
    height: '325px',
    color: '#fff',
    lineHeight: '350px',
    textAlign: 'center'

  };
  const tarjetaStyle = {
    boxSizing: 'border-box',
    textAlign: 'center'
  };
  const contentStyle = {
    textAlign: 'center'
  }

  return (
    // <h3>Requested Param: {props.match.params.id}</h3>
    <>
      <Carousel autoplay>
        <div  >
          <img src="https://casarica.cdn1.dattamax.com/userfiles/images/banners/okt-mdc-web.gif" />
          <br></br>
        </div>
      </Carousel>
      <Carousel autoplay>
        <div  >
          <h3 style={carouselStyle}>
            <img src="https://www.superseis.com.py/images/thumbs/0222864.png" alt="" />
          </h3>
        </div>
        <div>
          <h3 style={carouselStyle}>
            <img src="https://www.superseis.com.py/images/thumbs/0220624.jpeg" alt="" />
          </h3>
        </div>
        <div>
          <h3 style={carouselStyle}>
            <img src="https://www.superseis.com.py/images/thumbs/0218692.jpeg" alt="" />
          </h3>
        </div>
        <div>
          <h3 style={carouselStyle}>
            <img src="https://www.superseis.com.py/images/thumbs/0216001.png" alt="" />
          </h3>
        </div>
      </Carousel>
     
          <br></br>
          
          <h3><b > BIENVENIDO!!</b></h3>
          <b>Disfrute de las nuevas y INCREIBLES ofertas que estan disponibles en nuestro locales! Que esperas!!! Visita ya a la sucursal mas sercana y recibe las mejores OFERTAS!!</b>
          <br></br><br></br>
     
          <Row gutter={[24, 24]}>
          <Col span={12}>
            <div>
              <Card>
                <img src="https://casarica.cdn1.dattamax.com/userfiles/images/banners/casa-ricaroyal-1920x651_1.png"style={{ height: 200 }} />
              </Card> 
              </div>
           </Col>
           <Col span={12}>
            <div >
              <Card>
                <img src="https://casarica.cdn1.dattamax.com/userfiles/images/banners/960x325.jpg"  style={{ height: 200 }}/>
              </Card> 
              </div>
           </Col>
           </Row>
          <h3><b>DESTACADOS</b></h3>
          <Divider />
          <p>Te sugerimos productos con calidad y seguridad, los mejores para vos y tu familia.</p>
          <Row gutter={[16, 16]}>
          <Col span={6}>
            <div style={{ height: 450 }}>
              <Card
                style={{ width: 300 }}>
                <img src="https://casarica.cdn1.dattamax.com/userfiles/images/productos/224/4005808980239.jpg"style={{ height: 200 }} />
              </Card> 
              </div>
           </Col>
           <Col span={6}>
            <div style={{ height: 450 }}>
              <Card
                style={{ width: 300 }}>
                <img src="https://casarica.cdn1.dattamax.com/userfiles/images/productos/448/4005801118851.jpg"  style={{ height: 200 }}/>
              </Card> 
              </div>
           </Col>
          <Col span={6}>
            <div style={{ height: 450 }}>
              <Card
                style={{ width: 300 }}>
                <img src="https://casarica.cdn1.dattamax.com/userfiles/images/productos/448/4005808979806.jpg" style={{ height: 200 }}/>
              </Card> 
              </div>
           </Col>
           <Col span={6}>
            <div style={{ height: 450 }}>
              <Card
                style={{ width: 300 }}>
                <img src="https://casarica.cdn1.dattamax.com/userfiles/images/productos/224/4005808319695.jpg" style={{ height: 200 }}/>
              </Card> 
              </div>
           </Col>
           </Row>
           <div style={tarjetaStyle}>
        <div style={contentStyle}>
        <Button href="https://www.google.com/maps/search/supermercados/@-25.3103163,-57.5621539,12.67z" type="link">Mapa de los Supermercados de Asuncion</Button>
        <Divider />
        <p>Precios válidos únicamente para la versión online.</p>
        <p>Los pedidos a ser entregados en el día se reciben hasta las 16 horas.</p>
        <p>Los pedidos que se hagan los sábados a partir de las 16 horas y los domingos serán entregados el día lunes.</p>
      </div>

      <h4>OPERAMOS CON ESTAS TARJETAS</h4>
      <img src="https://www.superseis.com.py/images/tarjetas1.png" />
      <img src="https://www.superseis.com.py/images/tarjetas2.png" />
      <img src="https://www.superseis.com.py/images/tarjetas4.png" />
      <img src="https://www.superseis.com.py/images/tarjetas9.png" />
    </div>






    </>
  );
}

export default Home;