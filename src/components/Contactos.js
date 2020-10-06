import React from 'react';
import { Form, Input, Button, message, Divider } from 'antd';

function Contactos (props) {


        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 12 },
        };
        const tailLayout = {
            wrapperCol: { offset: 8, span: 12 },
        };

        const onFinish = values => {
          console.log('Success:', values);
        };
      
        const onFinishFailed = errorInfo => {
          console.log('Failed:', errorInfo);
        };
        const center = {
            textAlign: 'center',
          }; 
          const info = () => {
            message.info('Gracias por su opinion!!');
          };
      
        return  (
            <>
        <div style={center}>
            <h1>Agrege sus Comentarios</h1>
            </div>
            <Divider/>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Nombre"
              name="Nombre"
              rules={[{ required: true, message: 'Porfavor escribe tu nombre aqui!' }]}
            >
              <Input />
            </Form.Item>
      
            <Form.Item
              label="Email"
              name="Email"
              rules={[{ required: true, message: 'Porfavor escribe tu email aqui!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Comentario"
              name="Comentario"
              rules={[{ required: true, message: 'Deja tus quejas aqui!' }]}
            >
              <Input />
            </Form.Item>
      
            <Form.Item {...tailLayout}>
              <Button type="primary"  type="Opinion" onClick={info} htmlType="Enviar">
                Enviar
              </Button>
            </Form.Item>
          </Form>
          </>           
    );
}



export default Contactos;