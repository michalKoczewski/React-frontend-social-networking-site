import React, { useEffect } from 'react';
import { useInput } from '../hooks/useInput';
import axios from 'axios';
import jwt from 'jsonwebtoken';

export function UserDetails() {
    const { value:userName, bind:bindUserName } = useInput('');
    const { value:userPasswd, bind:bindUserPasswd } = useInput('');
    var token = '';
    var userId = '';

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/users/${userId}`)
    }

    const handleSubmit = (evt) => {
        token = jwt.verify(localStorage.getItem('jwt'), 'zaq1@WSX');
        userId = token.user.id;
        console.log(userId);

        evt.preventDefault();
        console.log(`Subbmitint username ${userName} password ${userPasswd}`);        
        const user = {
            userName,
            userPasswd
        }

        axios.patch(`http://localhost:8000/users/${userId}`, user)
        .then(res => console.log(res))
        .catch(err => {
            console.error(err);
        });

        
    }
    return(
        <div className="d-flex justify-content-center m-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title m-4">Account Details</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group m-4">
                            <label> Username </label> <br/>
                            <input type="text" className="from-control my-2" {...bindUserName}/> <br/>                            
                            <small className="form-text text-muted">
                                Type in new username!
                            </small>
                        </div>
                        <div className="form-group mx-4">
                            <label> Password </label> <br/>
                            <input type="text" className="from-control my-2" {...bindUserPasswd}/> <br/>
                            <small className="form-text text-muted">
                                Type in new password!
                            </small>
                        </div>
                        <input type="submit" className="btn btn-warning mx-4 my-2" value="Edit account!"/>                        
                    </form>
                    <button type="button" className="btn btn-danger mx-4 my-2"> Delete Account </button>
                </div>
            </div>
        </div>   
    )
}

export default UserDetails;