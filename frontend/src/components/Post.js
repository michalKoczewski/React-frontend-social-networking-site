import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import PostDetails from './PostDetails';

export default function Post(props) {   
    const post = props.post;     
    return (
        <BrowserRouter>
            <div key={post._id} className="card mb-3">
                <a href={`/posts/${post._id}`}>
                    <img src={`http://localhost:8000/${post.img}`} className="card-img-top" alt="brak" />
                    <div className="card-body">
                        <p className="card-text btn">{post.postDescription}</p>
                    </div>
                </a>
            </div>
        <Route path="/posts/:id" component={PostDetails} />
        </BrowserRouter>
    )
}