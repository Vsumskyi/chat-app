import React from 'react'

import classes from './Search.module.scss'

export const SearchComponent = ({ filterDialogs }) => (
	<div className={classes.Search}>
		<input
			onChange={({ target }) => filterDialogs(target.value)}
			type="text"
			placeholder="Введите поисковый запрос или URL"
		/>
		<i className="fas fa-search"></i>
	</div>
)
