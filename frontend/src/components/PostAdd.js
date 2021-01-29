import React from 'react';
import { useInput } from '../hooks/useInput';
import axios from 'axios';

export function PostAdd(props) {
    const { value:postName, bind:bindPostName } = useInput('');
    const { value:postDescription, bind:bindPostDescription } = useInput('');
    const { value:img, bind:bindImg } = useInput('');

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const post = {
            postName,
            postDescription,
            img
        }

        axios.post('http://localhost:8000/posts', post)
        .then(res => sessionStorage.setItem("token", res.data.token))
        .catch(err => {
            console.error(err);
        })

        
    }

    return(   
        <div className="d-flex justify-content-center m-4">
            <div className="card">
                <div className="card-body text-center">
                    <h5 className="card-title m-4">Add Post</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="m-4">
                            <label htmlFor="postname" className="form-label"> Post Name </label>
                            <input type="text" id="postname" className="form-control" {...bindPostName}/> <br/>
                        </div>
                        <div className="mx-4">
                            <label htmlFor="description" className="form-label"> Description </label> <br/>
                            <textarea id="description" className="form-control" {...bindPostDescription}/> <br/>
                        </div>
                        <div className="mx-4">
                            <label htmlFor="file" className="form-label"> Image </label> <br/>
                            <input type="file" className="form-control" aria-describedby="imageHelp" {...bindImg}/> <br/>
                            <div id="imageHelp" class="form-text mb-4">Please copy path to your file.</div>
                        </div>
                        <input type="submit" className="btn btn-secondary mx-4 my-5" value="Publish"/>                        
                    </form>
                </div>
            </div>
        </div>   
    )    
}

export default PostAdd;