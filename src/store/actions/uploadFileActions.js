import {instance} from "../../services/instance";

export const uploadWorldFile = (file) => {
    return async (dispatch) => {
        try {
            const response = await instance.post('/files/upload', file,{
                headers: { Authorization: "Bearer " + localStorage.getItem("token"),
                    "Content-type": "multipart/form-data", accept: 'application/json'},
            } );
            dispatch(uploadWorldFileSuccess(response.data))
            console.log(response.data)
        } catch (e) {
            console.log(e)
        }
    }
}

export const uploadWorldFileSuccess = (file) => {
    // return {
    //     type: FETCH_USER,
    //     user,
    // };
};
