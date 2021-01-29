import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export default function PostDetails() { 

    let { id } = useParams();
    const [post, setPost] = useState({post: {}});
    useEffect(() => {
        async function fetchData(){
            const result = await axios.get(`http://localhost:8000/posts/${id}`);
            setPost(result.data);
        };
        fetchData();
    }, []);

    return (      
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-3"></div>
                <div className="col-6">
                    <div key={post.post._id} className="card mb-3">
                        <img src={`http://localhost:8000/${post.post.img}`} className="card-img-top" alt="brak" />
                        <div className="card-body">
                            <p className="card-text btn">{post.post.postDescription}</p>
                        </div>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>   
        </div>
    )
}