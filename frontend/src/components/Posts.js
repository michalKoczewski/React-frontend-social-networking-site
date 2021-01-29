import React, { useEffect } from 'react';
import Post from './Post';
import LoadingBox from './LoadingBox';
import { useDispatch, useSelector } from 'react-redux';
import { listPosts } from '../actions/postsActions';


export default function Posts() { 
    const dispatch = useDispatch();
    const postList = useSelector( state => state.postList);
    const {loading, error, posts} = postList;
    useEffect(() => {
        dispatch(listPosts());
    }, [dispatch]);    

    return (      
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-3"></div>
                <div className="col-6">
                    {loading? (
                        <LoadingBox />
                    ) : error? (
                        <div className="bg-danger">{error}</div>
                    ) : (
                        <div>
                            {[posts].map(post => (<Post key={post._id} post={post} />))}
                        </div>
                    )}
                </div>
                <div className="col-3"></div>
            </div>   
        </div>
    )
}
