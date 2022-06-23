import React from 'react';
import './EditProfilePage.scss'
import {Avatar, Button, Form, Input} from "antd";
import {UserOutlined} from "@ant-design/icons";
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import {useNavigate} from "react-router-dom";

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

const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
};



export const EditProfilePage = () => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/profile')
    }
    const [form] = Form.useForm();


    const onFinish = (values: any) => {

        console.log('Received values of form: ', values);
    };

    return (
        <div className={'EditProfilePage'}>
            <div className={'EditProfilePage__back'}>
                <Button type={'primary'} onClick={()=> handleNavigate()}>
                    Назад
                </Button>
                <Button type={'primary'} onClick={()=> handleNavigate()}>
                    Выйти
                </Button>
            </div>
            <div className={'EditProfilePage__container'}>
                <div className={'EditProfilePage__mainInfo'}>
                    <div>
                        <Avatar size={90} icon={<UserOutlined />}  style={{ margin: 20 }} />
                    </div>
                    <div>
                        <div>Иванов Иван</div>
                        <div>user@example.com</div>
                        <div>example@list.ru</div>

                    </div>
                </div>
                <div className={'EditProfilePage__form'}>
                    <Form
                        {...formItemLayout}
                        form={form}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            label="Фамилия"
                            name="additional_name">
                            <Input style={{ width: '100%' }}  defaultValue="Иванов" />
                        </Form.Item>
                        <Form.Item
                            label="Имя"
                            name="first_name">
                            <Input defaultValue="Иван" />
                        </Form.Item>
                        <Form.Item
                            label="Отчество"
                            name="last_name">
                            <Input defaultValue="Иванович" />
                            <Checkbox onChange={onChange}>Отображать отчество в профиле</Checkbox>
                        </Form.Item>
                        <Form.Item
                            label="Имя пользователя"
                            name="username">
                            <Input defaultValue="@ivan" />
                        </Form.Item>
                        <Form.Item
                            label="Почта"
                            name="email">
                            <Input style={{ width: '100%' }}  defaultValue="ivan@example.com" />
                            <Checkbox onChange={onChange}>Отображать почту в профиле</Checkbox>
                        </Form.Item>
                        <Form.Item
                            label="Номер телефона"
                            name="phone_number">
                            <Input style={{ width: '100%' }}  defaultValue="8913201281" />
                            <Checkbox onChange={onChange}>Отображать номер телефона в профиле</Checkbox>

                        </Form.Item>
                        <div className={'EditProfilePage__form-changePassword'}>
                            Изменить пароль
                        </div>
                        <Form.Item
                            name="password"
                            label="Старый пароль"
                            rules={[
                                {
                                    required: true,
                                    message: 'Пожалуйста, введите ваш старый пароль!',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password style={{ width: '100%' }}/>
                        </Form.Item>

                        <Form.Item
                            name="password"
                            label="Новый пароль"
                            rules={[
                                {
                                    required: true,
                                    message: 'Пожалуйста, введите ваш новый пароль!',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password style={{ width: '100%' }}/>
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
                            <Input.Password style={{ width: '100%' }}/>
                        </Form.Item>

                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit">
                                Сохранить
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>

        </div>
    );
};

