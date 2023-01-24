import React, { useEffect, useState } from 'react'
import { getReviews } from '../../utilities/getData'
import { useParams } from 'react-router-dom'
import ReviewsInfo from '../../components/reviewsInfo'
import { ReviewsResult } from '../../utilities/interfaces'

function Reviews (): JSX.Element {
  const [reviewsInfo, setCastInfo] = useState<null | ReviewsResult[]>(null)
  const { movieId: id } = useParams()
  useEffect(() => {
    if (id !== undefined) {
      getReviews({ id }).then((response) => {
        const result = response
        console.log(result)
        if (result !== undefined) {
          setCastInfo(result.data.results)
        }
      }).catch(error => console.log(error.message))
    }
  }, [])
  return (
    <ReviewsInfo reviewsInfo={reviewsInfo}/>
  )
}

export default Reviews
