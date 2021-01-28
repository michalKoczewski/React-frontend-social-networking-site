import React from 'react';

class SignIn extends React.Component {
    render() {
        return( 
            <div class="d-flex justify-content-center m-4">
                <div class="card" style={{}}>
                    <div calss="card-body">
                        <h5 class="card-title m-4">Register</h5>
                        <form>
                            <div class="form-group m-4">
                                <label for="userNameInput"> Username </label> <br/>
                                <input type="text" class="from-control my-2" id="userNameInput"/> <br/>                                
                            </div>
                            <div class="form-group mx-4">
                                <label for="userPasswdInput"> Password </label> <br/>
                                <input type="text" class="from-control my-2" id="userPasswdInput"/> <br/>                                
                            </div>
                            <button type="submit" class="btn btn-secondary mx-4 my-5">Sign In!</button>
                        </form>
                    </div>
                </div>
            </div>  
        )
    }    
}

export default SignIn;