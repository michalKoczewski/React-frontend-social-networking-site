import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import SignUp from './components/signUp';
import SignIn from './components/signIn';
import SignOut from './components/signOut';
import Posts from './components/Posts';
import PostDelete from './components/PostDelete';
import PostDetails from './components/PostDetails';
import PostAdd from './components/PostAdd';
import UserDetails from './components/UserDetails';


function App() {
    let jwt = localStorage.getItem('jwt');

    if(jwt){
        return (
            <BrowserRouter>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark p-1 sticky-top">
                        <div className="container">
                            <div className="collapse navbar-collapse fs-5" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto">
                                    <li className="nav-item px-1">
                                        <NavLink className="nav-link" activeClassName="active" to="/" refresh="true">Home Page</NavLink>
                                    </li>
                                </ul>
                                <ul className="navbar-nav">
                                    <li className="nav-item px-1">
                                        <NavLink className="nav-link" activeClassName="active" to="/userDetails">User Details</NavLink>
                                    </li>
                                    <li className="nav-item px-1">
                                        <NavLink className="nav-link" activeClassName="active" to="/signout">Logout</NavLink>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <main>
                        <div style={{width: '100%', height: '100%'}} className="mb-4">
                        <Switch>
                            <Route path="/" exact>
                                <Posts />
                            </Route>
                            <Route path="/signout">
                                <SignOut />
                            </Route>
                            <Route path="/register">
                                <SignUp />
                            </Route>
                            <Route path="/posts/:id">
                                <PostDetails />
                            </Route>
                            <Route path="/userDetails">
                                <UserDetails/>
                            </Route>
                            <Route path="/postAdd">
                                <PostAdd />
                            </Route>
                            <Route path="/postDelete/:id">
                                <PostDelete />
                            </Route>
                        </Switch>
                        </div>
                    </main>
                    <footer className="py-1 px-4 fixed-bottom bg-dark text-light text-end">
                        &copy; Kuba Posadzy, Michał Koczewski 2021
                    </footer>
            </BrowserRouter>
        );
    }
    else {
        return (
            <BrowserRouter>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark p-1 sticky-top">
                        <div className="container">
                            <div className="collapse navbar-collapse fs-5" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item px-1">
                                        <NavLink className="nav-link" activeClassName="active" to="/register">Register</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <main>
                        <div style={{width: '100%', height: '100%'}} className="mb-4">
                        <Switch>
                            <Route path="/" exact>
                                <SignIn />
                            </Route>
                            <Route path="/register">
                                <SignUp />
                            </Route>
                        </Switch>
                        </div>
                    </main>
                    <footer className="py-1 px-4 fixed-bottom bg-dark text-light text-end">
                        &copy; Kuba Posadzy, Michał Koczewski 2021
                    </footer>
            </BrowserRouter>
        );
    }
    
}

export default App;