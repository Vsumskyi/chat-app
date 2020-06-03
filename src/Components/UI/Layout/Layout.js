import React from 'react'

import classes from './Layout.module.scss'

export const Layout = ({ children }) => (
	<div className={classes.Layout}>{children}</div>
)
