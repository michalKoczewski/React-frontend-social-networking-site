import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import SignUp from './components/signUp';
import SignIn from './components/signIn';
import Posts from './components/Posts';
import PostDetails from './components/PostDetails';
import UserDetails from './components/UserDetails';


function App() {
    return (
        <BrowserRouter>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark p-1 sticky-top">
                    <div className="container">
                        <div className="collapse navbar-collapse fs-5" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item px-1">
                                    <NavLink className="nav-link" to="/">Home Page</NavLink>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item px-1">
                                    <NavLink className="nav-link" to="/userDetails">Account</NavLink>
                                </li>
                                <li className="nav-item px-1">
                                    <NavLink className="nav-link" to="/login">Login</NavLink>
                                </li>
                                <li className="nav-item px-1">
                                    <NavLink className="nav-link" to="/register">Register</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <main>
                    <div style={{width: '100%', height: '100%'}}>
                    <Switch>
                        <Route path="/" exact>
                            <Posts />
                        </Route>
                        <Route path="/login">
                            <SignIn />
                        </Route>
                        <Route path="/register">
                            <SignUp />
                        </Route>
                        <Route path="/posts/:id">
                            <PostDetails />
                        </Route>
                        <Route path="userDetails">
                            <UserDetails/>
                        </Route>
                    </Switch>
                    </div>
                </main>
                <footer className="py-1 px-4 sticky-bottom bg-dark text-light text-end">
                    &copy; Kuba Posadzy, Michał Koczewski 2021
                </footer>
        </BrowserRouter>
    );
}

export default App;