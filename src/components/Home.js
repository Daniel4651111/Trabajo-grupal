import React from 'react';
import { Card, Carousel, Image } from 'antd';

const { Meta } = Card;

function Home() {

  const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '400px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    // <h3>Requested Param: {props.match.params.id}</h3>
    <>
      <Carousel autoplay>
        <div  >
          <h3 style={contentStyle}>
            1
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            2
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            3
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            4
          </h3>
        </div>
      </Carousel>

      {/* <div>
        <Image
          //Buscar mejor imagen
          src='https://previews.123rf.com/images/kwangmoo/kwangmoo1610/kwangmoo161002667/64146141-carro-de-compras-con-supermercado-en-borrosa-de-fondo-vista-panor%C3%A1mica.jpg'
          alt='supermercado'
        />
      </div> */}

      <br></br>
      <h3>Home</h3>
      <p>Bienvenidos...</p>
    </>
  );
}

export default Home;