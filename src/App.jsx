import { useState, useEffect } from 'react'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
import ContactForm from './components/ContactForm/ContactForm'
import contacts from "./assets/contacts.json"
import './App.css'

function App() {

  const [contactList, setContacts] = useState(() => {
     const savedContacts = JSON.parse(window.localStorage.getItem("contacts"));
    if (savedContacts !== null && savedContacts.length) {
      return savedContacts; 
    } 
      return contacts;
  });
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contactList));
  }, [contactList]);

  const addContact = (newContact) => {
    setContacts((prev) => {

      return [...prev, newContact]
    })
  }

  const deleteContact = (contactId) => {
    setContacts((prev) => {
      return prev.filter(({id}) => id !== contactId)
    })
  }
    
    const handleChange = (evt) => {
    setSearchValue(evt.target.value);
    };
  
  const searchContact = contactList.filter(({ name }) => name.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <div className='content'>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox inputValue={searchValue} handleChange={handleChange} />
      <ContactList contacts={searchContact} onDelete={deleteContact} />
    </div>
  )
}

export default App
