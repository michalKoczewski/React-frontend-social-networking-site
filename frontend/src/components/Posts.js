import React, { useEffect, useState } from 'react';
import Post from './Post';
import axios from 'axios';


export default function Posts() { 
    const [posts, setPosts] = useState({info: []});
    useEffect(async () => {
        const result = await axios('http://localhost:8000/posts');
        setPosts(result.data);

    })

    return (      
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-3"></div>
                <div className="col-6">
                    {posts.info.map(post => (<Post key={post._id} post={post} />))}
                </div>
                <div className="col-3"></div>
            </div>   
        </div>
    )
}
