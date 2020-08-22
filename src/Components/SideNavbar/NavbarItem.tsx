import React, { ReactNode } from 'react';

const NavbarItem = ({
	title,
	subtitle,
	color,
	icon,
}: {
	title: String;
	subtitle: String;
	color: 'blue' | 'purple' | 'green' | 'black';
	icon: ReactNode;
}) => {
	return (
		<div className='navbar-item-container'>
			<div className={`icon-container ${color}`}>{icon}</div>
			<div className='title-container'>
				<h5 className='title'>{title}</h5>
				<p className='subtitle'>{subtitle}</p>
			</div>
		</div>
	);
};

export default NavbarItem;
