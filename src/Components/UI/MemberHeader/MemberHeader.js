import React from 'react'
import PropTypes from 'prop-types'

import classes from './MemberHeader.module.scss'
import { Search } from '../Search'
import { Avatar } from '../Avatar/Avatar'

export const MemberHeader = ({ user }) => (
  <div className={classes.MemberHeader}>
    <div className={classes.memberContacts}>
      <Avatar image={user.image} alt={user.name} isOnline={user.isOnline} />
      <h2>{user.name}</h2>
    </div>
    <Search />
  </div>
)

MemberHeader.propTypes = {
  user: PropTypes.object.isRequired
}
