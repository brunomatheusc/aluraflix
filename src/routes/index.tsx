import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/index';
import AddVideo from './../pages/AddVideo/index';

const Routes: FC = () => {
	return (
		<>
			<Switch>
				<Route path="/" exact component={ Home } />
				<Route path="/cadastro" component={ AddVideo } />
			</Switch>
		</>
	);
};

export default Routes;