import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Avatar, Rate, Tag, Space, Tooltip, Button } from 'antd';

import moment from 'moment';
import axios from 'axios';
import { DeleteFilled, EditFilled, EditOutlined, EllipsisOutlined, FolderOutlined, PlusOutlined, SettingOutlined } from '@ant-design/icons';
import Meta from 'antd/lib/card/Meta';



function ProductosList(props) {
    const [productos, setProductos] = useState([]);

    const getProductos = () => {
        // axios.get('ws/rest/productos/paginated', { params: { pageSize: 2, first: 0 }})
        axios.get('ws/rest/productos')
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
        axios.delete(`/ws/rest/productos/${id}`)
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
            nombreImag: 'nombreImag',
            linkImag: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            titulo: "Card title",
            descripcion: "This is the description",
            precio: '45678',
            categoria: " Categoria",
        },
        {
            nombreImag: 'nombreImag',
            linkImag: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            titulo: "Card title",
            descripcion: "This is the description",
            precio: '45678',
            categoria: " Categoria",
        },
        {
            nombreImag: 'nombreImag',
            linkImag: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            titulo: "Card title",
            descripcion: "This is the description",
            precio: '45678',
            categoria: " Categoria",
        },
        {
            nombreImag: 'nombreImag',
            linkImag: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            titulo: "Card title",
            descripcion: "This is the description",
            precio: '45678',
            categoria: " Categoria",
        },
    ]

    return (

        <div>
            <div align={'right'}>
                <Tooltip title="Nuevo">
                    <Button
                        type="primary"
                        shape="round"
                        onClick={() => props.history.push(`${props.match.url}/new`)}
                        icon={<PlusOutlined />}>Nuevo Producto
                </Button>
                </Tooltip>
            </div>
            <br></br>
            <div>
                <Row gutter={[16, 16]}>
                    {cards.map(card => {
                        return (
                            <Col span={6}>
                                <Card
                                    style={{ width: 300 }}
                                    cover={
                                        <img
                                            alt={card.nombreImag}
                                            src={card.linkImag}
                                        />
                                    }
                                // actions={[
                                //     <SettingOutlined key="setting" />,
                                //     <EditOutlined key="edit" />,
                                //     <EllipsisOutlined key="ellipsis" />,
                                // ]}
                                >
                                    <Meta
                                        title={card.titulo}
                                        description={card.descripcion}
                                    /><br></br>
                                    <p>{card.precio}</p>
                                    <div><Tag><FolderOutlined /> {card.categoria}</Tag></div>
                                    <Rate /><br></br>
                                    <Space>
                                        <Tooltip title="Edit">
                                            <Button
                                                type="primary"
                                                shape="circle"
                                                //onClick={() => props.history.push(`${props.match.url}/edit/${record.id}`)} 
                                                icon={<EditFilled />} />
                                        </Tooltip>
                                        <Tooltip title="Delete">
                                            <Button
                                                type="danger"
                                                shape="circle"
                                                //onClick={() => deleteProducto(record.id)}
                                                icon={<DeleteFilled />} />
                                        </Tooltip>
                                    </Space>

                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </div>


    )
}
export default ProductosList;
