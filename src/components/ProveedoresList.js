import React, { useState, useEffect } from 'react';
import { Table, Row, Col, Space} from 'antd';
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

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: 'Razón Social',
          dataIndex: 'razon social',
          key: 'razon social',
        },
        {
          title: 'Direccion',
          key: 'direccion',
          dataIndex: 'direccion',
        },
        {
            title: 'Representante',
            key: 'representante',
            dataIndex: 'representante',
        },
        {
            title: 'Email',
            key: 'email',
            dataIndex: 'email',
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
                        onClick={() => deleteProveedor(record.id)} 
                        icon={<DeleteFilled />} />
                </Tooltip>
            </Space>
          ),
        }
    ];

    return (
        <div>
            <Table pagination={{ defaultCurrent:1, pageSize: 5, total:proveedores.length }} columns={columns} dataSource={proveedores} />
        </div>
    )
}

export default ProveedoresList;
