import React from 'react';

class Navbar extends React.Component {
    render() {        
        return (      
            <nav class="navbar navbar-expand-md navbar-dark bg-dark p-1 fixed-top">
                    <div class="container">
                        <div class="collapse navbar-collapse fs-5" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto">
                                <li class="nav-item px-1">
                                    <a class="nav-link active" href="#">Home Page</a>
                                </li>
                            </ul>
                            <ul class="navbar-nav">
                                <li class="nav-item px-1">
                                    <a class="nav-link" href="#">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        )
    }
}

export default Navbar;