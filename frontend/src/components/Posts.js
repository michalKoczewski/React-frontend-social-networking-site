import React, { useEffect, useState } from 'react';
import Post from './Post';
import axios from 'axios';


export default function Posts() { 
    const [posts, setPosts] = useState({info: []});
    useEffect(() => {
        async function fetchData(){
            const result = await axios.get('http://localhost:8000/posts');
            setPosts(result.data);
        };
        fetchData();
    }, []);

    if(localStorage.getItem('jwt')){
        return (      
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col-4"></div>
                    <div className="col-4 text-center d-grid gap-2">
                        <a href="/postAdd" className="btn btn-warning btn-block fw-light text-uppercase">Dodaj post</a>
                    </div>
                    <div className="col-4"></div>
                </div>
                <div className="row mt-3">
                    <div className="col-4"></div>
                    <div className="col-4">
                        {posts.info.map(post => (<Post key={post._id} post={post} />))}
                    </div>
                    <div className="col-4"></div>
                </div>   
            </div>
        )
    }
    else {
        return (      
            <div className="container-fluid">
                <div className="row mt-3 pb-5">
                    <div className="col-4"></div>
                    <div className="col-4">
                        {posts.info.map(post => (<Post key={post._id} post={post} />))}
                    </div>
                    <div className="col-4"></div>
                </div>   
            </div>
        )
    }
}
