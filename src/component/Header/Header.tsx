import { Button } from 'antd';
import React, {useState} from "react";
import { SearchOutlined } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import './Header.scss'
import { NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
export const Header = () => {

    const [ active, setActive ] = useState("btn1");

    const isAuthenticated = useSelector((state: any) => !!state.authReducer.token)

    const ChangeActive= (btn:string) => {
        setActive(btn)
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
                        <NavLink to={'/'}>Лента</NavLink>
                    </Button>
                    :
                    <Button onClick={() => ChangeActive("btn1")}>
                        <NavLink to={'/'}>Лента</NavLink>
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
                        <Button type="link" >Войти</Button>
                        <Button type="link" >Зарегистрироваться</Button>
                </div>
                }
            </div>

        </div>
    )
}
