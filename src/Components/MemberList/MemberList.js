import React from 'react'

import classes from './MemberList.module.scss'
import { MemberItem } from './MemberItem/MemberItem'
import { MemberHeader } from 'Components/UI/MemberHeader/MemberHeader'

const data = [
	{
		id: 1,
		name: 'шарик шарикович',
		history: ['hello', 'world']
	},
	{
		id: 2,
		name: 'футболка шарикович',
		image:
			'https://heroeswm-uvz.at.ua/imgs/katalog_statey/tumblr_m07iyfLy0F1qce1ag.jpg',
		history: ['hello', 'world']
	},
	{
		id: 4,
		name: 'шарик шарикович',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png',
		history: ['hello', 'world']
	},	{
		id: 10,
		name: 'шарик шарикович',
		history: ['hello', 'world']
	},
	{
		id: 11,
		name: 'футболка шарикович',
		image:
			'https://heroeswm-uvz.at.ua/imgs/katalog_statey/tumblr_m07iyfLy0F1qce1ag.jpg',
		history: ['hello', 'world']
	},
	{
		id: 12,
		name: 'шарик шарикович',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png',
		history: ['hello', 'world']
	}
]

const user= [{
  name: 'шарик шарикович',
  id: 12
}]

export const MemberListComponent = props => {
	const renderMemberItem = () =>
		data.map(memberItem => (
			<MemberItem key={memberItem.id} memberItem={memberItem} />
		))

	return (
  <div 
    className={classes.MemberList}>
    <MemberHeader user={user}/>

      {renderMemberItem()}
  </div>
  )
}
