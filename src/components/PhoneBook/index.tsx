import React, { Component, ChangeEvent } from 'react'
import { nanoid } from 'nanoid'

import style from './style.module.css'

import ContactForm from './ContactForm'
import ContactList from './ContactList'
import Filter from './Filter'

interface StateInterface {
  contacts: Array<{ name: string, number: string, id: string }>
  filter: string
}

export class index extends Component {
  state: StateInterface = {
    contacts: [{ id: 'id-1', name: 'Johnny Silverhand', number: '459-20-77' }],
    filter: ''
  }

  componentDidMount (): void {
    const contacts = JSON.parse((localStorage.getItem('contacts')) ??
    '[{"id":"id-1","name":"Johnny Silverhand","number":"459-20-77"}]')

    this.setState({
      contacts,
      filter: ''
    })
  }

  onAddContact = (name: string, number: string): void => {
    if (this.state.contacts.some((contact) => contact.name === name)) {
      alert(`${name} is already in contacts.`)
      return
    }

    this.setState((prevState: StateInterface) => {
      const newContacts = [...prevState.contacts, { name, number, id: nanoid() }]
      localStorage.setItem('contacts', JSON.stringify(newContacts))
      return { contacts: newContacts }
    })
  }

  onFilterChange = (e: ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      filter: e.target.value
    })
  }

  onDeleteContact = (contactId: string): void => {
    const contactID = this.state.contacts.findIndex(
      ({ id }) => id === contactId
    )
    this.setState((prevState: StateInterface) => {
      const newContacts = [
        ...prevState.contacts.slice(0, contactID),
        ...prevState.contacts.slice(contactID + 1)
      ]
      localStorage.setItem('contacts', JSON.stringify(newContacts))
      return ({ contacts: newContacts })
    })
  }

  render (): JSX.Element {
    return (
      <section className={style.phoneBookSection}>
        <h1 className={style.title}> Phonebook </h1>
        <ContactForm onAddContact={this.onAddContact} />
        <div className={style.contacts}>
          <h2 className={style.contactsCaption}>CONTACTS</h2>
          <Filter onFilterChange={this.onFilterChange}></Filter>
          <ContactList
            contacts={this.state.contacts}
            filter={this.state.filter}
            onDeleteContact={this.onDeleteContact}
          ></ContactList>
        </div>
      </section>
    )
  }
}

export default index
