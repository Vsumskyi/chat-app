import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './MemberItem.module.scss'
import { Avatar } from 'Components/UI/Avatar/Avatar'

export const MemberItem = ({ memberItem, onCurrentMember }) => (
	<NavLink
		exact
		to={`/dialog/${memberItem.id}`}
		onClick={() => onCurrentMember(memberItem)}
		activeClassName={classes.activeDialog}
		className={classes.MemberItem}>
		<Avatar image={memberItem.image} alt={memberItem.name} />
		<div className={classes.memberText}>
			<h4> {memberItem.name} </h4>
			<p> {memberItem.history[memberItem.history.length - 1].message} </p>
		</div>
		<span>Jun 12, 2020</span>
	</NavLink>
)
