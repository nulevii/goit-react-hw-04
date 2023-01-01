import React, { ChangeEventHandler, FormEventHandler } from 'react'
import style from '../styles.module.css'
function SearchForm ({ updateQ, q, updateState }:
{ updateQ: ChangeEventHandler, q: string, updateState: () => Promise<void> }): JSX.Element {
  const onUpdateState: FormEventHandler<HTMLFormElement> = (e): void => {
    e.preventDefault()
    void updateState()
  }
  return (
    <header className={style.searchForm}>
  <form onSubmit={onUpdateState} className="form">
  <button type="submit">&#128269; </button>
    <input
      onChange={updateQ}
      value={q}
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
