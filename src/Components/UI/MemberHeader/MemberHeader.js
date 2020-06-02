import React from 'react'

import classes from './MemberHeader.module.scss'
import SearchComponent from '../Search'
import {Avatar} from '../Avatar/Avatar'

export const MemberHeader = ({user}) => {

  return (

    <div className={classes.MemberHeader} >
      <Avatar avatar={user.image} alt={user.name}/>
      <SearchComponent />
    </div>
  )
}