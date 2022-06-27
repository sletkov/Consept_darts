import { instance } from "../../services/instance";
import { FETCH_USER } from "./actionTypes";

export const fetchUserData = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get("/users/me", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      dispatch(fetchUserDataSuccess(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const fetchUserDataSuccess = (user) => {
  return {
    type: FETCH_USER,
    user,
  };
};

export const UpdateUser = (user) => {
  return async (dispatch) => {
    try {
      const response = await instance.patch("/users/me", user,{
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      console.log(response.data)
      dispatch(fetchUserDataSuccess(response.data));
    } catch (e) {
      console.log(e);
    }
  }
}

