import React from 'react';
import {Button} from "antd";
import {NavLink} from "react-router-dom";
import './MainPage.scss'

export const MainPage = () => {
    return (
        <div className={'mainPage'}>
            <h2>CONCEPT DARTS</h2>
            <h1>Добро пожаловать!</h1>
            <div className={'mainPage_btn'}>
                <Button  block > <NavLink to={'/auth'}>Войти </NavLink></Button>
                <Button  block > <NavLink to={'/auth'}>Зарегестрироваться</NavLink> </Button>
                <Button type="link" block>
                    <NavLink to={'/'}>Продолжить как гость</NavLink>
                </Button>
            </div>

        </div>
    );
};

