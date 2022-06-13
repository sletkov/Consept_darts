import {AUTH_LOGOUT, AUTH_SUCCESS} from "./actionTypes";
import {instance} from "../../services/instance";

export function identification(email, password, remember) {
    return async dispatch => {
        const authData = {
            email,
            password,
            returnSecureToken: true
        }

        // let url =  'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDtAJqJOsED9QXNLkFsX7df8DFlku2lmpM'
        // if(isLogin) {
        //     url =  'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDtAJqJOsED9QXNLkFsX7df8DFlku2lmpM'
        // }

        const response = await instance.post('/auth/login', authData)
        const data = response.data
        const expirationDate =  new Date(new Date().getTime() + data.expiresIn*1000)

        localStorage.setItem('token', data.idToken)
        localStorage.setItem('userId', data.localId)
        localStorage.setItem('expirationDate', expirationDate)

        dispatch(authSuccess(data.idToken))
        dispatch(authLogOut(data.expiresIn))
    }
}

export function authLogOut (time) {
    return dispatch => {
        setTimeout(() => {
            dispatch(logOut())
        }, time * 1000)
    }
}

export function logOut (){
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem( 'expirationDate')
    return {
        type: AUTH_LOGOUT,
    }
}

export function authSuccess(token) {
    return{
        type: AUTH_SUCCESS,
        token
    }
}

export function autoLogin() {
    return dispatch => {
        const token = localStorage.getItem('token')
        if (!token){
            dispatch(logOut())
        } else {
            const expirationDate = new Date (localStorage.getItem('expirationDate'))
            if(expirationDate <= new Date()) {
                dispatch(logOut())
            } else {
                dispatch(authSuccess(token))
                dispatch(authLogOut((expirationDate.getTime() - new Date().getTime()) /1000))
            }
        }
    }
}


