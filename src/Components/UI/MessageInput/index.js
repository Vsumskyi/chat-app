import { MessageInputComponent } from './MessageInput'
import { connect } from 'react-redux'
import { sendMessageAction } from 'Redux/Actions/chat'
import { getMessageAction } from '../../../Redux/Actions/chat'

// const mapStateToProps = state => {
// 	return {

// 	}
// }

const actions = {
	sendMessage: sendMessageAction,
	getMessage: getMessageAction
}

export const MessageInput = connect(null, actions)(MessageInputComponent)
