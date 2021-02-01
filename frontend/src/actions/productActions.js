import {PRODUCT_LIST_SUCCESS,PRODUCT_LIST_REQUEST,PRODUCT_LIST_FAIL} from '../types/productTypes';
import axios from 'axios';





//@ Action : Get product list

export const listProducts = ()=> async(dispatch)=>{

    //inside of try catch ,make get request to /api/products
    try {

        dispatch({type: PRODUCT_LIST_REQUEST});

        const res = await axios.get('/api/products');
        const {data} = res;

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
        
    } catch (error) {

        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
        
    }

    // dispatch results to the reducer

}
