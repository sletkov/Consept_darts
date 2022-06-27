import {instance} from "../../services/instance";
import {UPDATE_LOCATION} from "./actionTypes";

export const getLocationImage = (locationID) => {
    return async (dispatch) => {
        try{
            const response = await instance.get(`/locations/${locationID}/images`)
            // dispatch(getLocationImageSuccess(response.data))
            console.log(response.data)
        }
        catch (e) {
            console.log(e)
        }
    }
}

export const getLocationImageSuccess = (images) => {
    return{

    }
}

export const UpdateLocation = (location, id) => {
    return async (dispatch) => {
        try {
            const response = await instance.patch(`/locations/${id}`, location,{
                headers: { Authorization: "Bearer " + localStorage.getItem("token") },
            });
            console.log(response.data)
            // dispatch(UpdateLocationSuccess(response.data));
        } catch (e) {
            console.log(e);
        }
    }
}

// export const UpdateLocationSuccess = (location) => {
//     return {
//         type: UPDATE_LOCATION,
//         location
//     }
// }
