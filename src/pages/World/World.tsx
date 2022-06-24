import React, {useEffect} from 'react';
import './World.scss'
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchWorldId} from "../../store/actions/worldActions";
import {Button} from "antd";
import moment from 'moment';
import {EnvironmentOutlined, EnvironmentFilled} from "@ant-design/icons";


export const World = () => {

    const dispatch: any = useDispatch()
    const navigate = useNavigate()

    const {name, description, locations, map_image} = useSelector((state: any) => state.worldReducer.World)
    console.log(locations,map_image)

    useEffect(() => {
        fetchdata()
    }, [])

    const params = useParams()
    const paramsID = params.id

    const fetchdata = () => {
        dispatch(fetchWorldId(paramsID))
    }

    const handleSubmit = () => {
        navigate(`/world/${paramsID}/locations`)
    }

    return (
        <div className='World'>
            <div className='World__img'>
                <img src={map_image} alt=""/>
                {locations?.map((item: any, index: number) => (
                    <div key={index} style={{
                        position:'absolute',
                        zIndex:1,
                        cursor: 'pointer',
                        top: `${item.coord_x}px`,
                        left: `${item.coord_y}px`

                    }} >
                        <EnvironmentFilled style={{fontSize: 30, color: '#280767'}} />
                    </div>
                ))}
            </div>
            <div >
                <div className='World__container'>
                    <div className='World__container__title'>{name}</div>
                    <div className='World__container__description'>{description}</div>
                </div>
                <div className='World__container'>
                    <div className='World__container__title'>Список меток</div>
                    <div className='World__container__description'>
                        {locations?.map((item: any, index: number) => (
                            <div key={index} className='World__container__description__wrapper'>
                                <div className='World__container__description-date'>
                                    {moment(item.created_at).format('DD MMMM YYYY')}
                                </div>
                                <div>
                                    {item.name}
                                </div>
                            </div>
                        ))}
                    </div>
                    <Button onClick={() => {handleSubmit()}}> Все локации</Button>
                </div>
            </div>
        </div>
    );
};

