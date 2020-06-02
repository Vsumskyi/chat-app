import React from 'react'

import classes from './Avatar.module.scss'

export const Avatar = ({ image, alt }) =>
	image ? (
		<img className={classes.Avatar} src={image} alt={alt} />
	) : (
		<div className={`${classes.Avatar} ${classes.withoutImg}`}>
			<i className="fas fa-user"></i>
		</div>
	)
