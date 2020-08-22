import React, { ReactChild } from 'react';

import './MainLayout.scss';
import Header from '../Header/Header';

const MainLayout = ({ children }: { children: ReactChild }) => {
	return (
		<div className='main-layout'>
			<Header />
			{children}
		</div>
	);
};

export default MainLayout;
