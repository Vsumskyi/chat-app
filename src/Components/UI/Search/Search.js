import React from 'react'
import PropTypes from 'prop-types'

import classes from './Search.module.scss'

export const SearchComponent = ({ filterDialogs }) => (
	<div className={classes.Search}>
		<input
			onChange={({ target }) => filterDialogs(target.value)}
			placeholder="Search"
		/>
		<i className="fas fa-search"></i>
	</div>
)
SearchComponent.propTypes = {
	filterDialogs: PropTypes.func.isRequired
}