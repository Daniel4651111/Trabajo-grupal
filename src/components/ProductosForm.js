import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Avatar, Rate, Tag, Space, Tooltip, Button, Input, Select, Form, InputNumber } from 'antd';

import moment from 'moment';
import axios from 'axios';

function ProductosForm(props) {

    const [form] = Form.useForm(); //De ANT, por debajo usa useStates

    useEffect(() => {
        console.log(props.match.params.productoID)
        if (props.match.params.productoID) {
            axios.get('/ws/rest/productos/' + props.match.params.productoID)
                .then((res) => {
                    console.log(res.data);
                    form.setFieldsValue(res.data); //Rellenar campos
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, []);

    //Envío del formulario: put o post
    const submit = (productoForm) => {
        //Actualizar
        if (props.match.productoID) {
            axios.put('/ws/rest/productos/' + props.match.productoID, productoForm)
                .then((res) => {
                    console.log(res);
                    props.history.push('/productos');
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        //Crear
        else {
            axios.post('/ws/rest/productos', productoForm)
                .then((res) => {
                    console.log(res);
                    props.history.push('/productos');
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }

    const onFinish = values => {
        console.log('Success:', values);
        submit(values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    //Diseño del formulario
    return (
        <Form
            style={{ width: '60%', margin: '0 auto' }}
            form={form}
            layout="vertical"
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Código del producto"
                name="codigo"
                rules={[{ required: true, message: 'Required!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Nombre del producto"
                name="nombre"
                rules={[{ required: true, message: 'Required!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Precio unitario del producto"
                name="precioUnitario" //precio_unitario
                rules={[{ required: true, message: 'Required!' }]}
            >
                <InputNumber />
            </Form.Item>

            <Form.Item
                label="Descripción del producto"
                name="descripcion"
                rules={[{ required: true, message: 'Required!' }]}
            >
                <Input />
            </Form.Item>

            {/* OFERTA */}
            {/* FAVORITO */}

            <Form.Item
                label="Cantidad en stock"
                name="cantidadStock" //cantidad_stock
                rules={[{ required: true, message: 'Required!' }]}
            >
                <InputNumber />
            </Form.Item>

                            {/*OPCIÓN 1
                             {/* COMO HACER ESTO PERO GUARDAR CON ID EN LA BD
                            <Form.Item label="Categoría">
                                <Select>
                                    {/* VER COMO DAR LA LISTA DE OPCIONES 
                                    <Select.Option value="demo">Categoría1</Select.Option> 
                                </Select>
                            </Form.Item> */}

            <Form.Item
                label="Categoría"
                name="id_categoria" //idCategoria
                rules={[{ required: true, message: 'Required!' }]}
            >
                <InputNumber />
            </Form.Item>
            

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Row>
                    <Col span={12}>
                        <Button type="default" onClick={() => props.history.push(`/productos`)}>
                            Cancel
                        </Button>
                    </Col>
                    <Col span={12}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form.Item>
        </Form>
    )
}
export default ProductosForm;
