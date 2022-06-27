import React, {useEffect} from "react";
import "./EditProfilePage.scss";
import {Avatar, Button, DatePicker, Form, Input, Modal} from "antd";
import { LeftOutlined, UserOutlined } from "@ant-design/icons";
import {Navigate, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {UpdateUser} from "../../store/actions/userActions";
import {logout} from "../../store/actions/authActions";
import moment from "moment";

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

const config = {
  rules: [{ type: 'object' as const, message: 'Пожалуйста, выберите время!' }],
};



export const EditProfilePage = () => {
  const navigate = useNavigate();
  const dispatch: any = useDispatch();


  const handleNavigate = () => {
    navigate("/profile");
  };

  const [form] = Form.useForm();
  const user = useSelector((state: any) => state.userReducer.user);
  console.log(user)

  // if (values )

  const onFinish = (values: any) => {
    console.log(values)
    dispatch(UpdateUser(values))
    Modal.success({
      title: 'Изменения сохранены. ',
      content: 'Новые данные будут отображаться в профиле.',
    });
    setTimeout(() => {
      navigate(-1)
    },100)
  };

  const Logout = () => {
    dispatch(logout())
    navigate('/')
  }

  if (!user) return <div>Загрузка...</div>;

  return (
    <div className={"EditProfilePage"}>
      <div className={"EditProfilePage__back"}>
        <Button onClick={handleNavigate} icon={<LeftOutlined />}>
          Назад
        </Button>
        <Button type={"primary"} onClick={Logout}>
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
              date_of_birth: moment(user?.date_of_birth, 'YYYY-MM-DD')
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

            {/*<Form.Item*/}
            {/*    name="date_of_birth"*/}
            {/*    label="День рождения" {...config}*/}
            {/*>*/}
            {/*  <DatePicker style={{ width: '100%' }} format='YYYY-MM-DD'/>*/}
            {/*</Form.Item>*/}

            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit" >
                Сохранить
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};
