import React from 'react'
import style from '../style.module.css'

function FeedbackOptions ({ options, onLeaveFeedback }: {
  options: string[]
  onLeaveFeedback: (option: string) => void
}): JSX.Element {
  return (
    <div className={style.statButtons}>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => {
            onLeaveFeedback(option)
          }}
        >
          {option}
        </button>
      ))}
    </div>
  )
}

export default FeedbackOptions
