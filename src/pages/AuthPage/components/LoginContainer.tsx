import React from 'react';
import {Button, Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {AuthContainerType, AuthPageContainerTypes} from "../types";
import './LoginContainer.scss'

export const LoginContainer = ({
 onSubmit,
 onChangePage
}: AuthContainerType) => {

  return (
      <div className={'loginContainer'}>
        <Form
            name="login_form"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onSubmit}
        >
          <Form.Item
              name="username"
              rules={[{ required: true, message: 'Пожалуйста, введите ваш логин!'}]}
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
            <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
            >
              Войти
            </Button>
            <div className={'loginContainer__needRegistration'}>
              Еще нет аккаунта? <div onClick={() => onChangePage(AuthPageContainerTypes.Register)}><span>Зарегистрируйтесь!</span></div>
            </div>
          </Form.Item>
        </Form>
      </div>
  )
}
