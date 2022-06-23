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
    return {
        type: AUTH_LOGOUT
    }
}

export const register = data => {
    return async dispatch => {
        try {
            const response = await instance.post('/auth/register', dataToRequestBody(data))
            dispatch(registerSuccess(response.data.id))
        } catch (e) {
            console.log(e)
            // dispatch(registerError('Ошибка входа в приложение'))
        }
    }
}

export const registerSuccess = (id) => {
    localStorage.setItem('id', id)
    return {

    }

}


// export const LoadFile = (file) => {
//     return async dispatch => {
//         try {
//             const response = await instance.post('/files/upload', file)
//             dispatch(LoadFileSuccess(response.data))
//         } catch (e) {
//             console.log('Невозможно загрузить файл')
//         }
//     }
// }
//
// export const LoadFileSuccess = (file) => {
//     return {
//         type: LOADFILE_SUCCESS,
//         file
//     }
// }






