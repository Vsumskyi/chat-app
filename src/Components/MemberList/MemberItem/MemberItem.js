import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import classes from './MemberItem.module.scss'
import { Avatar } from 'Components/UI/Avatar/Avatar'

export const MemberItems = ({ memberItem, onCurrentMember }) => {
	const sliceText = () => {
		let { history } = memberItem
		if (history[history.length - 1].message.length > 50) {
			return history[history.length - 1].message.slice(0, 50) + '...'
		} else {
			return history[history.length - 1].message
		}
	}

	return (
		<NavLink
			exact
			to={`/dialog/${memberItem.id}`}
			onClick={() => onCurrentMember(memberItem)}
			activeClassName={classes.activeDialog}
			className={classes.MemberItem}>
			<Avatar
				image={memberItem.image}
				alt={memberItem.name}
				isOnline={memberItem.isOnline}
			/>
			<div className={classes.memberText}>
				<h4> {memberItem.name} </h4>
				<p> {sliceText()} </p>
			</div>
			<span>
				{memberItem.history[memberItem.history.length - 1].messageTime.date}
			</span>
		</NavLink>
	)
}
MemberItems.propTypes = {
	memberItem: PropTypes.object.isRequired,
	onCurrentMember: PropTypes.func.isRequired
}
