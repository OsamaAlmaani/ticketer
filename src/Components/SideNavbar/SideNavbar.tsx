import React from 'react';
import { BiSupport, BiSearchAlt2 } from 'react-icons/bi';
import { TiTicket } from 'react-icons/ti';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { HiOutlineChatAlt } from 'react-icons/hi';

import './SideNavbar.scss';
import NavbarItem from './NavbarItem';

const SideNavbar = () => {
	return (
		<div className='side-navbar'>
			<h2 className='title'>Help & Support</h2>
			<p className='subtitle'>Let's take a step ahead and help you better.</p>

			<div className='input-container'>
				<BiSearchAlt2 className='icon' />
				<input className='search-box' type='text' placeholder='Search Your Queries...' />
			</div>

			<NavbarItem
				icon={<TiTicket size={26} color='#ffffff' />}
				title='My Tickets'
				subtitle='See the status of your existing tickets here'
				color='blue'
			/>
			<NavbarItem
				icon={<BiSupport size={26} color='#ffffff' />}
				title='Help Center'
				subtitle='Issue-tree of up to three levels'
				color='purple'
			/>
			<NavbarItem
				icon={<HiOutlineChatAlt size={26} color='#ffffff' />}
				title='Personal Assistant'
				subtitle='You can call, request call-back or chat with us'
				color='green'
			/>
			<NavbarItem
				icon={<AiOutlineQuestionCircle size={26} color='#ffffff' />}
				title='FAQs'
				subtitle='Find the frequently asked questions here'
				color='black'
			/>
		</div>
	);
};

export default SideNavbar;
