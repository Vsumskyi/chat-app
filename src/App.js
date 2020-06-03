import React from 'react'
import './App.scss'

import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { MemberList } from './Components/MemberList'
import { ChatField } from './Components/ChatField'
import { Layout } from './Components/UI/Layout/Layout'
import { Background } from './Components/ChatField/Background/Background'

export const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Layout>
					<MemberList />
					<Switch>
						<Route path="/dialog/:id" component={ChatField} />
						<Route path="/" component={Background} />
						<Route path="/dialog" component={Background} />
					</Switch>
				</Layout>
			</BrowserRouter>
		</div>
	)
}
