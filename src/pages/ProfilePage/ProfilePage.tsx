import React, {useEffect} from "react";
import './ProfilePage.scss'
import {Avatar, Button, Card} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserData} from "../../store/actions/userActions";

export const ProfilePage = () => {

    const dispatch: any = useDispatch()
    const user = useSelector((state:any) => state.userReducer.user)

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = () => {
        dispatch(fetchUserData())
    }

    return(
        <div className={'profilePage'}>

            <div className={'profilePage__header'}>
                <div>
                    <Avatar size={90} icon={<UserOutlined />}  style={{ margin: 20 }} />
                </div>
                <div className='profilePage__info'>
                    <div className='profilePage__info-name'>
                        <div>{user.first_name} Иванов</div>
                        <div>{user.last_name} Иван</div>
                        <div>{user.additional_name}Иванович</div>
                    </div>
                    <div className='profilePage__info-username'>{user.username}@ivanov</div>
                    <div className='profilePage__info-mail'>{user.email}ivanov@mail.ru</div>

                    <div className='profilePage__btn'>
                        <Button type={'primary'} >
                            <NavLink to={'/editProfile'}>Редактировать профиль</NavLink>
                        </Button>
                        <Button type={'primary'} >
                            <NavLink to={'/publication'}>Публикация</NavLink>
                        </Button>
                    </div>

                </div>
            </div>

            <div>
                <div className='profilePage__title'>Мои миры</div>
                <div className='TimeLinePage__cardList'>
                    {user?.worlds?.map((item: any, index: number) => (
                        <Card title={item.name} key={index}>
                            <img src={item.map_image} alt="photo"/>
                        </Card>
                    ))}
                </div>
            </div>

            <div>
                <div className='profilePage__title'>Мои работы</div>
                <div className='TimeLinePage__cardList'>
                    {user?.locations?.map((item: any, index: number) => (
                        <Card title={item.name} key={index}>
                            <img src={item.image} alt="photo"/>
                        </Card>
                    ))}
                </div>
            </div>

        </div>
    )
}
