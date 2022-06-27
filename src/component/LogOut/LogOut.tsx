import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {Navigate} from "react-router-dom";
import {logout} from "../../store/actions/authActions";

export const LogOut = () => {
    const dispatch = useDispatch()

    useEffect(() =>{
        logOute()
    },[])

    const logOute = () => {
        dispatch(logout())
    }
    return (
        <Navigate to={'/'}/>
    );
};

