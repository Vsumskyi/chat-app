import React, { useEffect, useRef } from 'react'

import classes from './ChatField.module.scss'
import { FieldHeader } from 'Components/UI/FieldHeader/FieldHeader'
import { Message } from './Message/Message'
import MessageInput from 'Components/UI/MessageInput/index'
import { Loader } from 'Components/UI/Loader/Loader'

export const ChatFieldComponent = ({ currentDialog }) => {
	const divRref = useRef()
	useEffect(() => divRref.current.scrollTo(0, 99999))

	const renderMessage = () =>
		currentDialog.history.map((messageInfo, index) =>
			messageInfo.messageFromMe ? (
				<Message messageOut={messageInfo.message} key={index} />
			) : (
				<Message
					messageIn={messageInfo.message}
					key={index}
					image={currentDialog.image}
				/>
			)
		)

	return (
		<div className={classes.ChatField} ref={divRref}>
			{!!Object.keys(currentDialog).length ? (
				<>
					<FieldHeader name={currentDialog.name} image={currentDialog.image} />
					<div className={classes.chatContent}>{renderMessage()}</div>
					<MessageInput />
				</>
			) : (
				<Loader />
			)}
		</div>
	)
}
