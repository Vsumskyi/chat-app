import { connect } from 'react-redux'

import { MemberListComponent } from './MemberList'
import { fetchMembersAction } from 'Redux/Actions/memberList'
import { currentMemberAction } from 'Redux/Actions/chat'

const mapStateToProps = state => {
	return {
		memberItems: state.memberList.memberItems.filter(track =>
			track.name.includes(state.memberList.tracker)
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
