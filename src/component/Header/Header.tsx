import { Button } from "antd";
import React, {useEffect, useState} from "react";
import { SearchOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import "./Header.scss";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { AuthPageContainerTypes } from "../../pages/AuthPage/types";
import logo_Consept_Darts from './logo_Consept_Darts.png'

export const Header = () => {
  const navigate = useNavigate();

  // const isAuthenticated = useSelector((state: any) => state.authReducer.token);
  const isAuthenticated = localStorage.getItem('token')

  const handleNavigate = (option: AuthPageContainerTypes) => {
    console.log(option);
    navigate("/auth", { state: { option } });
  };

  const handleSubmit = () => {
    navigate("/timeline");
  };

  let location = useLocation();

  return (
    <div className={"header"}>
      <div className={"header__logo"} onClick={() => handleSubmit()}>
        <img src={logo_Consept_Darts} alt="logo_Consept_Darts" style={{width:35}}/>
        CONCEPT DARTS
      </div>

      {/*<div className={'header__menu'}>*/}
      {/*    {active === 'btn1' && location.pathname != '/profile'*/}
      {/*        ? <Button type={'primary'} onClick={() => ChangeActive("btn1")}>*/}
      {/*            <NavLink to={'/timeline'}>Лента</NavLink>*/}
      {/*        </Button>*/}
      {/*        :*/}
      {/*        <Button onClick={() => ChangeActive("btn1")}>*/}
      {/*            <NavLink to={'/timeline'}>Лента</NavLink>*/}
      {/*        </Button>*/}
      {/*    }*/}
      {/*    /!*{active === 'btn3' && location.pathname != '/profile' && isAuthenticated*!/*/}
      {/*    /!*    ?<Button type={'primary'} onClick={() => ChangeActive("btn3")}>*!/*/}
      {/*    /!*        <NavLink to={'/publication'}>Публикация</NavLink>*!/*/}
      {/*    /!*    </Button>*!/*/}
      {/*    /!*    : <Button onClick={() => ChangeActive("btn3")}>*!/*/}
      {/*    /!*        <NavLink to={'/publication'}>Публикация</NavLink>*!/*/}
      {/*    /!*    </Button>*!/*/}
      {/*    /!*}*!/*/}
      {/*</div>*/}

      <div className={"header__info"}>
        <div className={"header__search"}>
          <Button icon={<SearchOutlined />}>Search</Button>
        </div>
        {isAuthenticated
            ?
            ( location.pathname != "/profile" && (
            <div className={"header__profile"}>
              <NavLink to={"/profile"}>
                <Avatar size={45} icon={<UserOutlined />} />
              </NavLink>
            </div>
          )
        ) : (
          <div className={"header__link"}>
            <Button
              type={"link"}
              onClick={() => handleNavigate(AuthPageContainerTypes.Login)}
            >
              Войти
            </Button>
            <Button
              type={"link"}
              onClick={() => handleNavigate(AuthPageContainerTypes.Register)}
            >
              Зарегестрироваться
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
