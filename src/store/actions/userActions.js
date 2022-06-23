import {instance} from "../../services/instance";
import {FETCH_USER} from "./actionTypes";

export const fetchUserData = () => {
    return async dispatch => {
        try {
            const response = await instance.get('/users/me')
            dispatch(fetchUserDataSuccess(response.data.access_token))
            console.log(response.data)
        } catch (e) {
            console.log(e)
        }
    }
}

export const fetchUserDataSuccess = (user) => {
    return{
        type: FETCH_USER,
        user
    }
}
