import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainLayout from './Components/MainLayout/MainLayout';

function App() {
	return (
		<BrowserRouter>
			<MainLayout>
				<Switch>
					<Route path='/' exact>
						Home page
					</Route>
					<Route>404</Route>
				</Switch>
			</MainLayout>
		</BrowserRouter>
	);
}

export default App;
