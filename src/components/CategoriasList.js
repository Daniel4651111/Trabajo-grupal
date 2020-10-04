import { DeleteFilled, EditFilled, PlusOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row, Space, Table, Tooltip } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function CategoriaList(props) {

    const [types, setCategorias] = useState([]);

    const getCategorias = () => {
        axios.get('/ws/rest/categorias')
            .then(res => {
                setCategorias(res.data);
            })
            //.catch(err => {
             //   console.log(err);
           // });

    }
    useEffect(() => {

        getCategorias();
    })

    const deleteCategoria = (id)=>{
        console.log('DeleteCategoria ID: '+ id);
        //otra opcion es:
        //  axios.delete ('/ws/rest/types/$ {id}')
        axios.delete ('/ws/rest/categorias/' + id)
        .then((res) => {
            alert('Categoría Eliminada');
            getCategorias();
        })
        //  .catch(err => {
        //     alert('No se puede eliminar la categoria');
        //    console.log(err);
        // });
    }

    const columns = [
        // {
        //     title: 'ID',
        //     dataIndex: 'id',
        //     key: 'id'
        // },
        {
            title: 'Nombre',
            dataIndex: 'nombre',
            key: 'nombre'
        },

        {
            title: 'Actions',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Tooltip title="Edit">
                        <Button
                            type="primary"
                            shape="circle"
                            onClick={() => props.history.push(`${props.match.url}/edit/${record.id}`)}
                            icon={<EditFilled />} />
                    </Tooltip>
                    <Tooltip title="Delete">
                        <Button
                            type="danger"
                            shape="circle"
                            onClick={() => deleteCategoria(record.id)}
                            icon={<DeleteFilled />} />
                    </Tooltip>
                </Space>
            ),
        }
    ];
    return (
        <div>
            <Row style={{ padding: 20 }}>
                <Col span={22}></Col>
                <Col span={2}>
                <Tooltip title="New">
                    <Button
                        type="primary" 
                        shape="round" 
                        onClick={() => props.history.push(`${props.match.url}/new`)}
                        icon={<PlusOutlined />}>Nueva Categoría</Button>
                </Tooltip>
                </Col>
            </Row>

            {/* <Table pagination={{ defaultCurrent:1, pageSize: 5, total:tasks.length }} columns={columns} dataSource={tasks} /> */}
            <Row>
             <Col span={12}>
            <Card pagination={{ defaultCurrent:1, pageSize: 5, total:CategoriaList.length }} columns={columns} />
            </Col>
            </Row>
            
        </div>
    )
}
export default CategoriaList;



// import React, { useState, useEffect } from 'react';
// import moment from 'moment';
// import axios from 'axios';


// function CategoriaList(props) {
//     return (
//         <p>HOLA</p>
//     )
// }
// export default CategoriaList;