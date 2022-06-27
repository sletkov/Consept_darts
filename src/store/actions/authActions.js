import {AUTH_LOGOUT, LOADFILE_SUCCESS, LOGIN_ERROR, LOGIN_SUCCESS} from "./actionTypes";
import {instance} from "../../services/instance";
import {dataToRequestBody} from "../../services/formDataService";

export const login = data => {
   return async dispatch => {
       try {
           const response = await instance.post('/auth/login', dataToRequestBody(data))
           dispatch(loginSuccess(response.data.access_token))
       } catch (e) {
           dispatch(loginError('Ошибка входа в приложение'))
       }
   }
}

export const loginSuccess = (token) => {
    localStorage.setItem('token', token)
    return {
        type: LOGIN_SUCCESS,
        token
    }
}

export const loginError = (error) => {
    return {
        type: LOGIN_ERROR,
        error
    }
}

export const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('world')
    return {
        type: AUTH_LOGOUT
    }
}

export const register = data => {
    return async dispatch => {
        console.log(data)
        try {
            const response = await instance.post('/auth/register', data)
            console.log(response.data)
            const username = response.data.username
            const password = data.password
            const newData = {
                username: username,
                password: password
            }
            console.log('новые данные для логина',newData)
            dispatch(login(newData))
        } catch (e) {
            console.log(e)
            // dispatch(registerError('Ошибка входа в приложение'))
        }
    }
}

export const registerSuccess = (id) => {
    return {

    }

}









