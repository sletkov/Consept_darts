import React, { useEffect } from "react";
import "./ProfilePage.scss";
import { Avatar, Button, Card } from "antd";
import { UserOutlined } from "@ant-design/icons";
import {NavLink, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../../store/actions/userActions";
import {getLocationImage} from "../../store/actions/locationActions";
import {instance} from "../../services/instance";

export const ProfilePage = () => {
  const dispatch: any = useDispatch();
  const navigate = useNavigate()
  const user = useSelector((state: any) => state.userReducer.user);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    dispatch(fetchUserData());
  };


  const handleSubmit = (world:any) => {
    navigate(`/world/${world.id}`)
    localStorage.setItem('world',world.id )
  }

  // const locationImages = async (locationID:any) => {
  //   // const response:any = await instance.get(`/locations/${locationID}/images`)
  //   // const image = response.data[0].image
  //   console.log(image)
  //   return(
  //           <img src={image} alt="photo" />
  //   )
  // }

  //   if (!user) return <div>Загрузка</div>;

  return (
    <div className={"profilePage"}>
      <div className={"profilePage__header"}>
        <div>
          <Avatar size={90} icon={<UserOutlined />} style={{ margin: 20 }} />
        </div>
        <div className="profilePage__info">
          <div className="profilePage__info-name">
            <div>{user?.additional_name}</div>
            <div>{user?.first_name}</div>
            <div>{user?.last_name}</div>
          </div>
          <div className="profilePage__info-username">
            {user?.username}
          </div>
          <div className="profilePage__info-mail">
            {user?.email}
          </div>
        </div>
      </div>

      <div className="profilePage__btn">
        <Button >
          <NavLink to={"/editProfile"}>Редактировать профиль</NavLink>
        </Button>
        <Button >
          <NavLink to={"/publication"}>Публикация</NavLink>
        </Button>
      </div>

      <div className="profilePage__container">
        <div className="profilePage__title">Мои миры</div>
        <div className="TimeLinePage__cardList">
          {user?.worlds?.map((item: any, index: number) => (
            <Card title={item.name} key={index} onClick={() => handleSubmit(item)}>
              <img src={item.map_image} alt="photo" />
            </Card>
          ))}
        </div>
      </div>

      {/*<div className="profilePage__container">*/}
      {/*  <div className="profilePage__title">Мои работы</div>*/}
      {/*  <div className="TimeLinePage__cardList">*/}
      {/*    /!*{user?.locations?.map((item: any, index: number) => (*!/*/}
      {/*    /!*  <Card title={item.name} key={index}>*!/*/}
      {/*    /!*    <img src={item?.image} alt="photo" />*!/*/}
      {/*    /!*  </Card>*!/*/}
      {/*    /!*))}*!/*/}
      {/*    {user?.locations?.map((item: any, index: number) => {*/}
      {/*      locationImages(item?.id).then(item => )*/}
      {/*    })}*/}


      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};
