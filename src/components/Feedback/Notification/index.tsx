import React from 'react'

function Notification ({ message }: { message: string }): JSX.Element {
  return (
    <div>
      <p>{message}</p>
    </div>
  )
}

export default Notification
