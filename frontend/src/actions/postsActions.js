import Axios from "axios";
import { POST_DETAILS_FAIL, POST_DETAILS_REQUEST, POST_DETAILS_SUCCESS, POST_LIST_FAIL, POST_LIST_REQUEST, POST_LIST_SUCCESS } from "../constants/postConstants";


export const listPosts = () => async (dispatch) => {
    dispatch({
        type: POST_LIST_REQUEST
    });

    try {
        const {data} = await Axios.get('http://localhost:8000/posts');
        dispatch({
            type: POST_LIST_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: POST_LIST_FAIL,
            payload: error.message
        });

    }
};

export const detailsPost = (postId) => async (dispatch) => {
    dispatch({
        type: POST_DETAILS_REQUEST,
        payload: postId
    });

    try{
        const {data} = await Axios.get(`http://localhost:8000/posts/${postId}`);
        dispatch({
            type: POST_DETAILS_SUCCESS,
            payload: data
        });
    } catch(error){
        dispatch({
            type: POST_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
}