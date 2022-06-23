import { combineReducers } from "redux";
import worldsReducer from "./worldsReducer";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import worldReducer from './worldReducer'

export default combineReducers({
    worldsReducer: worldsReducer,
    authReducer: authReducer,
    userReducer: userReducer,
    worldReducer: worldReducer,
})
