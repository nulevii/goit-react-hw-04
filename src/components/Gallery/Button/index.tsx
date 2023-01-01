import React from 'react'
import style from '../styles.module.css'
function Button ({ loadMore }: { loadMore: () => Promise<void> }): JSX.Element {
  const onLoadMore = (): void => {
    void loadMore()
  }
  return (
    <button onClick={onLoadMore} className={style.button}>Load more</button>
  )
}

export default Button
