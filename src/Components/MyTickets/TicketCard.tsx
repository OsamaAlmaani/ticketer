import React from 'react';
import { BiRefresh } from 'react-icons/bi';

const TicketCard = ({
	id,
	title,
	description,
	lastAction,
	time,
	status,
}: {
	id: Number;
	title: String;
	description: String;
	lastAction: String;
	time: String | Date;
	status: String;
}) => {
	return (
		<div className='ticket-card'>
			<div>
				<code>TICKET ID #{id}</code>
				<p>{typeof time === 'string' ? time : time.toLocaleString()}</p>
				<p className='time-separator'>|</p>
				<div>
					<BiRefresh />
				</div>
			</div>
			<h4 className='card-title'>{title}</h4>
			<p className='card-desc'>{description}</p>
			<p className='card-sep'>--------- sep ---------</p>
			<p className='card-action'>{lastAction}</p>
		</div>
	);
};

export default TicketCard;
