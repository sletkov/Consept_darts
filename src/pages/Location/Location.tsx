import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchWorldId} from "../../store/actions/worldActions";
import {Button} from "antd";
import './Location.scss'
import {LeftOutlined , TeamOutlined, DownOutlined} from '@ant-design/icons';
import {ParticipantsModal} from "../../component/ParticipantsModal/ParticipantsModal";


export const Location = () => {

    const [isModal, setModal] = useState(false);

    const dispatch: any = useDispatch()
    const navigate = useNavigate()

    const {name, description, locations} = useSelector((state: any) => state.worldReducer.World)
    console.log(locations)

    useEffect(() => {
        fetchdata()
    }, [])

    const params = useParams()
    const paramsID = params.id

    const fetchdata = () => {
        dispatch(fetchWorldId(paramsID))
    }

    const handleNavigate = () => {
        navigate(-1)
    }

    return (
        <div className='Location'>
            <Button onClick={handleNavigate} icon={<LeftOutlined />} > Назад</Button>
            <div className='Location__title'>
                <div>
                    <div className='Location__name'>
                        {name}
                    </div>
                    <div className='Location__desc'>
                        {description}
                    </div>
                </div>
                <div className='Location__member' onClick={() => setModal(true)}>
                    187
                    <TeamOutlined style={{fontSize: 20}} />
                </div>
                <ParticipantsModal
                    isVisible={isModal}
                    onClose={() => setModal(false)}
                />
            </div>
            <div className='Location__filter'>
                Фильтры
                <DownOutlined />
            </div>
            <div className='Location__container'>
                <img src="https://www.imgonline.com.ua/examples/bee-on-daisy.jpg" alt="фото"/>
                <img src="https://www.imgonline.com.ua/examples/bee-on-daisy.jpg" alt="фото"/>
                <img src="https://www.imgonline.com.ua/examples/bee-on-daisy.jpg" alt="фото"/>
                <img src="https://www.imgonline.com.ua/examples/bee-on-daisy.jpg" alt="фото"/>
                <img src="https://www.imgonline.com.ua/examples/bee-on-daisy.jpg" alt="фото"/>
                <img src="https://www.imgonline.com.ua/examples/bee-on-daisy.jpg" alt="фото"/>
                <img src="https://www.imgonline.com.ua/examples/bee-on-daisy.jpg" alt="фото"/>
                <img src="https://www.imgonline.com.ua/examples/bee-on-daisy.jpg" alt="фото"/>
            </div>

        </div>
    );
};

