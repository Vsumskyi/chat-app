import { ChatFieldComponent } from './ChatField'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    currentDialog: state.chat.currentDialog,
    loading: state.memberList.loading
  }
}

export const ChatField = connect(mapStateToProps, null)(ChatFieldComponent)
