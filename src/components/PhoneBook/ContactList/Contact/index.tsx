import React from 'react'
import style from '../../style.module.css'

function Contact (props: {
  onDeleteContact: (contactId: string) => void
  name: string
  number: string
  id: string
}): JSX.Element {
  return (
    <li>
      <span className={style.contactName}> {props.name}</span>
      <span className={style.contactNumber}>{props.number}</span>
      <button
        onClick={() => {
          props.onDeleteContact(props.id)
        }}
        className={`${style.cyberButton} ${style.small}`}
      >
        DELETE
      </button>
    </li>
  )
}

export default Contact
