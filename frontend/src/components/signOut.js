import React from 'react';
import { useHistory } from "react-router-dom";

export function SignOut() {
    const history = useHistory();
    localStorage.removeItem('jwt');
    window.location.reload(false);        
    history.push('/');

    return(null)    
}

export default SignOut;