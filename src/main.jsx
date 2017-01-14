import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import App from './page/App/App';
import Ask from './page/Ask/Ask';
import Index from './page/Index/Index';
import main from './main.css';
ReactDOM.render(
    (<Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Index} />
            {/*<Route path="users" component={Users}>*/}
                {/*<Route path="/user/:userId" component={User}/>*/}
            {/*</Route>*/}
            <Route path="/ask" component={Ask}/>
        </Route>
    </Router>),
    document.body.appendChild(document.createElement('div'))
);
