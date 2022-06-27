import React, {useEffect} from "react";
import {Card} from "antd";
import './TimeLinePage.scss'
import {useDispatch, useSelector} from "react-redux";
import { message } from 'antd';
import {fetchWorlds} from "../../store/actions/wolrdsActions";
import {useNavigate} from "react-router-dom";

export const TimelinePage = () => {

    const dispatch: any = useDispatch()
    const navigate = useNavigate()
    const worlds = useSelector((state: any) => state.worldsReducer.worlds)
    const Error = useSelector((state: any) => state.authReducer.error);

    const errorMessage = () => {
        if(Error) {
            message.error('Ошибка входа в приложение. Вы вошли как гость');
        }
    }

    useEffect(() => {
        fetchData();
        errorMessage()
    },[])

    const fetchData = () => {
        dispatch(fetchWorlds())
    }

    const handleSubmit = (world:any) => {
        navigate(`/world/${world.id}`)
        localStorage.setItem('world',world.id )
    }
    const lastVisited = localStorage.getItem('world')
    const lastWorld = worlds.filter((item: any) => item.id === lastVisited)

    return (
        <div className='TimeLinePage'>
            {localStorage.getItem('world')
                ?    <div className='TimeLinePage__container'>
                    <div className='TimeLinePage__title'>Недавно посещали</div>
                    <div className='TimeLinePage__cardList'>
                        <Card title={(lastWorld as any)[0]?.name} onClick={() => handleSubmit(lastWorld)} className='TimeLinePage__card'>
                            <img src={(lastWorld as any)[0]?.cover_image} alt="photo"/>
                        </Card>
                    </div>
                </div>
                : null
            }


            <div className='TimeLinePage__container'>
                <div className='TimeLinePage__title'>Популярные</div>
                <div className='TimeLinePage__cardList'>
                    {worlds.map((item: any, index: number) => (
                        <Card title={item.name} key={index} onClick={() => handleSubmit(item)} className='TimeLinePage__card'>
                            <img src={item.cover_image} alt="photo"/>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
