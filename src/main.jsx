import React from 'react';
import ReactDOM from 'react-dom';
import main from './main.css';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import App from './page/App/App';
import Ask from './page/Ask/Ask';
import Job from './page/Job/Job';
import Share from './page/Share/Share';
import Index from './page/Index/Index';
import Info from './page/Info/Info';
ReactDOM.render(
    (<Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Index} />
            <Route path="/ask" component={Ask}/>
            <Route path="/job" component={Job}/>
            <Route path="/share" component={Share}/>
        </Route>
        <Route path="/info" component={Info}></Route>
    </Router>),
    document.body.appendChild(document.createElement('div'))
);
