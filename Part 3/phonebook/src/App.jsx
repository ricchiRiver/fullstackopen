import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [query, setQuery] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)
  const [notificationColor, setnotificationColor] = useState("green")

  useEffect(() => {
    personService.getAll()
      .then(initialPersons => setPersons(initialPersons)
      )
  }, [])
  
  const handleSubmit = e => {
    e.preventDefault()
    const person = {
      name: newName,
      number: newNumber
    }
    const clone = persons.reduce((result, p) => JSON.stringify(p.name) === JSON.stringify(newName) ? p : result, null)

    if(clone) {
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        replaceNumber(clone, newNumber)
        transientNotify(`Changed ${newName} number from ${clone.number} to ${newNumber}`, "green", 2)
      }
    } else {
      personService.create(person)
        .then(newPerson => setPersons(persons.concat(newPerson)))
        .then(newPerson => transientNotify(`Added ${newPerson.name}`, "green", 2))
        .catch(error => {transientNotify(`${error.response.data}`, "red", 2)})
    }
    setNewName('')
    setNewNumber('')
  }

  const transientNotify = (message, color, seconds) => {
    setnotificationColor(color)
    setNotificationMessage(message)
    setTimeout(() => {
      setNotificationMessage(null)
    }, seconds*1000);
  }

  const handleDelete = (id) => {
    const person = persons.find(p => p.id === id)
    if(window.confirm(`Delete ${person.name}?`)) {
      personService.remove(id)
        .catch(transientNotify(`Information of ${person.name} has already been removed from server`, "red", 2))
      const newPersons = persons.filter(person => person.id != id)
      setPersons(newPersons)
    }
  }

  const replaceNumber = (person, newNumber) => {
    const updatedPerson = {...person, number: newNumber}
    personService.update(person.id, updatedPerson)
      .then(returnedPerson => setPersons(persons.map(p => p.id === person.id ? returnedPerson : p)))
      .catch(error => transientNotify(`${error.response.data}`, "red", 2))
  }

  const handleNameChange = e => setNewName(e.target.value)
  const handleNumberChange = e => setNewNumber(e.target.value)
  const handleQueryChange = e => setQuery(e.target.value)

  return (
    <div>
      <h1>Phonebook v2</h1>
      <Notification message={notificationMessage} color={notificationColor}/>
      <Filter label = "Filter by name: " state = {query} onChange={handleQueryChange} />
      <h2>Add a new</h2>
      <PersonForm onSubmit={handleSubmit} nameState={newName} onNameChange={handleNameChange} numberState={newNumber} onNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons persons={persons} queryState={query} onDelete={handleDelete} />
    </div>
  )
}

export default App