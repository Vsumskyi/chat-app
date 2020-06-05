import React from 'react'
import PropTypes from 'prop-types'

import classes from './Message.module.scss'
import { Avatar } from 'Components/UI/Avatar/Avatar'

export const Message = ({ messageIn, messageOut, image, messageTime }) => {
	const renderMessage = () =>
		messageIn && !messageOut ? (
			<div className={classes.messageIn}>
				<Avatar image={image} isOnline={false} />
				<p>
					{messageIn}
					<span>{`${messageTime.date} ${messageTime.time}`}</span>
				</p>
			</div>
		) : (
			<div className={classes.messageOut}>
				<p>
					{messageOut}
					<span>{`${messageTime.date} ${messageTime.time}`}</span>
				</p>
			</div>
		)

	return <div className={classes.Message}>{renderMessage()}</div>
}

Message.propTypes = {
	messageIn: PropTypes.string,
	messageOut: PropTypes.string,
	image: PropTypes.string,
	messageTime: PropTypes.object,
	time: PropTypes.string
}
