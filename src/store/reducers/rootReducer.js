import { combineReducers } from "redux";
import worldsReducer from "./worldsReducer";
import authReducer from "./authReducer";

export default combineReducers({
    worldsReducer: worldsReducer,
    authReducer: authReducer
})
