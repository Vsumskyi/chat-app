import { FILTERED_MESSAGE, FETCH_MEMBERS } from './actionTypes'
import axios from 'axios/axiosChat'

export const filterDialogsAction = key => ({
	type: FILTERED_MESSAGE,
	key
})

export const fetchMembersAction = () => {
	return async dispatch => {
		const members = await axios.get('members.json')
		dispatch(fetchMembers(members.data))
	}
}
export const fetchMembers = members => {
	return {
		type: FETCH_MEMBERS,
		members
	}
}
