import React, { useState, useEffect  }  from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Drawer, Button, List, Avatar, Divider, Col, Row, Image } from 'antd';


// function ProveedoresList (props) {
// // const [proveedores, setProveedores] = useState([]);
// const [proveedores, setProveedores] = useState([]);
// // const getProveedores = () => {
// //     axios.get('proyecto_upa/rest/proveedores')
// //         .then(res => {
// //             setProveedores(res.data);
// //         })
// //         .catch(err => {
// //             console.log(err);
// //         });
// // // }

// const getProveedores = () => {
//               axios.get('proyecto_upa/rest/proveedores')
//             .then(res => {
//                 setProveedores(res.data);
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }
//     useEffect(() => {
//         getProveedores();
//     }, [])

// const proveedores = [
//     {
//       image: 'http://frutikaonline.com/wp-content/uploads/2016/02/logo.png',
//       nombre: 'Frutika',
//       razon: '00001223-9',
//       dirección: 'Avda. Aviadores del Chaco 3230 casi Chacoré – Barrio San Jorge – Asunción.',
//       representante: 'Frutika S.A',
//       Email: 'frutika@frutika.com.py'
//     },
//     {
//       image: 'http://www.santamargarita.com.py/0/images/logo-kurupi.png',
//       nombre: 'Yerba Mate Kurupi',
//       razon: '00001223-8',
//       dirección: 'Tte. Victor Valdez esq Salvador Bogado',
//       representante: 'Santa margarita',
//       Email: 'yerbamate@snagem.com'
//     },
//     {
//       image: 'https://www.ochsi.com.py/images/logo-footer.png',
//       nombre: 'Ochi',
//       razon: '00001223-10',
//       dirección: 'Avda. Aviadores del Chaco 3230 casi Chacoré – Barrio San Jorge – Asunción.',
//       representante: 'Ochi S.A',
//       Email: 'frutika@frutika.com.py',
//     },
//     { 
//       image: "http://www.nutrihuevos.com.py/application/files/4115/4944/8208/nutriHuevos-full.png",
//       nombre: 'Nutri huevos',
//       razon: '00001223-9',
//       dirección: 'Avda. Aviadores del Chaco 3230 casi Chacoré – Barrio San Jorge – Asunción.',
//       representante: 'Nutri S.A',
//       Email: 'nutrihuevos@paraguay.com.py',
//     },
//     ]    

class ProveedoresList extends React.Component {
state = { visible: false, selectedProveedor: { }, proveedores : [ ] };
// state = { visible: false, proveedorres: [] };
  showDrawer = (item) => {
    this.setState({
      visible: true,
      selectedProveedor: item
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  componentDidMount() {
// //axios
    axios.get('proyecto_upa/rest/proveedores')
        .then(res => {
         // this.state.setProveedores(res.data);
         console.log(res);
          this.setState({ proveedores : res.data });
        })
        .catch(err => {
            console.log(err);
        });

    //   let dummyData = [
    //     {
    //       name: 'Frutika',
    //     },
    //     {
    //       name: 'Yerba Mate Kurupi',
    //     },
    //     {
    //       name: 'Ochi',
    //     },
    //     {
    //       name: 'Nutri huevos',
    //     }
    //   ]

    //   this.setState({ proveedores : dummyData });
    
   //  this.setState({ proveedores });
  }


  render() {
    return (
      <>
        <List
          dataSource={this.state.proveedores}
          bordered
          renderItem={item => (
            <List.Item
              key={item.id}
              actions={[
                <a onClick={() => this.showDrawer(item)} key={`a-${item.id}`}>
                  More
                </a>,
              ]}
            >
            <List.Item.Meta
                avatar={
                <Avatar src="https://www.uip.org.py/wp-content/uploads/2020/04/pyo.jpg" />
                }
                title={<a href="http://frutikaonline.com/es/inicio">{item.name}</a>}
                description="Empresa Paraguaya"
              />
            </List.Item>
          )}
        />

        <Drawer
          width={640}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        > 
          <Image src="http://frutikaonline.com/wp-content/uploads/2016/02/logo.png" />
          <Divider orientation="left">Datos generales</Divider>   
            <p> {this.state.selectedProveedor.nombre} </p> 
            <p> {this.state.selectedProveedor.representante}</p> 
          <Divider orientation="left">Datos de contacto</Divider> 
          <p> {this.state.selectedProveedor.email} </p> 
          <Divider orientation="left">Ubicación</Divider> 
              <p> {this.state.selectedProveedor.direccion}</p> 
        </Drawer>
        </>
    );
  }
}

export default ProveedoresList;
