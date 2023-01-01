import React from 'react'

import styles from './style.module.css'

function Loader (): JSX.Element {
  return (
    <section className={styles.loading}>
      <div className={styles['lds-ring']}><div></div><div></div><div></div><div></div></div>
    </section>
  )
}

export default Loader
