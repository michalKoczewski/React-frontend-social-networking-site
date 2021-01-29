import React from 'react';

export default function Post(props) {   
    const post = props.post;     
    return (
        <div key={post._id} className="card mb-3">
            <div className="card-body">
                <div className="text-center">
                    <img src={`http://localhost:8000/${post.img}`} className="img-thumbnail rounded" alt="brak" /><br />
                    <h5 className="card-title">{post.postName}</h5>
                </div>
                <a href={`/posts/${post._id}`} className="stretched-link"/>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{post.postDescription}</li>
            </ul>
        </div>
    )
}