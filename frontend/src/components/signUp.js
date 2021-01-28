import React from 'react';

class SignUp extends React.Component {
    render() {
        return(   
            <div className="d-flex justify-content-center m-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title m-4">Register</h5>
                        <form>
                            <div className="form-group m-4">
                                <label for="userNameInput"> Username </label> <br/>
                                <input type="text" className="from-control my-2" id="userNameInput"/> <br/>
                                <small id="userNameHelp" className="form-text text-muted">
                                    This wil be your username choose wisely!
                                </small>
                            </div>
                            <div className="form-group mx-4">
                                <label for="userPasswdInput"> Password </label> <br/>
                                <input type="text" className="from-control my-2" id="userPasswdInput"/> <br/>
                                <small id="userPasswdHelp" className="form-text text-muted">
                                    This wil be your password choose wisely!
                                </small>
                            </div>
                            <button type="submit" className="btn btn-secondary mx-4 my-5">Register!</button>
                        </form>
                    </div>
                </div>
            </div>   
        )
    }
}

export default SignUp;