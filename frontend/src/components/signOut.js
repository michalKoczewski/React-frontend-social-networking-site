import React from 'react';
import { Redirect } from 'react-router-dom';

export function SignOut() {
    
    localStorage.removeItem('jwt')        

    return(   
        <Redirect to="/" />        
    )    
}

export default SignOut;