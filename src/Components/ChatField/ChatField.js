import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import classes from './ChatField.module.scss'
import { FieldHeader } from 'Components/UI/FieldHeader/FieldHeader'
import { Message } from './Message/Message'
import { MessageInput } from 'Components/UI/MessageInput'
import { Loader } from 'Components/UI/Loader/Loader'

export const ChatFieldComponent = ({
	currentDialog,
	loading,
	currentMember,
	memberItems
}) => {
	const divRref = useRef()
	useEffect(() => divRref.current.scrollTo(0, 99999), [currentDialog])

	useEffect(() => {
		currentMember(
			memberItems.find(i =>
				window.location.href.split('/dialog/').includes(i.id)
			)
		)
	}, [memberItems, currentMember])

	const renderMessage = () =>
		currentDialog.history.map((messageInfo, index) =>
			messageInfo.messageFromMe ? (
				<Message
					messageOut={messageInfo.message}
					key={index}
					messageTime={messageInfo.messageTime}
				/>
			) : (
				<Message
					messageIn={messageInfo.message}
					messageTime={messageInfo.messageTime}
					key={index}
					image={currentDialog.image}
				/>
			)
		)

	return (
		<div className={classes.ChatField} ref={divRref}>
			{!loading ? (
				<>
					<FieldHeader name={currentDialog.name} image={currentDialog.image} />
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
	currentDialog: PropTypes.object.isRequired,
	loading: PropTypes.bool.isRequired,
	memberItems: PropTypes.array.isRequired,
	currentMember: PropTypes.func.isRequired
}
