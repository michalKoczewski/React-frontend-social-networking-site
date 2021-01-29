import React from 'react';
import { useInput } from '../hooks/useInput';
import axios from 'axios';
import { Redirect } from 'react-router';

export function SignIn() {
    const { value:userName, bind:bindUserName } = useInput('');
    const { value:userPasswd, bind:bindUserPasswd } = useInput('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Subbmiting username ${userName} password ${userPasswd}`);

        const user = {
            userName,
            userPasswd
        }

        axios.post('http://localhost:8000/users/signIn', user)
        .then(res => {
            console.log(res);
            localStorage.setItem("jwt", res.data.token);
            console.log(res.data.token);
        })
        .catch(err => {
            console.error(err);
        })
    }

    return(   
        <div className="d-flex justify-content-center m-4">
            <div className="card">
                <div className="card-body text-center">
                    <h5 className="card-title m-4">Login</h5>
                    <form onSubmit={handleSubmit} action="/">
                        <div className="form-group">
                            <label htmlFor="username" className="form-label"> Username </label> <br/>
                            <input type="text" id="username" className="form-control" {...bindUserName}/> <br/>
                            <small className="form-text text-muted">                                
                            </small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="form-label"> Password </label> <br/>
                            <input type="password" id="password" className="form-control" {...bindUserPasswd}/> <br/>
                            <small className="form-text text-muted">                                
                            </small>
                        </div>
                        <input type="submit" className="btn btn-secondary mx-3 my-3" value="Sign In!" />
                    </form>
                </div>
            </div>
        </div>   
    )    
}

export default SignIn;