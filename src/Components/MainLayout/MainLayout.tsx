import React, { ReactChild } from 'react';

import './MainLayout.scss';
import Header from '../Header/Header';
import SideNavbar from '../SideNavbar/SideNavbar';

const MainLayout = ({ children }: { children: ReactChild }) => {
	return (
		<div className='main-layout'>
			<Header />
			<div className='main-columns'>
				<SideNavbar />
				<div className='children-container'>{children}</div>
			</div>
		</div>
	);
};

export default MainLayout;
