import { FILTERED_MESSAGE, FETCH_MEMBERS } from './actionTypes'
import { axiosBaseUrl } from 'axios/axiosChat'

export const filterDialogsAction = key => ({
  type: FILTERED_MESSAGE,
  key
})

export const fetchMembersAction = () => {
  return async dispatch => {
    const members = await axiosBaseUrl.get('members.json')
    const user = await axiosBaseUrl.get('user.json')

    Object.keys(members.data).forEach(i => {
      members.data[i].history = Object.values(members.data[i].history)
      members.data[i].id = i
    })

    const currentDialog = members.data.find(i =>
      window.location.href.split('/dialog/').includes(i.id)
    )

    dispatch(fetchMembers(members.data, user.data, currentDialog))
  }
}
export const fetchMembers = (members, user, currentDialog) => {
  return {
    type: FETCH_MEMBERS,
    members,
    user,
    currentDialog
  }
}
