import React, { FormEventHandler, useRef } from 'react'
import style from '../styles.module.css'
function SearchForm ({ updateQ, q, updateState }:
{ updateQ: (qValue: string) => void, q: string, updateState: () => Promise<void> }): JSX.Element {
  const searchValue = useRef<null | HTMLInputElement>(null)
  const onUpdateState: FormEventHandler<HTMLFormElement> = (e): void => {
    e.preventDefault()
    if (searchValue.current !== null) {
      updateQ(searchValue.current.value)
    }
  }
  return (
    <header className={style.searchForm}>
  <form onSubmit={onUpdateState} className="form">
  <button type="submit">&#128269; </button>
    <input
      ref={searchValue}
      className="input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>

  )
}

export default SearchForm
