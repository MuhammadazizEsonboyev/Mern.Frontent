import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import userReducer from "./user.reducer";
import { user } from 'react';


 const  rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer
})



export default rootReducer;