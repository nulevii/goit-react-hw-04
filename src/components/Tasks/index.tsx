import React from 'react'

import PhoneBook from '../PhoneBook'
import Gallery from '../Gallery'

function Task ({ taskNumber }: { taskNumber: number }): JSX.Element | null {
  if (taskNumber === 1) {
    return <PhoneBook/>
  }
  if (taskNumber === 2) {
    return <Gallery />
  }

  return null
}

export default Task
