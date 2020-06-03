import { CURRENT_MEMBER } from '../Actions/actionTypes'
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
	}
}
export default createReducer(initialState, chat)
