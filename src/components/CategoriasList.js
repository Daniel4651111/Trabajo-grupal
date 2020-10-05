import { DeleteFilled, EditFilled, EditOutlined, EllipsisOutlined, FolderOutlined, PlusOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Card, Col, Rate, Row, Space, Table, Tag, Tooltip, Image } from 'antd';
import Meta from 'antd/lib/card/Meta';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function CategoriasList(props) {

    const [types, setCategorias] = useState([]);

    const getCategorias = () => {
        axios.get('/ws/rest/categorias')
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

    const deleteCategoria = (id) => {
        console.log('DeleteCategoria ID: ' + id);
        //otra opcion es:
        //  axios.delete ('/ws/rest/types/$ {id}')
        axios.delete('/ws/rest/categorias/' + id)
            .then((res) => {
                alert('Categoría Eliminada');
                getCategorias();
            })
        //  .catch(err => {
        //     alert('No se puede eliminar la categoria');
        //    console.log(err);
        // });
    }
    const cards = [
        {
            linkImag: "https://www.flaticon.es/svg/static/icons/svg/2372/2372138.svg",
            titulo: "Lácteos",
        },
        {
            linkImag: "https://www.flaticon.es/svg/static/icons/svg/2372/2372230.svg",
            titulo: "Panificados",
        },
        {
            linkImag: "https://www.flaticon.es/svg/static/icons/svg/2372/2372295.svg",
            titulo: "Carnicería",
        },
        {
            linkImag: "https://www.flaticon.es/svg/static/icons/svg/2372/2372217.svg",
            titulo: "Bebidas con alcohol",
        },
        {
            linkImag: "https://www.flaticon.es/svg/static/icons/svg/2372/2372301.svg",
            titulo: "Vegetales ?",
        },
        {
            linkImag: "https://www.flaticon.es/svg/static/icons/svg/2372/2372284.svg",
            titulo: "Verdulería",
        },
        {
            linkImag: "https://www.flaticon.es/svg/static/icons/svg/2372/2372149.svg",
            titulo: "Bebidas sin alcohol",
        },
        {
            linkImag: "https://www.flaticon.es/svg/static/icons/svg/2372/2372150.svg",
            titulo: "Frutería",
        },
        {
            linkImag: "https://www.flaticon.es/svg/static/icons/svg/2372/2372196.svg",
            titulo: "Limpieza",
        },
        {
            linkImag: "https://www.flaticon.es/svg/static/icons/svg/2372/2372182.svg",
            titulo: "Mascotas",
        },
        {
            linkImag: "https://www.flaticon.es/svg/static/icons/svg/1987/1987581.svg",
            titulo: "Cosméticos",
        },
        {
            linkImag: "https://www.flaticon.es/svg/static/icons/svg/2856/2856419.svg",
            titulo: "Ropería",
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
                        icon={<PlusOutlined />}>Nueva Categoria
                </Button>
                </Tooltip>
            </div>
            <br></br>
            <div>
                <Row gutter={[25, 25]}>
                    {cards.map(card => {
                        return (
                            <Col span={4}>
                                <Card
                                    style={{ width: 200 }}
                                    cover={
                                        <Image Align="center"
                                            // NO SÉ COMO PONER EN EL CENTRO!
                                            //className ="imagen"
                                            // style={{ Align: "center" }} 
                                            width={60}
                                            alt={card.nombreImag}
                                            src={card.linkImag}
                                        />
                                    }
                                >
                                    <Meta
                                        title={card.titulo}
                                    /><br></br>

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
                                                //onClick={() => deleteCategoria(record.id)}
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

