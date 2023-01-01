import React, { ChangeEvent } from 'react'
import style from '../style.module.css'

interface ContactFormProps {
  onAddContact: (name: string, number: string) => void
}

class ContactForm extends React.Component<ContactFormProps> {
  state = {
    name: '',
    number: ''
  }

  onInputName = (e: ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      name: e.target.value
    })
  }

  onNumberName = (e: ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      number: e.target.value
    })
  }

  onSubmitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    this.props.onAddContact(this.state.name, this.state.number)
    this.setState({ name: '', number: '' })
  }

  render (): JSX.Element {
    return (
      <form
        onSubmit={this.onSubmitForm}
        className={style.phoneBookForm}
        action="submit"
      >
        <label>
          <p className={style.inputCaption}>Name</p>
          <input
            onChange={this.onInputName}
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          <p className={style.inputCaption}>Number</p>
          <input
            onChange={this.onNumberName}
            value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={style.cyberButton}>ADD CONTACT</button>
      </form>
    )
  }
}

export default ContactForm
