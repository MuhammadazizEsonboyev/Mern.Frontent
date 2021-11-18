import axios from "axios";
import { categoryConstants } from './constants';

export const getAllCategory = () => {
    return async dispatch => {

        dispatch({ type: categoryConstants.GET_ALL_CATEGORIES_REQUEST });
        const res = await axios.get(`http://localhost:3000/api/category/categories`, );
        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-hello");
        if (res.status === 200) {

            const { categoryList } = res.data; 
            
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORIES_SUCCSESS,
                payload: { categories: categoryList }
            });
        }
        else {
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORIES_FAILURE,
                payload: { error: res.data.error }
            });
        }
    }
}


export const addCategory = (form) => {
    return async dispatch => {
        dispatch({ type: categoryConstants.ADD_NEW_CATEGORY_REQUEST });
        const res = await axios.post('category/create', form);
        if (res.status === 201) {
            dispatch({
                type: categoryConstants.ADD_NEW_CATEGORY_SUCCESS,
                // payload: res.data.category 
                payload: {category: res.data.category}
            })
        }
        else {
            dispatch({
                type: categoryConstants.ADD_NEW_CATEGORY_FAILURE,
                payload: res.data.error
            })
        }
        console.log(res);
    }
}