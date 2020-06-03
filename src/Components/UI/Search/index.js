import { SearchComponent } from './Search'
import { connect } from 'react-redux'
import { filterDialogsAction } from 'Redux/Actions/memberList'

const actions = {
	filterDialogs: filterDialogsAction
}

export const Search = connect(null, actions)(SearchComponent)
