import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
// import HomePage from './containers/HomePage';
import Home from './containers/home/Home';
import CounterPage from './containers/counter/CounterPage';


export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="/counter" component={CounterPage} />
	</Route>
);
