import {
	CURRENT_MEMBER,
	SEND_MESSAGE,
	GET_MESSAGE
} from '../Actions/actionTypes'
import { createReducer } from 'Helpers/reducer'

const initialState = {
	currentDialog: null
}

const chat = {
	[CURRENT_MEMBER]: (state = initialState, action) => {
		return {
			...state,
			currentDialog: action.current
		}
	},
	[SEND_MESSAGE]: (state = initialState, action) => {
		let current = { ...state.currentDialog }
		current.history.push(action.message)
		return {
			...state,
			currentDialog: current
		}
	},
	[GET_MESSAGE]: (state = initialState, action) => {
		let current = { ...state.currentDialog }
		current.history.push(action.message)
		return {
			...state,
			currentDialog: current
		}
	}
}
export default createReducer(initialState, chat)
