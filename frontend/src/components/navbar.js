import React from 'react';

class Navbar extends React.Component {
    render() {        
        return (      
            <div style={{"height" : "45px"}}>
                <nav className="navbard h-100 navbar-expand-lg navbar-dark bg-dark">             
                    <li className="nav justify-content-center">                
                        <ul style={{"paddingLeft": "0px"}} className="nav-item">
                            <a style={{"margin" : "6px"}} type="button" className="btn btn-secondary btn-sm">nav133333</a>
                        </ul>
                        <ul style={{"paddingLeft": "0px"}} className="nav-item">
                            <a style={{"margin" : "6px"}} type="button" className="btn btn-secondary btn-sm">nav133333</a>
                        </ul>
                    </li>
                </nav>              
            </div>
        )
    }
}

export default Navbar;