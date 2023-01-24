import React, { useEffect, useState } from 'react'
import { getTrending } from '../../utilities/getData'
import Movies from '../../components/Movies/Movies'
import { Result } from '../../utilities/interfaces'
function Home (): JSX.Element {
  const [filmsArr, setFilmsArr] = useState<Result[]>([])

  useEffect(() => {
    getTrending({ pageNumber: 1 }).then((response) => {
      const result = response
      if (result !== undefined) {
        setFilmsArr(result.data.results)
      }
    }).catch(error => console.log(error.message))
  }, [])

  return (
    <Movies filmsArr={filmsArr} />
  )
}

export default Home
