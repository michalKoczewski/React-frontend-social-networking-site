import React from 'react';

export default function Posts() { 
    const path = window.location.pathname;
    const id = path.substring(path.lastIndexOf('/') + 1);

    return (      
        <div>
            postDetails
        </div>
    )
}