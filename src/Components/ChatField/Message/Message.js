import React from 'react'
import classes from './Message.module.scss'
import { Avatar } from 'Components/UI/Avatar/Avatar'

export const Message = ({ messageIn, messageOut, image }) => {
	const renderMessage = () =>
		messageIn && !messageOut ? (
			<div className={classes.messageIn}>
				<Avatar image={image} />
				<p>
					{messageIn}
					<span>4/2/1/ Jul</span>
				</p>
			</div>
		) : (
			<div className={classes.messageOut}>
				<p>
					{messageOut}
					<span>4/2/1/ Jul</span>
				</p>
			</div>
		)

	return <div className={classes.Message}>{renderMessage()}</div>
}
