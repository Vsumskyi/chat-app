import {
  FILTERED_MESSAGE,
  FETCH_MEMBERS,
  SEND_MESSAGE,
  GET_MESSAGE
} from '../Actions/actionTypes'
import { createReducer } from 'Helpers/reducer'

const initialState = {
  memberItems: [],
  loading: true,
  tracker: '',
  user: {}
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
      user: action.user,
      loading: false
    }
  },
  [SEND_MESSAGE]: (state = initialState, action) => {
    return {
      ...state,
      memberItems: state.memberItems.map(i => {
        if (i.id === action.id) {
          i.sortTime = action.sortTime
          return i
        }
        return i
      })
    }
  },
  [GET_MESSAGE]: (state = initialState, action) => {
    return {
      ...state,
      memberItems: state.memberItems.map(i => {
        if (i.id === action.id) {
          i.sortTime = action.sortTime
          return i
        }
        return i
      })
    }
  }
}
export default createReducer(initialState, memberList)
