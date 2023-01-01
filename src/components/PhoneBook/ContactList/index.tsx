import React from 'react'
import style from '../style.module.css'

import Contact from './Contact'
function ContactList ({
  contacts,
  filter,
  onDeleteContact
}: {
  contacts: Array<{ name: string, number: string, id: string }>
  filter: string
  onDeleteContact: (contactId: string) => void
}): JSX.Element {
  if (contacts.length === 0) return <p>Contacts is empty</p>
  const filterText = filter.trim().replace(/[^a-zA-Z ]/g, '').replace(/\s\s+/g, ' ')
  const filterRegExp = new RegExp(`${filterText}`, 'gi')
  const filteredElements = contacts.filter(({ name }) => name.match(filterRegExp))
  return (
    <ul className={style.contactsList}>
      {filteredElements.map(({ name, number, id }) => (
        <Contact
          key={id}
          onDeleteContact={onDeleteContact}
          name={name}
          number={number}
          id={id}
        ></Contact>
      ))}
    </ul>
  )
}

export default ContactList
