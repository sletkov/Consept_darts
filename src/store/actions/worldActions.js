import {instance} from "../../services/instance";
import {FETCH_WORLD_ID} from "./actionTypes";


export const fetchWorldId = (worldID) => {
    return async dispatch => {
        try {
            const response = await instance.get(`/worlds/${worldID}/`)
            dispatch(fetchWorldIdSuccess(response.data))
        } catch (e) {
            console.log(e)
        }
    }
}

export const fetchWorldIdSuccess = (world) => {
    // console.log(data)
    return {
        type: FETCH_WORLD_ID,
        world
    }
}
