import React, { useState } from 'react'
import style from './style.module.css'

import Statistics from './Statistics'
import FeedbackOptions from './FeedbackOptions'
import Notification from './Notification'
interface FeedbackInterface {
  good: number
  netural: number
  bad: number
}
function Feedback (): JSX.Element {
  const [feedbackOptions, setFeedbackOptions] = useState<FeedbackInterface>({
    good: 0,
    netural: 0,
    bad: 0
  })

  const options = Object.keys(feedbackOptions)

  const onLeaveFeedback = (option: string): void => {
    setFeedbackOptions({ ...feedbackOptions, [option]: feedbackOptions[option as keyof FeedbackInterface] + 1 })
  }

  const countTotalFeedback = (numbers: FeedbackInterface): number => {
    return Object.values(numbers).reduce(
      (acc: number, element: number) => acc + element,
      0
    )
  }

  const countPositiveFeedbackPercentage = (numbers: FeedbackInterface): number => {
    const positiveFeedback = Math.round(
      (numbers.good / (numbers.netural + numbers.bad + numbers.good)) * 100
    )
    if (isNaN(positiveFeedback)) {
      return 0
    }
    return positiveFeedback
  }

  return (
      <section className={style.statistics}>
        <h2 className={style.title}>Please leave feedback</h2>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>

        <h3>Statistics</h3>
        {countTotalFeedback(feedbackOptions) !== 0
          ? (
          <Statistics
            good={feedbackOptions.good}
            neutral={feedbackOptions.netural}
            bad={feedbackOptions.bad}
            total={countTotalFeedback(feedbackOptions)}
            positivePercentage={countPositiveFeedbackPercentage(
              feedbackOptions
            )}
          ></Statistics>
            )
          : <Notification message="There is no feedback"/>
        }
      </section>
  )
}

export default Feedback
