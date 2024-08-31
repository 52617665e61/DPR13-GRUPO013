import axios from 'axios'
import {
    PRODUCT_LIST_REQ,
    PRODUCT_LIST_REQ_SUCCESS,
    PRODUCT_LIST_FAIL,

    PRODUCT_DETAIL_REQ,
    PRODUCT_DETAIL_REQ_SUCCESS,
    PRODUCT_DETAIL_FAIL
} from "../Constants/Product"
import { BASE_URL } from '../Constants/BASE_URL';

export const productListActions = () => async (dispatch) => {
    try{
        dispatch({type:PRODUCT_LIST_REQ});
        const {data} = await axios.get(`${BASE_URL}/products`
        );
        dispatch({type:PRODUCT_LIST_REQ_SUCCESS, payload: data})
    } catch (error) {
        dispatch({
        type: PRODUCT_LIST_FAIL,
        payload: error.reponse && error.reponse.data.message ? error.response.data.message : error.message
        })
    }
}

export const productActions = (id) => async (dispatch) => {
    try{
        dispatch({type:PRODUCT_DETAIL_REQ});
        const {data} = await axios.get(`${BASE_URL}/v1/api/products/${id}`
        );
        dispatch({type:PRODUCT_DETAIL_REQ_SUCCESS, payload: data})
    } catch (error) {
        dispatch({
        type: PRODUCT_DETAIL_FAIL,
        payload: error.reponse && error.reponse.data.message ? error.response.data.message : error.message
        })
    }
}