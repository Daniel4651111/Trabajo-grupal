import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Avatar, Rate, Tag, Space, Tooltip, Button, Input, Select, Form, InputNumber } from 'antd';

import moment from 'moment';
import axios from 'axios';
import { Option } from 'antd/lib/mentions';

function ProductosForm(props) {

    const [categorias, setCategorias] = useState([]);
    const [proveedores, setProveedores] = useState([]);
    const [form] = Form.useForm(); //De ANT, por debajo usa useStates

    useEffect(() => {
        //Get Categorias
        axios.get('/ws/rest/categorias')
            .then(res => {
                setCategorias(res.data)
            })
            .catch(err => {
                console.log(err);
            });

        //Get Proveedores
        axios.get('/ws/rest/proveedores')
            .then(res => {
                setProveedores(res.data)
            })
            .catch(err => {
                console.log(err);
            });

        //Get EMPRESA????????

        console.log(props.match.params.productoID)
        if (props.match.params.productoID) {
            axios.get('/proyecto_upa/rest/productos/' + props.match.params.productoID)
                .then((rsp) => {
                    console.log(rsp.data);
                    let productosForm = rsp.data;
                    productosForm.categoria = productosForm.categoria ? productosForm.categoria.id : null;
                    productosForm.proveedor = productosForm.proveedor ? productosForm.proveedor.id : null;
                    productosForm.empresa = productosForm.empresa ? productosForm.empresa.id : null;
                    // form.setFieldsValue(rsp.data); //Rellenar campos
                    form.setFieldsValue(productosForm); //Rellenar campos                    
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, []);

    //Envío del formulario: put o post
    const submit = (productosForm) => {
        productosForm.categoria = {
            id: productosForm.categoria
        }
        productosForm.proveedor = {
            id: productosForm.proveedor
        }
        productosForm.empresa = {
            id: productosForm.empresa
        }
        //Actualizar
        if (props.match.productoID) {
            axios.put('/proyecto_upa/rest/productos/' + props.match.productoID, productosForm)
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
            axios.post('/proyecto_upa/rest/productos', productosForm)
                .then((res) => {
                    console.log(res);
                    alert('exito')
                    props.history.push('/productos');
                })
                .catch((err) => {
                    console.log(err);
                    alert('exito')
                    props.history.push('/productos');
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
        <div>
            <h1><b>Cargar un nuevo producto</b></h1>
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
                    label="Código del producto:"
                    name="codigo"
                    rules={[{ required: true, message: 'Required!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Nombre del producto:"
                    name="nombre"
                    rules={[{ required: true, message: 'Required!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Precio unitario del producto:"
                    name="precioUnitario" //precio_unitario
                    rules={[{ required: true, message: 'Required!' }]}
                >
                    <InputNumber />
                </Form.Item>

                <Form.Item
                    label="Descripción del producto:"
                    name="descripcion"
                    rules={[{ required: true, message: 'Required!' }]}
                >
                    <Input />
                </Form.Item>

                {/* OFERTA */}
                {/* FAVORITO */}

                <Form.Item
                    label="Cantidad en stock:"
                    name="cantidadStock" //cantidad_stock
                    rules={[{ required: true, message: 'Required!' }]}
                >
                    <InputNumber />
                </Form.Item>

                <Form.Item
                    label="Categoría:"
                    name="categoria"
                    rules={[{ required: true, message: 'Required!' }]}
                >
                    <Select style={{ width: '100%' }} onChange={(value) => console.log('handleChangeSelect -> ' + value)}>
                        {
                            categorias.map(categoria => {
                                return (
                                    <Option key={categoria.id} value={categoria.id}>{categoria.nombre}</Option>
                                )
                            })
                        }
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Proveedor:"
                    name="proveedor"
                    rules={[{ required: true, message: 'Required!' }]}
                >                    <Select style={{ width: '100%' }} onChange={(value) => console.log('handleChangeSelect -> ' + value)}>
                        {
                            proveedores.map(proveedor => {
                                return (
                                    <Option key={proveedor.id} value={proveedor.id}>{proveedor.nombre}</Option>
                                )
                            })
                        }
                    </Select>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Row>
                        <Col span={12}>
                            <Button type="primary" htmlType="submit">
                                Confirmar
                        </Button>
                        </Col>
                        <Col span={12}>
                            <Button type="default" onClick={() => props.history.push(`/productos`)}>
                                Cancelar
                        </Button>
                        </Col>
                    </Row>
                </Form.Item>
            </Form>
        </div>
    )
}
export default ProductosForm;
