import React from 'react'
import classes from './MessageInput.module.scss'

export const MessageInputComponent = props => {
	return (
		<div className={classes.MessageInputLayout}>
			<div className={classes.MessageInput}>
				<input placeholder="Type the message" />

				<i className="far fa-paper-plane"></i>
			</div>
		</div>
	)
}
