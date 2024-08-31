import {
    PRODUCT_LIST_REQ,
    PRODUCT_LIST_REQ_SUCCESS,
    PRODUCT_LIST_FAIL,

    PRODUCT_DETAIL_REQ,
    PRODUCT_DETAIL_REQ_SUCCESS,
    PRODUCT_DETAIL_FAIL
} from "../Constants/Product"

export const productListReducer = (state = {products:[]}, action) => {
    switch(action.type){
        case PRODUCT_LIST_REQ:
            return {
                loading: true, products: []
            };
        case PRODUCT_LIST_REQ_SUCCESS:
            return {
                loading: false, products: action.payload, totalPage: action.payload.totalPage, page: action.payload.page
            };
        case PRODUCT_LIST_FAIL:
            return {
                loading:false, error:action.payload.error
            };
        default:
            return state
    }
}


export const productReducer = (state = {products: {review:[]}}, action) => {
    switch(action.type){
        case PRODUCT_DETAIL_REQ:
            return {
                loading: true, ...state
            };
        case PRODUCT_DETAIL_REQ_SUCCESS:
            return {
                loading: false, product: action.payload
            };
        case PRODUCT_DETAIL_FAIL:
            return {
                loading:false, error:action.payload.error
            };
        default:
            return state
    }
}