import {instance} from "../../services/instance";
import {DELETE_WORLD_SUCCESS, FETCH_WORLD_ID} from "./actionTypes";


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

export const UpdateWorld = (world, id) => {
    return async (dispatch) => {
        try {
            const response = await instance.patch(`/worlds/${id}`, world,{
                headers: { Authorization: "Bearer " + localStorage.getItem("token") },
            });
            dispatch(fetchWorldIdSuccess(response.data));
        } catch (e) {
            console.log(e);
        }
    }
}

export const deleteWorld = (id) => {
    return async (dispatch) => {
        try {
            const response = await instance.delete(`/worlds/${id}`, {
                headers: { Authorization: "Bearer " + localStorage.getItem("token") },
            })
            console.log(response.data)
            dispatch(deleteWorldSuccess(response.data))
        } catch (e) {
            console.log(e)
        }
    }
}

export const deleteWorldSuccess = (data) => {
    return {
        type: DELETE_WORLD_SUCCESS,
        data
    }
}
