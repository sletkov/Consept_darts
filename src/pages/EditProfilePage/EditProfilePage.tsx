import React from "react";
import "./EditProfilePage.scss";
import { Avatar, Button, Form, Input } from "antd";
import { LeftOutlined, UserOutlined } from "@ant-design/icons";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/profile");
  };
  const [form] = Form.useForm();
  const user = useSelector((state: any) => state.userReducer.user);

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  if (!user) return <div>Загрузка...</div>;
  console.log(user);

  return (
    <div className={"EditProfilePage"}>
      <div className={"EditProfilePage__back"}>
        <Button onClick={handleNavigate} icon={<LeftOutlined />}>
          Назад
        </Button>
        <Button type={"primary"} onClick={() => handleNavigate()}>
          Выйти
        </Button>
      </div>
      <div className={"EditProfilePage__container"}>
        <div className={"EditProfilePage__mainInfo"}>
          <div>
            <Avatar size={90} icon={<UserOutlined />} style={{ margin: 20 }} />
          </div>
          <div>
            <div>{user?.first_name}</div>
            <div>{user?.last_name}</div>
            <div>{user?.additional_name}</div>
          </div>
        </div>
        <div className={"EditProfilePage__form"}>
          <Form
            {...formItemLayout}
            form={form}
            onFinish={onFinish}
            initialValues={{
              additional_name: user?.additional_name,
              first_name: user?.first_name,
              last_name: user?.last_name,
              username: user?.username,
              email: user?.email,
              phone_number: user?.phone_number,
            }}
          >
            <Form.Item label="Фамилия" name="additional_name">
              <Input style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item label="Имя" name="first_name">
              <Input />
            </Form.Item>
            <Form.Item label="Отчество" name="last_name">
              <Input />
            </Form.Item>
            <Checkbox onChange={onChange}>
              Отображать отчество в профиле
            </Checkbox>
            <Form.Item label="Имя пользователя" name="username">
              <Input />
            </Form.Item>
            <Form.Item label="Почта" name="email">
              <Input style={{ width: "100%" }} />
            </Form.Item>
            <Checkbox onChange={onChange}>Отображать почту в профиле</Checkbox>
            <Form.Item label="Номер телефона" name="phone_number">
              <Input style={{ width: "100%" }} />
            </Form.Item>
            <Checkbox onChange={onChange}>
              Отображать номер телефона в профиле
            </Checkbox>
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
