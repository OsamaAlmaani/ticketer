import React from 'react';

const UserBadge = () => {
	// TODO: username and stuff will come from redux

	return (
		<div className='user-badge'>
			<div className='user-badge-title-container'>
				<h4 className='user-badge-title'>Osama Almaani</h4>
				<p className='user-badge-subtitle'>Web Developer</p>
			</div>
			<img src='https://source.unsplash.com/400x400/?face' alt='user-profile-img' />
		</div>
	);
};

export default UserBadge;
