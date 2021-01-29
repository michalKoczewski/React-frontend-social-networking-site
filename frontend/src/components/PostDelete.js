import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Redirect, useParams } from 'react-router-dom';


export default function PostDetails() { 

    let { id } = useParams();

    const [post, setPost] = useState({post: {}});
    useEffect(() => {
        async function fetchData(){
            const result = await axios.delete(`http://localhost:8000/posts/${id}`);
            setPost(result.data);
        };
        fetchData();
    }, []);

    return (      
        <Redirect to="/" />
    )
}