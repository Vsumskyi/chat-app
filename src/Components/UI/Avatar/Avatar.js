import React from 'react'
import PropTypes from 'prop-types'

import classes from './Avatar.module.scss'

export const Avatar = ({ image, alt, isOnline = false }) =>
	image ? (
		<div className={classes.Avatar}>
			{isOnline ? <i className="far fa-check-circle"></i> : null}
			<img src={image} alt={alt} />
		</div>
	) : (
		<div className={classes.withoutImg}>
			<i className="fas fa-user"></i>
		</div>
	)

Avatar.propTypes = {
	image: PropTypes.string,
	alt: PropTypes.string,
	isOnline: PropTypes.bool
}
