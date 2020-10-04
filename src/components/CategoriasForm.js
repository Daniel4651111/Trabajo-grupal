import React, { useEffect } from 'react';
import { Row, Col, Button, Input, Form, InputNumber } from 'antd';

import axios from 'axios';

function CategoriasForm(props) {

    const [form] = Form.useForm();

    useEffect(() => {
        console.log(props.match.params.categoriaID)
        if (props.match.params.productoID) {
            axios.get('/ws/rest/categorias/' + props.match.params.categoriaID)
                .then((res) => {
                    console.log(res.data);
                    form.setFieldsValue(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, []);

    const submit = (categoriaForm) => {

        if (props.match.productoID) {
            axios.put('/ws/rest/categorias/' + props.match.categoriaID, categoriaForm)
                .then((res) => {
                    console.log(res);
                    props.history.push('/categorias');
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        else {
            axios.post('/ws/rest/categorias', categoriaForm)
                .then((res) => {
                    console.log(res);
                    props.history.push('/categorias');
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
                label="Nombre de la categoría"
                name="nombre"
                rules={[{ required: true, message: 'Required!' }]}
            >
                <Input />
            </Form.Item>


            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Row>
                    <Col span={12}>
                        <Button type="default" onClick={() => props.history.push(`/categorias`)}>
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
export default CategoriasForm;
