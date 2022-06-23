import React, {useEffect} from 'react';
import './World.scss'
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchWorldId} from "../../store/actions/worldActions";
import {Button} from "antd";

export const World = () => {

    const dispatch: any = useDispatch()
    const navigate = useNavigate()

    const {name, description, locations} = useSelector((state: any) => state.worldReducer.World)

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
                <img src="https://i0.wp.com/img-fotki.yandex.ru/get/9306/44938346.5f/0_b042d_bbebdf22_orig.jpg" alt="карта"/>
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
                            <div key={index}>
                                <div>{item.created_at}</div>
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

