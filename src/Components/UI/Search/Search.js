import React from 'react'

import classes from './Search.module.scss'

export const SearchComponent = props => (
  <div
  className={classes.Search} >
  <input 
    type="text" 
    placeholder="Введите поисковый запрос или URL"/>
    <i className="fas fa-search"></i>

    </div>
)
