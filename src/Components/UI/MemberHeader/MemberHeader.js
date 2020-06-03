import React from 'react'

import classes from './MemberHeader.module.scss'
import {Search} from '../Search'
import {Avatar} from '../Avatar/Avatar'

export const MemberHeader = ({user}) => (
    <div className={classes.MemberHeader} >
      <Avatar image={user.image} alt={user.name}/>
      <Search />
    </div>
  )