import React from 'react'

import classes from './FieldHeader.module.scss'
import { Avatar } from '../Avatar/Avatar'

export const FieldHeader = ({ image, name }) => (
	<div className={classes.FieldHeader}>
		<Avatar image={image} />
		<h1> {name} </h1>
	</div>
)
