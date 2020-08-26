import React from 'react';

import './MyTickets.scss';
import TicketCard from './TicketCard';

const MyTickets = () => {
	return (
		<div className='my-tickets-screen'>
			<div className='header'>
				<h3 className='title'>Ticket History</h3>
				<button className='main-btn'>Raise a ticket</button>
			</div>

			<h5>Pending</h5>
			<TicketCard
				id={323849348}
				time={new Date().toLocaleString()}
				status='Pending'
				title='Subject of the issue'
				description='Magna in consectetur sit occaecat. Nulla ex do consequat velit minim elit amet cillum. Et laboris cupidatat incididunt dolor exercitation. Anim id sit labore ex. Pariatur laborum consectetur deserunt ex enim. Ea ullamco quis reprehenderit dolore enim consectetur est enim cupidatat eu mollit sit ipsum.'
				lastAction='We are looking into your issue, hope to resolve it at the earliest'
			/>
			<h5>Resolved</h5>
		</div>
	);
};

export default MyTickets;
