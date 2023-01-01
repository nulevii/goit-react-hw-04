import React, { ChangeEvent } from 'react'

import style from '../style.module.css'

function Filter (props: { onFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void }): JSX.Element {
  return (
    <input
      onChange={props.onFilterChange}
      className={style.textInput}
      type="text"
    />
  )
}

export default Filter
