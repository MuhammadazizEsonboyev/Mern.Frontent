import { authConstants } from './constants';
// import axios from '../helpers/axios';

export const login = (user) => {
    console.log(user);

    return async (dispatch) => {

        // const res = await axios.post('/src/container/Signin/index.js', {
            
        // })

        dispatch({
            type: authConstants.LOGIN_REQUEST,
            payload:{
                ...user
            }
        }); 
    }
}