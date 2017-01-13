import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'
import App from './components/App';
import main from './main.css';
ReactDOM.render(
    (<Router history={browserHistory}>
        <Route path="/" component={App}>
            {/*<Route path="about" component={About}/>*/}
            {/*<Route path="users" component={Users}>*/}
                {/*<Route path="/user/:userId" component={User}/>*/}
            {/*</Route>*/}
            {/*<Route path="*" component={NoMatch}/>*/}
        </Route>
    </Router>),
    document.body.appendChild(document.createElement('div'))
);
