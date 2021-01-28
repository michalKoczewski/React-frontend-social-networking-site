import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import SignUp from './components/signUp';
import SignIn from './components/signIn';
import Posts from './components/Posts';
import PostDetails from './components/PostDetails';


function App() {
    return (
        <BrowserRouter>
                <nav class="navbar navbar-expand-md navbar-dark bg-dark p-1 sticky-top">
                    <div class="container">
                        <div class="collapse navbar-collapse fs-5" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto">
                                <li class="nav-item px-1">
                                    <Link className="nav-link" to="/" activeClassName="active">Home Page</Link>
                                </li>
                            </ul>
                            <ul class="navbar-nav">
                                <li class="nav-item px-1">
                                    <Link className="nav-link" to="/login" activeClassName="active">Sign in</Link>
                                </li>
                                <li class="nav-item px-1">
                                    <Link className="nav-link" to="/register" activeClassName="active">Register</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <main>
                    <div style={{width: '100%', height: '100%'}}>
                    <Switch>
                        <Route exact path="/">
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
                    </Switch>
                    </div>
                </main>
                <footer className="py-1 px-4 fixed-bottom bg-dark text-light text-end">
                    &copy; Kuba Posadzy, Michał Koczewski 2021
                </footer>
        </BrowserRouter>
    );
}

export default App;