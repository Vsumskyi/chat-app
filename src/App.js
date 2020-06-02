import React from 'react'
import './App.scss'
import MemberList from './Components/MemberList'
import ChatField from './Components/ChatField'

export const App = () => {
	return (
		<div className="App">
			<MemberList />
			<ChatField />
		</div>
	)
}
