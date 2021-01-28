import React from 'react';

class SignUp extends React.Component {
    render() {
        return(   
            <div class="d-flex justify-content-center m-4">
                <div class="card" style={{}}>
                    <div calss="card-body">
                        <h5 class="card-title m-4">Register</h5>
                        <form>
                            <div class="form-group m-4">
                                <label> Username </label> <br/>
                                <input type="text" class="from-control my-2" id="userNameInput"/> <br/>
                                <small id="userNameHelp" class="form-text text-muted">
                                    This wil be your username choose wisely!
                                </small>
                            </div>
                            <div class="form-group mx-4">
                                <label> Password </label> <br/>
                                <input type="password" class="from-control my-2" id="userPasswdInput"/> <br/>
                                <small id="userPasswdHelp" class="form-text text-muted">
                                    This wil be your password choose wisely!
                                </small>
                            </div>
                            <button class="btn btn-secondary mx-4 my-5">Register!</button>
                        </form>
                    </div>
                </div>
            </div>   
        )
    }
}



export default SignUp;