import React, { useState } from 'react'
import style from './App.module.css'
import Task from './components/Tasks'
function App (): JSX.Element {
  const [taskNumber, setTaskNumber] = useState(0)
  return (
    <>
      <section className={style.wrapper}>
      <div className={style.buttons}>
        <button className={style.taskButton} onClick={() => { setTaskNumber(1) }}>Task One</button>
        <button className={style.taskButton} onClick={() => { setTaskNumber(2) }}>Task Two</button>
        <button className={style.taskButton} onClick={() => { setTaskNumber(3) }}>Task Three</button>
      </div>
      <Task taskNumber={taskNumber} />
      </section>
    </>
  )
}

export default App
