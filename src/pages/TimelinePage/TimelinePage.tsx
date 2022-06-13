import React, {useEffect} from "react";
import {Card} from "antd";
import './TimeLinePage.scss'
import {useDispatch, useSelector} from "react-redux";
import {fetchWorlds} from "../../store/actions/wolrdsActions";

export const TimelinePage = () => {

    const dispatch: any = useDispatch()
    const worlds = useSelector((state: any) => state.worldsReducer.worlds)

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = () => {
        dispatch(fetchWorlds())
    }

    return (
        <div className='TimeLinePage'>
            <div>
                <div>Недавно посещали</div>
                <div className='TimeLinePage__cardList'>
                    {worlds?.map((item: any, index: number) => (
                        <Card title={item.name} key={index}>
                            <img src={item.map_image} alt="photo"/>
                        </Card>
                    ))}
                </div>
            </div>

            <div>
                <div>Популярные</div>
                <div className='TimeLinePage__cardList'>
                    {worlds.map((item: any, index: number) => (
                        <Card title={item.name} key={index}>
                            <img src={item.map_image} alt="photo"/>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
