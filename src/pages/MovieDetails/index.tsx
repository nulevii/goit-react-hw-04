import React, { useEffect, useState } from 'react'
import { getSelectedMovie } from '../../utilities/getData'
import { useParams } from 'react-router-dom'
import SelectedMovie from '../../components/SelectedMovie'
import { filmData } from '../../utilities/interfaces'

function MovieDetails (): JSX.Element {
  const [filmInfo, setFilmInfo] = useState<null | filmData>(null)
  const { movieId: id } = useParams()
  useEffect(() => {
    if (id !== undefined) {
      getSelectedMovie({ id }).then((response) => {
        const result = response
        if (result !== undefined) setFilmInfo(result.data)
      }).catch(error => console.log(error.message))
    }
  }, [])
  return (
    <SelectedMovie data={filmInfo} />
  )
}

export default MovieDetails
