import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import classes from './ChatField.module.scss'
import { FieldHeader } from 'Components/UI/FieldHeader/FieldHeader'
import { Message } from './Message/Message'
import { MessageInput } from 'Components/UI/MessageInput'
import { Loader } from 'Components/UI/Loader/Loader'

export const ChatFieldComponent = ({ currentDialog, loading }) => {
	const divRref = useRef()
	useEffect(() => divRref.current.scrollTo(0, 99999), [currentDialog])

	const renderMessage = () =>
		currentDialog.history.map((messageInfo, index) =>
			messageInfo.messageFromMe ? (
				<Message
					key={index}
					messageOut={messageInfo.message}
					messageTime={messageInfo.messageTime}
				/>
			) : (
				<Message
					key={index}
					messageIn={messageInfo.message}
					messageTime={messageInfo.messageTime}
					image={currentDialog.image}
				/>
			)
		)

	return (
		<div className={classes.ChatField} ref={divRref}>
			{!loading && currentDialog ? (
				<>
					<FieldHeader currentDialog={currentDialog} />
					<div className={classes.chatContent}>{renderMessage()}</div>
					<MessageInput currentDialogId={currentDialog.id} />
				</>
			) : (
				<Loader />
			)}
		</div>
	)
}

ChatFieldComponent.propTypes = {
	currentDialog: PropTypes.object || null.isRequired, // await fetch
	loading: PropTypes.bool.isRequired
}
