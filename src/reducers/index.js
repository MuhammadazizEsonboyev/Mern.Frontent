import { combineReducers } from "redux";
import userReducer  from "./user.reducer";
import authReducer from "./auth.reducer";
import productReducer from './product.reducer';
import categoryReducer from './category.reducer';
import orderReducer from './order.reducer';


export const  rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    category: categoryReducer,
    product: productReducer,
    order : orderReducer    
});