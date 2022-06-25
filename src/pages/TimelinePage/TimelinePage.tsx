import React, {useEffect} from "react";
import {Card} from "antd";
import './TimeLinePage.scss'
import {useDispatch, useSelector} from "react-redux";
import {fetchWorlds} from "../../store/actions/wolrdsActions";
import {useNavigate} from "react-router-dom";

export const TimelinePage = () => {

    const dispatch: any = useDispatch()
    const navigate = useNavigate()
    const worlds = useSelector((state: any) => state.worldsReducer.worlds)

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = () => {
        dispatch(fetchWorlds())
    }

    const handleSubmit = (world:any) => {
        navigate(`/world/${world.id}`)
        console.log(world)
        localStorage.setItem('world',world.id )
    }
    const lastVisited = localStorage.getItem('world')
    const lastWorld = worlds.filter((item: any) => item.id === lastVisited)
    console.log(lastWorld)

    return (
        <div className='TimeLinePage'>
            <div className='TimeLinePage__container'>
                <div className='TimeLinePage__title'>Недавно посещали</div>
                <div className='TimeLinePage__cardList'>
                    <Card title={lastWorld.name} onClick={() => handleSubmit(lastWorld)} className='TimeLinePage__card'>
                        <img src={lastWorld.cover_image} alt="photo"/>
                    </Card>

                </div>
            </div>

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
