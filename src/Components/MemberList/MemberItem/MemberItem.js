import React from 'react'
import classes from './MemberItem.module.scss'
import { Avatar } from 'Components/UI/Avatar/Avatar'


export const MemberItem = ({ memberItem }) => (
  <div className={classes.MemberItem} >
    <Avatar image={memberItem.image} alt={memberItem.name} />
    <div className={classes.memberText}>
      <h4> {memberItem.name} </h4>
      <p> {memberItem.history[memberItem.history.length - 1]} </p>
    </div>
    <span>Jun 12, 2020</span>
  </div>
)