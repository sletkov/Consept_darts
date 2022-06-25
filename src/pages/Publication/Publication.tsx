import React, {useEffect, useState} from 'react';
import './Publication.scss'
import {Button, Card} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {fetchWorlds} from "../../store/actions/wolrdsActions";
import {useNavigate} from "react-router-dom";
import addWorld from './AddWorld.png'
import {AddWorldModal} from "../../component/AddWorldModal/AddWorldModal"
import {LeftOutlined} from "@ant-design/icons";
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

export const Publication = () => {

    const [isModal, setModal] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [world, setWorlds] = useState({})


    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(-1)
    }

    const dispatch: any = useDispatch()
    const worlds = useSelector((state: any) => state.worldsReducer.worlds)

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = () => {
        dispatch(fetchWorlds())
    }

    const onChange = (item:any) => {
        setWorlds(item)
        console.log(item);
        // setDisabled(!disabled);
    };
    console.log(world)

    return (
        <div className={'Publication'}>
            <Button onClick={handleNavigate} icon={<LeftOutlined />} >
                Назад
            </Button>

            <div className='Publication__wrapper'>
                <div className='Publication__title'>Выберите мир для публикации</div>
                <div className='Publication__cardList'>
                    {worlds?.map((item: any, index: number) => (
                        <Card
                            title={item.name}
                            key={index}
                            className='Publication__cardlist__card'
                            extra={<Checkbox onChange={() => onChange(item)} className='Publication__cardlist__checkbox'></Checkbox>}
                        >
                            <img src={item.cover_image} alt="photo" />

                        </Card>
                    ))}
                    <Card title='Создать новый мир' onClick={() => setModal(true)} >
                        <img src={addWorld} alt="photo"/>
                    </Card>
                </div>
            </div>
            <AddWorldModal
                isVisible={isModal}
                // footer={<button>Cancel</button>}
                onClose={() => setModal(false)}
            />
            <div className='Publication__wrapper'>
                <div className='Publication__title'>
                    Выберите работы для публикации
                </div>
                <div >
                    <Card >
                        <img src={addWorld} alt="photo"/>
                    </Card>
                    <div>
                        Расширение для публикаций:
                        jgeg, png
                    </div>
                </div>
            </div>
            <div className='Publication__wrapper'>
                <div className='Publication__title'>Выберите точку на карте мира</div>
                {world
                    ?
                <div className='Publication__cardList'>
                    {/*<img src={world?.map_image} alt="карта"/>*/}
                </div>
                    : null
                }

            </div>
            <Button type={'primary'} className='Publication__post'>Опубликовать</Button>
        </div>
    );
};

