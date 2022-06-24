import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchWorldId} from "../../store/actions/worldActions";
import {Button, Card} from "antd";
import './Location.scss'
import {LeftOutlined , TeamOutlined, DownOutlined} from '@ant-design/icons';
import {ParticipantsModal} from "../../component/ParticipantsModal/ParticipantsModal";
import {LocationModal} from "../../component/LocationModal/LocationModal";


export const Location = () => {

    const [isModal, setModal] = useState(false);
    const [isLocationModal, setLocationModal] = useState({
        visible: false,
        location:[]
    })

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

    const handleNavigate = () => {
        navigate(-1)
    }

    // const handleSubmitModal = (item: any) => {
    //     console.log(item)
    //     setLocationModal(true)
    //     return (
    //         <LocationModal
    //             isVisible={isLocationModal}
    //             onClose={() => setLocationModal(false)}
    //             location={item}
    //         />
    //     )
    // }


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
            <div className='Location__container'>
                {locations?.map((item: any, index: any) => (
                    <div>
                        <Card title={item.name} key={index} onClick={() => setLocationModal({
                            visible: true,
                            location: item
                        })}>
                            <img src={item.images[0].image} alt="photo"/>
                        </Card>

                    </div>
                ))}
                <LocationModal
                    modalProps={isLocationModal}
                    onClose={() => setLocationModal({
                        visible: false,
                        location: []
                    })}
                />
            </div>

        </div>
    );
};

