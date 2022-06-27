import React, {useState} from 'react';
import {
    Avatar,
    Button, DatePicker,
    Form,
    Input,
    Select, Upload,
} from 'antd';
import './RegisterContainer.scss'
import {UserOutlined, UploadOutlined} from "@ant-design/icons";
import {useDispatch} from "react-redux";
import {AuthPageContainerTypes, RegisterContainerType} from "../types";
// import {UploadFile} from "antd/es/upload/interface";

// const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};
//
// const normFile = (e: any) => {
//     console.log('Upload event:', e);
//     if (Array.isArray(e)) {
//         return e;
//     }
//     return e?.fileList;
//
// };

const config = {
    rules: [{ type: 'object' as const, message: 'Пожалуйста, выберите время!' }],
};



export const RegisterContainer = ({
   onSubmit,
    // onChangePage
}: RegisterContainerType) => {


    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        const value = {
            ...values,
            'date_of_birth': values['date_of_birth'].format('YYYY-MM-DD'),
        };
        console.log('Received values of form: ', value);
    };

    return (
        <div className={'registerContainer'}>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onSubmit}
                scrollToFirstError
            >
                <div className={'registerContainer__avatar'}>
                    <Avatar size={90} icon={<UserOutlined />}  style={{ marginBottom: 20 }} />

                    {/*<Form.Item*/}
                    {/*    name = 'avatar_image'*/}
                    {/*>*/}
                    {/*</Form.Item>*/}
                </div>

                <Form.Item
                    name="first_name"
                    label="Фамилия"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите вашу фимилию!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="last_name"
                    label="Имя"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите ваше имя!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="additional_name"
                    label="Отчество"
                    hasFeedback
                    rules={[
                        {
                            // required: true,
                            message: 'Пожалуйста, введите ваше отчество!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="username"
                    label="Имя пользователя"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите имя пользователя!',
                            whitespace: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="phone_number"
                    label="Номер телефона"
                    hasFeedback
                    rules={[
                        {
                            // required: true,
                            message: 'Пожалуйста, введите ваш номер телефона!',
                        }]}
                >
                    <Input style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="Почта"
                    hasFeedback
                    rules={[
                        {
                            type: 'email',
                            message: 'Пожалуйста, введите правильный адрес почты!',
                        },
                        {
                            required: true,
                            message: 'Пожалуйста, введите вашу почту!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="date_of_birth"
                    label="День рождения" {...config}
                >
                    <DatePicker style={{ width: '100%' }} format='YYYY-MM-DD'/>
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Пароль"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите ваш пароль!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Повторить пароль"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, подтвердите ваш пароль!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Два введенных вами пароля не совпадают!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" >
                        Регистрация
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
