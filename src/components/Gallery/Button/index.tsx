import React from 'react'
import style from '../styles.module.css'
function Button ({ changePage }: { changePage: () => void }): JSX.Element {
  return (
    <button onClick={changePage} className={style.button}>Load more</button>
  )
}

export default Button
