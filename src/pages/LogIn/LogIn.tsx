import React, {useEffect} from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import './LogIn.scss'
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {identification} from "../../store/actions/authActions";

export const LogIn = () => {

    const dispatch: any = useDispatch()

    // useEffect(() => {
    //     Identification()
    // },[])
    //
    // const Identification = () => {
    // }

    const onFinish = (values: any) => {
        console.log('Полученные значения с формы: ', values);
        dispatch(identification(values.username, values.password, values.remember))
    };

    return (
        <div className={'LogIn'}>
            <h1>Вход</h1>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Пожалуйста, введите ваш логин!' }]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Номер телефона, имя пользователя или почта"
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Пожалуйста, введите ваш пароль!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Пароль"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Запомнить меня</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                        Забыли пароль?
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                    >
                        Войти
                    </Button>
                    <div className={'LogIn__registration'}>
                        Еще нет аккаунта? <NavLink to={'/registration'}>Зарегистрируйтесь!</NavLink>
                    </div>
                </Form.Item>
            </Form>
        </div>
    );
};

