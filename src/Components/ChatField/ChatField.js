import React, {useEffect, useRef } from 'react'
import classes from './ChatField.module.scss'
import { FieldHeader } from '../UI/FieldHeader/FieldHeader'
import { Message } from './Message/Message'

const client = {
	id: 12,
	name: 'шарик шарикович',
	image:
		'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png',
	history: [
		{ message: '1', messageFromMe: true },
		{ message: 'hi', messageFromMe: false },
		{ message: 'hi', messageFromMe: true },
		{ message: 'hi', messageFromMe: false },
		{ message: 'hi', messageFromMe: true },
		{ message: 'hi', messageFromMe: false },
		{ message: 'hi', messageFromMe: true },
		{ message: 'hi', messageFromMe: false },
		{ message: 'hi', messageFromMe: true },
		{ message: 'hi', messageFromMe: false },
		{ message: 'hi', messageFromMe: true },
		{ message: 'hi', messageFromMe: false },
		{ message: 'hi', messageFromMe: false },
		{ message: 'hi', messageFromMe: false },
		{ message: 'hi', messageFromMe: false },
		{ message: 'i love u', messageFromMe: true },
		{ message: 'i love u 2', messageFromMe: false },
		
	]
}

export const ChatFieldComponent = props => {
 
	const divRref = useRef()

	//TODO scroll!
	useEffect(() => 
		divRref.current.scrollTo({
			top: divRref.current.clientHeight
		}))
	
		//TODO!
	const renderMessage = () =>
		client.history.map((messageInfo, index) =>
		messageInfo.messageFromMe ? (
				<Message messageOut={messageInfo.message} key={index} />
			) : (
				<Message messageIn={messageInfo.message} key={index} image={client.image} />
			)
		)

		//TODO input!
	return (
		<div className={classes.ChatField} ref={divRref}>
			<FieldHeader name={client.name} image={client.image} />
			<div className={classes.chatContent}>
			{renderMessage()}
			</div>
		</div>
	)
}
