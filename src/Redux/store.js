import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './Reducers/rootReducer'

export const storeCreator = () => {
	const enhancer = composeWithDevTools(applyMiddleware(thunk))
	return createStore(rootReducer, enhancer)
}
