import React from 'react';

import './Header.scss';

import UserBadge from './UserBadge';
import Logo from './Logo';

const Header = () => {
	return (
		<div className='site-header'>
			<Logo />
			<UserBadge />
		</div>
	);
};

export default Header;
