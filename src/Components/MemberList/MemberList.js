import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import classes from './MemberList.module.scss'
import { MemberItems } from './MemberItem/MemberItem'
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
      <MemberItems
        key={memberItem.id}
        memberItem={memberItem}
        onCurrentMember={currentMember}
      />
    ))

  return (
    <div className={classes.MemberList}>
      <MemberHeader user={user} />
      <h3>Chats</h3>
      {!loading ? renderMemberItem() : <Loader />}
    </div>
  )
}

MemberListComponent.propTypes = {
  memberItems: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  currentMember: PropTypes.func.isRequired
}
