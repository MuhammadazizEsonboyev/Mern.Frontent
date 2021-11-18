import { combineReducers } from "redux";
import categoryReducer from './category.reducer';



export const  rootReducer = combineReducers({
    category: categoryReducer,

});