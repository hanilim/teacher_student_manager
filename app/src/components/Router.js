import React from "react";
import {Link, BrowserRouter, Route, Switch} from "react-router-dom";
import '../css/Nav.css';
import App from "./App";
import Campus from "./Campus/Campus";
import Student from "./Student/Student";
import NotFound from "./NotFound";

const Router = () => (
    <BrowserRouter>
        <nav>
            <a><Link to="/">Home</Link></a>
            <a><Link to="/">Campuses</Link></a>
            <a>Students</a>
        </nav>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/Campus" component={Campus}/>
            <Route exact path="/Student" component={Student}/>
            <Route exact component={NotFound}/>
        </Switch>
    </BrowserRouter>
)
export default Router;
