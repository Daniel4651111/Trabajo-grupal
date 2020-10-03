import React from 'react';
import { Card, Image} from 'antd';

const { Meta } = Card;

function Home() {

  return (
    // <h3>Requested Param: {props.match.params.id}</h3>
    <>
      <div>
        <Image
          //Buscar mejor imagen
          src='https://previews.123rf.com/images/kwangmoo/kwangmoo1610/kwangmoo161002667/64146141-carro-de-compras-con-supermercado-en-borrosa-de-fondo-vista-panor%C3%A1mica.jpg'
          alt='supermercado'
        />
      </div>
      <br></br>
      <h3>Home</h3>
      <p>Bienvenidos...</p>
    </>
  );
}

export default Home;