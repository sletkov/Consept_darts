import React from 'react';
import {Button} from "antd";
import {NavLink, useNavigate} from "react-router-dom";
import './MainPage.scss'
import {AuthPageContainerTypes} from "../AuthPage/types";

export const MainPage = () => {

  const navigate = useNavigate()

  const handleNavigate = (option: AuthPageContainerTypes) => {
    console.log(option)
    navigate('/auth', {state: {option}})
  }

    return (
        <div className={'mainPage'}>
            <h2 className='mainPage__title'>CONCEPT DARTS</h2>
            <h1 className='mainPage__subtitle'>Добро пожаловать!</h1>
            <div className={'mainPage_btn'}>
                <Button block onClick={() => handleNavigate(AuthPageContainerTypes.Login)}>Войти</Button>
                <Button block onClick={() => handleNavigate(AuthPageContainerTypes.Register)}>Зарегестрироваться</Button>
                <Button type="link" block>
                    <NavLink to={'/timeline'}>Продолжить как гость</NavLink>
                </Button>
            </div>

        </div>
    );
};

