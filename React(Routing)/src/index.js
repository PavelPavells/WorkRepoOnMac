import ReactDOM from 'react-dom';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './components/nav.jsx.js';
import Home from './components/home.jsx.js';
import Products from './components/products.jsx.js';
import NotFound from './component/notfound.jsx.js';

ReactDOM.render(
    <Router>
        <div>
            <Nav />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/products' component={Products}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </Router>,
    document.getElementById('app')
)