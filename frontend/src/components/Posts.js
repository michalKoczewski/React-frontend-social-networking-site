import React, { useEffect } from 'react';
import Post from './Post';
import LoadingBox from './LoadingBox';
import { useDispatch, useSelector } from 'react-redux';
import { listPosts } from '../actions/postsActions';


export default function Posts() { 
    const dispatch = useDispatch();
    const posts = useSelector( state => state.posts);
    const {loading, error, postList} = posts;
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
                            {postList && postList.map(posts => (
                                <Post key={posts._id} post={posts} />
                            ))}
                        </div>
                    )}
                </div>
                <div className="col-3"></div>
            </div>   
        </div>
    )
}
