import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Avatar, Rate, Tag, Space, Tooltip, Button, Pagination } from 'antd';

import moment from 'moment';
import axios from 'axios';
import { DeleteFilled, EditFilled, EditOutlined, EllipsisOutlined, FolderOutlined, PlusOutlined, SearchOutlined, SettingOutlined } from '@ant-design/icons';
import Meta from 'antd/lib/card/Meta';



function ProductosList(props) {
    const [productos, setProductos] = useState([]);

    const getProductos = () => {
        // axios.get('ws/rest/productos/paginated', { params: { pageSize: 2, first: 0 }})
        axios.get('proyecto_upa/rest/productos') //Peticiones al Backend
            .then(res => {
                setProductos(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        getProductos();
    }, [])

    const deleteProducto = id => {
        axios.delete(`/proyecto_upa/rest/productos/${id}`)
            .then(res => {
                alert(`EL producto con el ID ${id} ha sido borrado correctamente`);
                getProductos();
            })
            .catch(err => {
                console.log(err);
            });
    };

    const cards = [
        {
            nombreImag: 'jugueteCocina',
            linkImag: "https://i.pinimg.com/originals/a4/ee/b1/a4eeb1af248f986d9face8e5007b661e.jpg",
            titulo: "COCINA AUTHOGAR",
            descripcion: "Para niños de 8 a 12 años.",
            precio: '200.000 Gs',
            categoria: " Juguete",
        },
        {
            nombreImag: 'panificadoBimbo',
            linkImag: "https://maxiconsumo.com/pub/media/catalog/product/cache/8721ae71a8b276de5ff5b8923d829701/3/4/34350.jpg",
            titulo: "PANIFICADO BIMBO - ARTESANO",
            descripcion: "Pan tipo Artesano - Panchas.",
            precio: '20.000 Gs.',
            categoria: " Panificados",
        },
        {
            nombreImag: 'repollo',
            linkImag: "https://hydroenv.com.mx/catalogo/images/00/hortalizas/Hortalizas_hibridas/hortalizas_OP/col.jpg",
            titulo: "REPOLLO",
            descripcion: "Repollos frescos - De la granja a tu casa.",
            precio: '15.000 Gs.',
            categoria: " Vegetales",
        },
        {
            nombreImag: 'alimentosPerros',
            linkImag: "https://sofiaalpaso.com/site/wp-content/uploads/2018/12/Alimento-Canino-Adulto-Raza-Mediana-Grande-23.jpg",
            titulo: "PODIUM - ALIMENTO PARA PERROS",
            descripcion: "Alimento para perros - 1kg.",
            precio: '30.000 Gs.',
            categoria: " Mascotas",
        },
    ]

    return (

        <div>
            <h1><b>CATALOGO DE PRODUCTOS</b></h1>
            <div align={'right'}>
                <Space>
                    <Tooltip title="Nuevo">
                        <Button
                            type="primary"
                            shape="round"
                            onClick={() => props.history.push(`${props.match.url}/new`)}
                            icon={<PlusOutlined />}>Nuevo Producto
                        </Button>
                    </Tooltip>
                    <Tooltip title="Búsqueda">
                        <Button
                            type="primary"
                            shape="round"
                            icon={<SearchOutlined />}>
                            Buscar producto
                        </Button>
                    </Tooltip>
                </Space>
            </div>
            <br></br>
            <div>
                <Row gutter={[16, 16]}>
                    {productos.map(producto => {
                        return (
                            <Col span={6}>
                                {/* AJUSTAR CONTENIDO ACÁ */}
                                <div style={{ height: 450 }}>
                                    <Card
                                        style={{ width: 300 }}
                                        cover={
                                            <img
                                                alt='imagen'
                                                src={producto.url}
                                                style={{ height: 200 }} //VER COMO HACER AJUSTABLE                                            
                                            />
                                        }
                                    >
                                        {/* VER CON CATEGORIA */}
                                        <div><Tag><FolderOutlined /> {producto.categoria && producto.categoria.nombre}</Tag></div><br></br>
                                        <Meta
                                            title={producto.nombre}
                                            description={producto.descripcion}
                                        /><br></br>
                                        <p>{producto.precioUnitario + ' Gs'}</p>
                                        {/* <Button type="primary" onClick={this.toggle}>
                                            Toggle disabled
                                        </Button>
                                        <Switch disabled={this.state.disabled} defaultChecked />
                                        <br /> */}

                                        <Rate /><br></br>
                                        <div align='center'>
                                            <br></br>
                                            <Space>
                                                <Tooltip title="Nuevo">
                                                    <Button
                                                        type="primary"
                                                        shape="round"
                                                        icon={<PlusOutlined />}>Agregar al carrito
                                                    </Button>
                                                </Tooltip>
                                                <Tooltip title="Edit">
                                                    <Button
                                                        type="primary"
                                                        shape="circle"
                                                        onClick={() => props.history.push(`${props.match.url}/edit/${producto.id}`)}
                                                        icon={<EditFilled />} />
                                                </Tooltip>
                                                <Tooltip title="Delete">
                                                    <Button
                                                        type="danger"
                                                        shape="circle"
                                                        onClick={() => deleteProducto(producto.id)}
                                                        icon={<DeleteFilled />} />
                                                </Tooltip>
                                            </Space>
                                        </div>
                                    </Card>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
                <br></br><div align='center'></div>
            </div>
        </div>

    )
}
export default ProductosList;
