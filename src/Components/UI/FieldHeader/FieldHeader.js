import React from 'react'
import PropTypes from 'prop-types'

import classes from './FieldHeader.module.scss'
import { Avatar } from '../Avatar/Avatar'

export const FieldHeader = ({ currentDialog }) => (
	<div className={classes.FieldHeader}>
		<Avatar image={currentDialog.image} isOnline={currentDialog.isOnline} />
		<h1> {currentDialog.name} </h1>
	</div>
)

FieldHeader.propTypes = {
	currenDialog: PropTypes.object
}
