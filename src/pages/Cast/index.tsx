import React, { useEffect, useState } from 'react'
import { getCast } from '../../utilities/getData'
import { useParams } from 'react-router-dom'
import CastInfo from '../../components/CastInfo'
import { Cast as TCast } from '../../utilities/interfaces'

function Cast (): JSX.Element {
  const [castInfo, setCastInfo] = useState<null | TCast[]>(null)
  const { movieId: id } = useParams()
  useEffect(() => {
    if (id !== undefined) {
      getCast({ id }).then((response) => {
        const result = response

        if (result !== undefined) {
          setCastInfo(result.data.cast)
        }
      }).catch(error => console.log(error.message))
    }
  }, [])
  return (
    <CastInfo cast={castInfo}/>
  )
}

export default Cast
