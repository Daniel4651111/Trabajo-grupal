import { DeleteFilled, EditFilled, EditOutlined, EllipsisOutlined, FolderOutlined, PlusOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Card, Col, Rate, Row, Space, Table, Tag, Tooltip, Image, Pagination } from 'antd';
import Meta from 'antd/lib/card/Meta';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function CategoriasList(props) {

    const [categorias, setCategorias] = useState([]);

    const getCategorias = () => {
        axios.get('proyecto_upa/rest/categorias')
            .then(res => {
                setCategorias(res.data);
            })
            .catch(err => {
                console.log(err);
            });

    }
    useEffect(() => {

        getCategorias();
    })
    //ver
    const deleteCategoria = id => {
        axios.delete(`/proyecto_upa/rest/categorias/${id}`)
            .then(res => {
                alert(`La categoria con el ID ${id} ha sido borrado correctamente`);
                getCategorias();
            })
            .catch(err => {
                console.log(err);
            });
    }
    return (

        <div>
            <h1><b>CATEGORÍAS</b></h1>
            <div align={'right'}>
                <Tooltip title="Nuevo">
                    <Button
                        type="primary"
                        shape="round"
                        onClick={() => props.history.push(`${props.match.url}/new`)}
                        icon={<PlusOutlined />}>Nueva Categoria
                </Button>
                </Tooltip>
            </div>
            <br></br>
            <div>
                <Row gutter={[25, 25]}>
                    {categorias.map(categoria => {
                        return (
                            <Col span={4}>

                                <Card
                                    style={{ width: 200 }}
                                    cover={
                                        < div className="imagen">
                                            <Image
                                                width={60}
                                                src={categoria.url}
                                            />
                                        </div>
                                    }
                                >
                                    <Meta style={{ textAlign: "center" }}
                                        title={categoria.nombre}
                                    /><br></br>
                                    <div align={'center'}>
                                        <Space>
                                            <Tooltip title="Edit">
                                                <Button
                                                    type="primary"
                                                    shape="circle"
                                                    onClick={() => props.history.push(`${props.match.url}/edit/${categoria.id}`)}
                                                    icon={<EditFilled />} />
                                            </Tooltip>
                                            <Tooltip title="Delete">
                                                <Button
                                                    type="danger"
                                                    shape="circle"
                                                    onClick={() => deleteCategoria(categoria.id)}
                                                    icon={<DeleteFilled />} />
                                            </Tooltip>
                                        </Space>
                                    </div>

                                </Card>

                            </Col>
                        )
                    })}
                </Row>
           
            </div>
        </div>
   
   )

}
export default CategoriasList;