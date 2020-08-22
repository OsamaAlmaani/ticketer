import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainLayout from './Components/MainLayout/MainLayout';

function App() {
	return (
		<div className='App'>
			<MainLayout>some react router routes / content</MainLayout>
		</div>
	);
}

export default App;
