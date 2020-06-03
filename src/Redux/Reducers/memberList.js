import { FILTERED_MESSAGE, FETCH_MEMBERS } from '../Actions/actionTypes'
import { createReducer } from 'Helpers/reducer'

const initialState = {
	memberItems: [],
	loading: true,
  tracker: '',
	user: {
		name: 'шарик шарикович',
		id: 12,
		image:
			'https://heroeswm-uvz.at.ua/imgs/katalog_statey/tumblr_m07iyfLy0F1qce1ag.jpg'
	},
}

const memberList = {
	[FILTERED_MESSAGE]: (state = initialState, action) => {
		return {
      ...state,
			tracker: action.key
		}
	},
	[FETCH_MEMBERS]: (state = initialState, action) => {
		return {
			...state,
			memberItems: action.members,
			loading: false
		}
	},
}
export default createReducer(initialState, memberList)
