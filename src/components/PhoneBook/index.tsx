import React, { ChangeEvent, useEffect, useState } from 'react'
import { nanoid } from 'nanoid'

import style from './style.module.css'

import ContactForm from './ContactForm'
import ContactList from './ContactList'
import Filter from './Filter'

interface IContact { name: string, number: string, id: string }

function PhoneBook (): JSX.Element {
  const [contacts, setContacts] = useState<IContact[]>([{ id: 'id-1', name: 'Johnny Silverhand', number: '459-20-77' }])
  const [filter, setFilter] = useState('')

  useEffect((): void => {
    const contacts = JSON.parse((localStorage.getItem('contacts')) ??
    '[{"id":"id-1","name":"Johnny Silverhand","number":"459-20-77"}]')

    setContacts(contacts)
    setFilter('')
  })

  const onAddContact = (name: string, number: string): void => {
    if (contacts.some((contact) => contact.name === name)) {
      alert(`${name} is already in contacts.`)
      return
    }
    const newContacts = [...contacts, { name, number, id: nanoid() }]
    localStorage.setItem('contacts', JSON.stringify(newContacts))
    setContacts(newContacts)
  }

  const onFilterChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFilter(e.target.value)
  }

  const onDeleteContact = (contactId: string): void => {
    const contactID = contacts.findIndex(
      ({ id }) => id === contactId
    )

    const newContacts = [
      ...contacts.slice(0, contactID),
      ...contacts.slice(contactID + 1)
    ]
    localStorage.setItem('contacts', JSON.stringify(newContacts))
    setContacts(newContacts)
  }

  return (
      <section className={style.phoneBookSection}>
        <h1 className={style.title}> Phonebook </h1>
        <ContactForm onAddContact={onAddContact} />
        <div className={style.contacts}>
          <h2 className={style.contactsCaption}>CONTACTS</h2>
          <Filter onFilterChange={onFilterChange}></Filter>
          <ContactList
            contacts={contacts}
            filter={filter}
            onDeleteContact={onDeleteContact}
          ></ContactList>
        </div>
      </section>
  )
}

export default PhoneBook
