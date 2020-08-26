import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainLayout from './Components/MainLayout/MainLayout';
import MyTickets from './Components/MyTickets/MyTickets';

function App() {
	return (
		<BrowserRouter>
			<MainLayout>
				<Switch>
					<Route path='/' exact>
						<MyTickets />
					</Route>
					<Route>404</Route>
				</Switch>
			</MainLayout>
		</BrowserRouter>
	);
}

export default App;
