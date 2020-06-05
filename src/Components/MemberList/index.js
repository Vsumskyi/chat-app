import { connect } from 'react-redux'

import { MemberListComponent } from './MemberList'
import { fetchMembersAction } from 'Redux/Actions/memberList'
import { currentMemberAction } from 'Redux/Actions/chat'

const sortMembers = (members, tarcker) => {
	members.sort((a, b) => b.sortTime - a.sortTime)
	return members.filter(track =>
		track.name.toLowerCase().includes(tarcker.toLowerCase())
	)
}
const mapStateToProps = state => {
	return {
		memberItems: sortMembers(
			state.memberList.memberItems,
			state.memberList.tracker
		),
		user: state.memberList.user,
		loading: state.memberList.loading
	}
}

const actions = {
	fetchMembers: fetchMembersAction,
	currentMember: currentMemberAction
}

export const MemberList = connect(mapStateToProps, actions)(MemberListComponent)
