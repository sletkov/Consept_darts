import { Button } from 'antd';
import React from "react";
import { SearchOutlined } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import './Header.scss'
import {Link, NavLink} from "react-router-dom";

export const Header = () => {
    return(
        <div className={'header'}>
            <div className={'header__logo'}>
                CONCEPT DARTS
            </div>

            <div className={'header__menu'}>
                <Button type={'primary'}>
                    <NavLink to={'/'}>Лента</NavLink>
                </Button>
                <Button>
                    <NavLink to={'/world'}>Мир</NavLink>
                </Button>
                <Button>
                    <NavLink to={'/publication'}>Публикация</NavLink>
                </Button>
            </div>

            <div className={'header__info'}>
                <div className={'header__search'}>
                    <Button icon={<SearchOutlined />}>Search</Button>
                </div>
                <div className={'header__profile'}>
                    <Avatar size={40} icon={<UserOutlined />} />
                </div>
            </div>

        </div>
    )
}
