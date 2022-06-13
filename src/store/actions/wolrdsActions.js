import {instance} from "../../services/instance";
import {FETCH_WORLDS} from "./actionTypes";

export const fetchWorlds = () => {
    return async dispatch => {
        try {
            const response = await instance.get('/worlds/')
            dispatch(fetchWorldsSuccess(response.data))
        } catch (e) {
            console.log(e)
        }
    }
}

export const fetchWorldsSuccess = (worlds) => {
    return {
        type: FETCH_WORLDS,
        worlds
    }
}
