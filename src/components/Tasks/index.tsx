import React from 'react'

import Feedback from '../Feedback'
import PhoneBook from '../PhoneBook'
import Gallery from '../Gallery'

function Task ({ taskNumber }: { taskNumber: number }): JSX.Element | null {
  if (taskNumber === 1) {
    return <Feedback/>
  }
  if (taskNumber === 2) {
    return <PhoneBook/>
  }
  if (taskNumber === 3) {
    return <Gallery />
  }

  return null
}

export default Task
