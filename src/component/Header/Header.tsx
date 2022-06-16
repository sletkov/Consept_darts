import { Button } from 'antd';
import React, {useState} from "react";
import { SearchOutlined } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import './Header.scss'
import {NavLink, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {AuthPageContainerTypes} from "../../pages/AuthPage/types";
export const Header = () => {

  const navigate = useNavigate()

    const [ active, setActive ] = useState("btn1");

    const isAuthenticated = useSelector((state: any) => !!state.authReducer.token)

    const ChangeActive= (btn:string) => {
        setActive(btn)
    }

  const handleNavigate = (option: AuthPageContainerTypes) => {
    console.log(option)
    navigate('/auth', {state: {option}})
  }

    return(
        <div className={'header'}>
            <div className={'header__logo'} onClick={() => ChangeActive("btn1")}>
                <NavLink to={'/'}>
                    CONCEPT DARTS
                </NavLink>
            </div>

            <div className={'header__menu'}>
                {active === 'btn1'
                    ? <Button type={'primary'} onClick={() => ChangeActive("btn1")}>
                        <NavLink to={'/timeline'}>Лента</NavLink>
                    </Button>
                    :
                    <Button onClick={() => ChangeActive("btn1")}>
                        <NavLink to={'/timeline'}>Лента</NavLink>
                    </Button>
                }
                {active === 'btn2'
                    ? <Button type={'primary'} onClick={() => ChangeActive("btn2")}>
                        <NavLink to={'/world'}>Мир</NavLink>
                    </Button>
                    : <Button onClick={() => ChangeActive("btn2")}>
                        <NavLink to={'/world'}>Мир</NavLink>
                    </Button>
                }
                {active === 'btn3'
                    ?<Button type={'primary'} onClick={() => ChangeActive("btn3")}>
                        <NavLink to={'/publication'}>Публикация</NavLink>
                    </Button>
                    : <Button onClick={() => ChangeActive("btn3")}>
                        <NavLink to={'/publication'}>Публикация</NavLink>
                    </Button>
                }
            </div>

            <div className={'header__info'}>
                <div className={'header__search'}>
                    <Button icon={<SearchOutlined />}>Search</Button>
                </div>
                {isAuthenticated
                    ? <div className={'header__profile'}>
                    <Avatar size={40} icon={<UserOutlined />} />
                </div>
                    : <div className={'header__link'}>
                      <Button type={'link'} onClick={() => handleNavigate(AuthPageContainerTypes.Login)}>Войти</Button>
                      <Button type={'link'} onClick={() => handleNavigate(AuthPageContainerTypes.Register)}>Зарегестрироваться</Button>
                </div>
                }
            </div>

        </div>
    )
}
