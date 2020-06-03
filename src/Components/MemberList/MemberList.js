import React, { useEffect } from 'react'

import classes from './MemberList.module.scss'
import { MemberItem } from './MemberItem/MemberItem'
import { MemberHeader } from 'Components/UI/MemberHeader/MemberHeader'
import { Loader } from 'Components/UI/Loader/Loader'

export const MemberListComponent = ({
	memberItems,
	user,
	fetchMembers,
	loading,
	currentMember
}) => {
	useEffect(() => {
		fetchMembers()
	}, [fetchMembers])

	const renderMemberItem = () =>
		memberItems.map(memberItem => (
			<MemberItem
				key={memberItem.id}
				memberItem={memberItem}
				onCurrentMember={currentMember}
			/>
		))

	return (
		<div className={classes.MemberList}>
			<MemberHeader user={user} />
			{!loading ? renderMemberItem() : <Loader />}
		</div>
	)
}
