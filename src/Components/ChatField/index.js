import { ChatFieldComponent } from './ChatField'
import { connect } from 'react-redux'

const mapStateToProps = state => {
	return {
		currentDialog:
			state.chat.currentDialog ||
			state.memberList.memberItems.reduce((acc, curr) => {
				if (window.location.href.includes(curr.id)) {
					acc = { ...curr }
				}
				return acc
			}, {})
	}
}

export const ChatField = connect(mapStateToProps, null)(ChatFieldComponent)
