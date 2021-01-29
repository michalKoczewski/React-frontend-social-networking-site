const { POST_LIST_REQUEST, POST_LIST_SUCCESS, POST_LIST_FAIL, POST_DETAILS_SUCCESS, POST_DETAILS_REQUEST, POST_DETAILS_FAIL } = require("../constants/postConstants");

export const postListReducer = (state = { loading: true, posts: [] }, action) => {
    switch(action.type){
        case POST_LIST_REQUEST:
            return {loading: true};
        case POST_LIST_SUCCESS:
            return {loading: false, postList: action.payload};
        case POST_LIST_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};

export const postDetailsReducer = (state = {post:{}, loading: true}, action) => {
    switch(action.type){
        case POST_DETAILS_REQUEST:
            return {loading: true};
        case POST_DETAILS_SUCCESS:
            return {loading: false, post: action.payload};
        case POST_DETAILS_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};