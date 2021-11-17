import { categoryConstants, productConstants } from "./constants"
import axios from "axios";


export const getInitialData = () => {
    return async dispatch => {

        const res = await axios.post('/initialData');
        if (res.status === 200) {
            const { categories, products } = res.data;
            console.log(categories);
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORIES_SUCCSESS,
                payload: { categories }
            });
            dispatch({
                type: productConstants.GET_ALL_CATEGORIES_SUCCSESS,
                payload: { products }
            });
        }
        console.log(res);
      
    }
}