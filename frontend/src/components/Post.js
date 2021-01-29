import React from 'react';

export default function Post(props) {   
    const post = props.post;     
    return (     
        <div key={post._id} className="card">
            <a href={`/posts/${post._id}`}>
                <img src={`http://localhost:8000/${post.img}`} className="card-img-top" alt="brak" />
                <div className="card-body">
                    <p className="card-text btn">{post.postDescription}</p>
                </div>
            </a>
        </div>
    )
}