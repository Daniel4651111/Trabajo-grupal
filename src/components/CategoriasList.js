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
    };
    // const cards = [
    //     {
    //         linkImag: "https://www.flaticon.es/svg/static/icons/svg/2372/2372138.svg",
    //         titulo: "Lácteos",
    //     },
    //     {
    //         linkImag: "https://www.flaticon.es/svg/static/icons/svg/2372/2372230.svg",
    //         titulo: "Panadería",
    //     },
    //     {
    //         linkImag: "https://www.flaticon.es/svg/static/icons/svg/2372/2372295.svg",
    //         titulo: "Carnicería",
    //     },
    //     {
    //         linkImag: "https://www.flaticon.es/svg/static/icons/svg/2372/2372217.svg",
    //         titulo: "Bebidas con alcohol",
    //     },
    //     {
    //         linkImag: "https://www.flaticon.es/svg/static/icons/svg/2372/2372284.svg",
    //         titulo: "Verdulería",
    //     },
    //     {
    //         linkImag: "https://www.flaticon.es/svg/static/icons/svg/2372/2372149.svg",
    //         titulo: "Bebidas sin alcohol",
    //     },
    //     {
    //         linkImag: "https://www.flaticon.es/svg/static/icons/svg/2372/2372150.svg",
    //         titulo: "Frutería",
    //     },
    //     {
    //         linkImag: "https://www.flaticon.es/svg/static/icons/svg/2372/2372196.svg",
    //         titulo: "Limpieza",
    //     },
    //     {
    //         linkImag: "https://www.flaticon.es/svg/static/icons/svg/2372/2372182.svg",
    //         titulo: "Mascotas",
    //     },
    //     {
    //         linkImag: "https://www.flaticon.es/svg/static/icons/svg/1987/1987581.svg",
    //         titulo: "Cosméticos",
    //     },
    //     {
    //         linkImag: "https://www.flaticon.es/svg/static/icons/svg/135/135001.svg",
    //         titulo: "Juguetería",
    //     },
    //     {
    //         linkImag: "https://www.flaticon.es/svg/static/icons/svg/2856/2856419.svg",
    //         titulo: "Ropería",
    //     },
    // ]

    // const categoria = [

    //     {
    //         title: 'Imagen',
    //         dataIndex: 'url',
    //         key: 'url'
    //     },
    //     {
    //         title: 'ID',
    //         dataIndex: 'id',
    //         key: 'id'
    //     },

    //     {
    //         title: 'Nombre',
    //         dataIndex: 'nombre',
    //         key: 'nombre'
    //     },

    // ]

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
                {/* <br></br><div align = 'center'><Card Pagination = {{defaultCurrent:1, pageSize: 5, total:categoria.length}} columns={categoria} dataSource={categoria}/> </div> */}
            </div>
        </div>


    )
}
export default CategoriasList;


// const columns = [
//     // {
//     //     title: 'ID',
//     //     dataIndex: 'id',
//     //     key: 'id'
//     // },
//     {
//         title: 'Nombre',
//         dataIndex: 'nombre',
//         key: 'nombre'
//     },

//     {
//         title: 'Actions',
//         key: 'action',
//         render: (text, record) => (
//             <Space size="middle">
//                 <Tooltip title="Edit">
//                     <Button
//                         type="primary"
//                         shape="circle"
//                         onClick={() => props.history.push(`${props.match.url}/edit/${record.id}`)}
//                         icon={<EditFilled />} />
//                 </Tooltip>
//                 <Tooltip title="Delete">
//                     <Button
//                         type="danger"
//                         shape="circle"
//                         onClick={() => deleteCategoria(record.id)}
//                         icon={<DeleteFilled />} />
//                 </Tooltip>
//             </Space>
//         ),
//     }
// ];
// return (
//     <div>
//         <Row style={{ padding: 20 }}>
//             <Col span={22}></Col>
//             <Col span={2}>
//             <Tooltip title="New">
//                 <Button
//                     type="primary" 
//                     shape="round" 
//                     onClick={() => props.history.push(`${props.match.url}/new`)}
//                     icon={<PlusOutlined />}>Nueva Categoría</Button>
//             </Tooltip>
//             </Col>
//         </Row>

{/* <Table pagination={{ defaultCurrent:1, pageSize: 5, total:tasks.length }} columns={columns} dataSource={tasks} /> */ }

{/* Prueba de Card con BD */ }
{/* <Row>
             <Col span={12}>
            <Card pagination={{ defaultCurrent:1, pageSize: 5, total:CategoriaList.length }} columns={columns} />
            </Col>
            </Row> */}

//         </div>
//     )
// }

