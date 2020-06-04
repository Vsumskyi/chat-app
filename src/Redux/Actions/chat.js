import { CURRENT_MEMBER, SEND_MESSAGE, GET_MESSAGE } from './actionTypes'
import { axiosBaseUrl, axiosJokeUrl } from 'axios/axiosChat'

export const currentMemberAction = current => ({
	type: CURRENT_MEMBER,
	current
})

export const sendMessageAction = (messageValue, id) => {
	return async dispatch => {
		const date = new Date()

		const message = {
			messageTime: {
				date: date.toLocaleDateString(),
				time: date.toLocaleTimeString()
			},
			message: messageValue,
			messageFromMe: true
		}
		// await axiosBaseUrl.post(`members/${id}/history.json`, message)
		return dispatch(sendMessage(message, id, date.getTime()))
	}
}
export const sendMessage = (message, id, sortTime) => ({
	type: SEND_MESSAGE,
	message,
	id,
	sortTime
})

export const getMessageAction = id => {
	return async dispatch => {
		const joke = await axiosJokeUrl.get()

		const date = new Date()
		const message = {
			messageTime: {
				date: date.toLocaleDateString(),
				time: date.toLocaleTimeString()
			},

			message: joke.data.value,
			messageFromMe: false
		}
		// await axiosBaseUrl.post(`members/${id}/history.json`, message)
		return dispatch(getMessage(message, id, date.getTime()))
	}
}

export const getMessage = (message, id, sortTime) => ({
	type: GET_MESSAGE,
	message,
	id,
	sortTime
})
