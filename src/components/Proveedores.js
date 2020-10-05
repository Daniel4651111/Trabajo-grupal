import React, { useState, useEffect } from 'react';
import { Table, Row, Col, Space, Divider, Carousel, Image } from 'antd';
import { EditFilled, DeleteFilled, PlusOutlined } from '@ant-design/icons';
import moment from 'moment';
import axios from 'axios';
import { Menu, Dropdown, Button, message, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

function ProveedoresList (props) {

    const [proveedores, setProveedores] = useState([]);

    const getProveedores = () => {
              axios.get('ws/rest/proveedores')
            .then(res => {
                setProveedores(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        getProveedores();
    }, [])

    const deleteProveedor = id => {
        axios.delete(`/ws/rest/proveedor/${id}`)
            .then(res => {
                alert(`Tarea con ID: ${id} borrada correctamente`);
                getProveedores();
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div>
    <Divider>Conoce a nuestros proveedores</Divider>
    <Carousel autoplay>
    <div>
      <h3> <Image width={200} src="http://frutikaonline.com/wp-content/uploads/2016/02/logo.png"/> </h3>
      <Image width={600} src="http://frutikaonline.com/wp-content/uploads/2020/06/nota-junio-julio-multi.jpg"/>
      <Image width={680} src="http://frutikaonline.com/wp-content/uploads/2018/06/Familia-de-productos2.jpg"/>
    </div>
    <div>
    <h3> <Image width={200} src="http://www.nutrihuevos.com.py/application/files/4115/4944/8208/nutriHuevos-full.png"/> </h3>
      <Image width={600} src="http://www.nutrihuevos.com.py/application/files/3415/4953/8326/egg-white-food-protein-162712.jpeg"/>
      <Image width={600} src="http://www.nutrihuevos.com.py/application/files/thumbnails/large/2815/4988/2021/pexels-photo-954014.jpg"/>
    </div>
    <div>
    <h3> <Image width={200} src="https://www.ochsi.com.py/images/logo-footer.png"/> </h3>
      <Image width={600} src="https://www.guiaslatinas.com.py/sfiles/imagenes_empresas/galeriadeimagenes/novex-ochsi/imagen_7_galeria.jpg"/>
      <Image width={600} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPas-D1l18uBnWkBwP-VjLF6M-nuYgycwA0w&usqp=CAU"/>
    </div>
    <div>
    <h3> <Image width={200} src="http://www.santamargarita.com.py/0/images/logo-kurupi.png"/> </h3>
      <Image width={600} src="http://www.santamargarita.com.py/images/portfolio/yorador.jpg"/>
      <Image width={600} src="http://www.santamargarita.com.py/images/portfolio/mentayboldo.jpg"/>
    </div>
  </Carousel>
        </div>
        
    )
}

export default ProveedoresList;
