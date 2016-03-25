import React                   from 'react';
import { Route, IndexRoute }   from 'react-router';
import App                     from 'components/App.jsx';
import MainLayout              from 'components/MainLayout.jsx'
import Home                    from 'components/Home.jsx';

export default (
    <Route name="app" component={App} path="/">
        <Route component={MainLayout}>
            <IndexRoute component={Home}/>
        </Route>
    </Route>
);
