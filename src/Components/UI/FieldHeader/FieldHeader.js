import React from 'react'
import PropTypes from 'prop-types'

import classes from './FieldHeader.module.scss'
import { Avatar } from '../Avatar/Avatar'

export const FieldHeader = ({ image, name }) => (
	<div className={classes.FieldHeader}>
		<Avatar image={image} />
		<h1> {name} </h1>
	</div>
)

FieldHeader.propTypes = {
	image: PropTypes.string,
	name: PropTypes.string
}