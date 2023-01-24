import React, { FormEventHandler, useRef, useState } from 'react'
import style from './styles.module.css'
import { getSearchMovies } from '../../utilities/getData'
import { Result } from '../../utilities/interfaces'
import Movies from '../../components/Movies/Movies'
function SearchPage (): JSX.Element {
  const [filmsArr, setFilmsArr] = useState<Result[]>([])
  const searchValue = useRef<null | HTMLInputElement>(null)
  const onUpdateState: FormEventHandler<HTMLFormElement> = (e): void => {
    e.preventDefault()
    if (searchValue.current !== null) {
      getSearchMovies({ pageNumber: 1, query: searchValue.current.value }).then((response) => {
        const result = response
        if (result !== undefined) {
          setFilmsArr(result.data.results)
        }
      }).catch(error => console.log(error.message))
    }
  }
  return (
    <>
      <header className={style.searchForm}>
        <form onSubmit={onUpdateState} className="form">
          <button type="submit">&#128269; </button>
          <input
            ref={searchValue}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search films"
          />
        </form>
      </header>
      <Movies filmsArr={filmsArr} />
    </>
  )
}

export default SearchPage
