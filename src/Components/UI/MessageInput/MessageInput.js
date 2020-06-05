import React, { useState } from 'react'
import PropTypes from 'prop-types'

import classes from './MessageInput.module.scss'

export const MessageInputComponent = ({
	sendMessage,
	currentDialogId,
	getMessage
}) => {
	const [inputValue, setInputValue] = useState('')

	const writeHandler = event => {
		setInputValue(event.target.value)

		if (inputValue && event.key === 'Enter') {
			setInputValue('')
			sendMessage(inputValue, currentDialogId)
			setTimeout(() => getMessage(currentDialogId), 1000)
		}
	}

	const sendHandler = () => {
		if (inputValue) {
			setInputValue('')
			sendMessage(inputValue, currentDialogId)
			setTimeout(() => getMessage(currentDialogId), 1000)
		}
	}

	return (
		<div className={classes.MessageInputLayout}>
			<div className={classes.MessageInput}>
				<input
					placeholder="Type the message"
					value={inputValue}
					onChange={writeHandler}
					onKeyDown={writeHandler}
				/>

				<i className="far fa-paper-plane" onClick={sendHandler}></i>
			</div>
		</div>
	)
}

MessageInputComponent.propTypes = {
	sendMessage: PropTypes.func.isRequired,
	getMessage: PropTypes.func.isRequired,
	currentDialogId: PropTypes.string.isRequired
}
