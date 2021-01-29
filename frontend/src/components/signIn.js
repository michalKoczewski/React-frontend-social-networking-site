import React from 'react';
import { useInput } from '../hooks/useInput';
import axios from 'axios';

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
                <div className="card-body">
                    <h5 className="card-title m-4">Login</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group m-4">
                            <label> Username </label> <br/>
                            <input type="text" className="from-control my-2" {...bindUserName}/> <br/>
                            <small className="form-text text-muted">                                
                            </small>
                        </div>
                        <div className="form-group mx-4">
                            <label> Password </label> <br/>
                            <input type="password" className="from-control my-2" {...bindUserPasswd}/> <br/>
                            <small className="form-text text-muted">                                
                            </small>
                        </div>
                        <input type="submit" className="btn btn-secondary mx-4 my-5" value="Sign In!"/>
                    </form>
                </div>
            </div>
        </div>   
    )    
}

export default SignIn;