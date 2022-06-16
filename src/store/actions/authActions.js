import {AUTH_LOGOUT, AUTH_SUCCESS, LOGIN_SUCCESS} from "./actionTypes";
import {instance} from "../../services/instance";
import {dataToRequestBody} from "../../services/formDataService";

export const login = data => {
   return async dispatch => {
       try {
           const response = await instance.post('/auth/login', dataToRequestBody(data))
           dispatch(loginSuccess(response.data.access_token))
       } catch (e) {
           console.log(e)
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

export const logout = () => {
    localStorage.removeItem('token')
    return {
        type: AUTH_LOGOUT
    }
}




