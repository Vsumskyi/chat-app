import { ChatFieldComponent } from './ChatField'
import { connect } from 'react-redux'
import { currentMemberAction } from '../../Redux/Actions/chat'

const mapStateToProps = state => {
	return {
		currentDialog:
			state.chat.currentDialog ||
			state.memberList.memberItems.reduce((acc, curr) => {
				if (window.location.href.split('/dialog/').includes(curr.id)) {
					acc = { ...curr }
				}
				return acc
			}, {}),

		loading: state.memberList.loading,
		memberItems: state.memberList.memberItems
	}
}
const actions = {
	currentMember: currentMemberAction
}

export const ChatField = connect(mapStateToProps, actions)(ChatFieldComponent)
