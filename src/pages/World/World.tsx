import React, {useEffect, useState} from 'react';
import './World.scss'
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchWorldId} from "../../store/actions/worldActions";
import {Button, Popover} from "antd";
import moment from 'moment';
import { EnvironmentFilled, EditOutlined} from "@ant-design/icons";
import {LocationModal} from "../../component/LocationModal/LocationModal";
import {EditWorldModal} from "../../component/EditWorldModal/EditWorldModal";
import {instance} from "../../services/instance";


export const World = () => {

    const dispatch: any = useDispatch()
    const navigate = useNavigate()
    const [user, setUser] = useState()
    const [editWorld, setEditWorld] = useState(false)
    const [isLocationModal, setLocationModal] = useState({
        visible: false,
        location:[],
        userid:''
    })

    const responsedata = async () => {
        const response = await instance.get("/users/me", {
            headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        })
        const userdata = response.data
        setUser(userdata.id)
        setLocationModal({
            ...isLocationModal,
            userid: userdata?.id
        })

    }



    const {name, description, locations, map_image, creator, id} = useSelector((state: any) => state.worldReducer.World)
    const modalProps = {name, description, map_image, id}

    //
    // if (user === creator?.id) {
    //     console.log('это мой мир')
    // }
    // else {
    //     console.log('это не мой мир')
    // }

    useEffect(() => {
        fetchdata();
        responsedata()
    }, [])

    const params = useParams()
    const paramsID = params.id

    const fetchdata = () => {
        dispatch(fetchWorldId(paramsID))
    }

    const handleSubmit = () => {
        navigate(`/world/${paramsID}/locations`)
    }

    const content = (item:any) =>  {
        return (
            <div className='locationModal-container'>
                <div className='locationModal-container__img'>
                    <img src={item.images[0].image} alt="ghdbon" />
                </div>
                <div>{item.creator.username}</div>
                <div>{item.name}</div>
            </div>
        );
    }

    return (
        <div className='World'>
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
                <div>
                    {user === creator?.id &&
                    <Button onClick={() => setEditWorld(true)} className='World__container' type='primary'>
                        <EditOutlined />
                        Редактировать мир
                    </Button>
                    }

                </div>
            </div>
            <div className='World__img'>
                <img src={map_image} alt="photo map"/>

                {locations?.map((item: any, index: number) => (
                    <Popover content={content(item)} >
                    <div key={index} className='World__dot' style={{
                        top: `calc(${item.coord_x}% - 30px)`,
                        left: `calc(${item.coord_y}% - 15px)`
                    }}
                    >
                        <EnvironmentFilled style={{fontSize: 30, color: '#00e1ff'}} onClick={() => setLocationModal({
                            ...isLocationModal,
                            visible: true,
                            location: item
                        })} />
                    </div>
                    </Popover>

                ))}

            </div>
            <LocationModal
                modalProps={isLocationModal}
                onClose={() => setLocationModal({
                    ...isLocationModal,
                    visible: false,
                    location: []
                })}
            />
            <EditWorldModal
                isVisible={editWorld}
                onClose={() => setEditWorld(false)}
                world = {modalProps}
            />
        </div>
    );
};

