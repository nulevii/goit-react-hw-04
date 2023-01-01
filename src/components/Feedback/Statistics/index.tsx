import React from 'react'
import style from '../style.module.css'

interface StatisticsInterface {
  good: number
  neutral: number
  bad: number
  total: number
  positivePercentage: number
}

function Statistics ({
  good,
  neutral,
  bad,
  total,
  positivePercentage
}: StatisticsInterface): JSX.Element {
  return (
    <>
      <div className={style.statValues}>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>PositiveFeedback: {positivePercentage}%</p>
      </div>
    </>
  )
}

export default Statistics
