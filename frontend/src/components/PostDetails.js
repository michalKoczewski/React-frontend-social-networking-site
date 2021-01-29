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
                <div className="col-4"></div>
                <div className="col-4">
                    <div key={post.post._id}>
                        <div className="text-center mb-4">
                            <p className="fs-2">{post.post.postName}</p>
                        </div>
                        <div className="lh-sm">
                            {post.post.postDescription}
                        </div>
                        <div className="text-center my-5">
                            <img src={`http://localhost:8000/${post.post.img}`} className="rounded" alt="brak" style={{maxWidth: "700px"}}/>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <a href={`/postDelete/${post.post._id}`} className="btn btn-danger">Usuń post</a>
                </div>
            </div>   
        </div>
    )
}