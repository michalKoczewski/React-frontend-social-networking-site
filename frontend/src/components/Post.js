import React from 'react';

export default function Post(props) {   
    const post = props.post;     
    return (     
        <div key={post._id} className="card">
            <a href={`/posts/${post._id}`}>
                <img src="http://localhost:8000/uploads//2021-01-06T043810.879Zpobrane.jpg" className="card-img-top" alt="brak" />
                <div className="card-body">
                    <p className="card-text">{post.postDescription}</p>
                </div>
            </a>
        </div>
    )
}