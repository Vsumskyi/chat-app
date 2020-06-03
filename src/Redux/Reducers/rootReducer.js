import { combineReducers } from 'redux'

import memberList from './memberList'
import chat from './chat'

export const rootReducer = combineReducers({
	memberList,
	chat
})
