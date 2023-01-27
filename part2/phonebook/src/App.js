import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Persons'
import axios from 'axios'
import personsBG from './services/background'
import { logDOM } from '@testing-library/react'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState(null)
  const [error, setError] = useState(false)

  const url = "http://localhost:3003/persons/"

  const hook = () => {
    personsBG
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }

  useEffect(hook, [])

  const isEqual = (original, tested) => original!==tested 
  
  const handleFilterChange = (event) => {
    event.preventDefault()
    setFilter(event.target.value)
  }

  const handleNameChange = (event) => {
    event.preventDefault()
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    event.preventDefault()
    setNewNumber(event.target.value)
  }

  const Notification = ({message}) => {
    if(message === null) {
      return null
    } 
    else if (error === true) {
      return (
        <div className='error'>
          {message}
        </div>
      )
    } else {
        return (
          <div className='notification'>
            {message}
          </div>
        )
    }
    }
    

  const vanish = (id, name) => {
    if(window.confirm(`Are you sure about deleting ${name}?`)) {
        axios
          .delete(`${url}${id}`)
          .catch(error => {
            setError(true)
            setNotification(`'${name}' has already been removed from the server`)
            setTimeout(() => {
              setError(false)
              setNotification(null)
            }, 10000)
          })
        setPersons(persons.filter(p => p.id != id))
        return console.log('deleted')
      } else {
          return console.log('not deleted')
      }
  }

  const addName = (event) => {
    event.preventDefault()
    if(persons.every(element => isEqual(element.name, newName))){
      personsBG
        .create({name: newName, number: newNumber})
        .then(response => {
          setPersons(persons.concat(response))
          setNewName('')
          setNewNumber('')
          setNotification(`'${newName}' was added to the phonebook!`)
          setTimeout(() => {
            setNotification(null)
          }, 10000)
        })
    } else {
        if(window.confirm(`${newName} is already added to the phonebook, replace the old number with the new one?`)) {
          const oldNumber = persons.find(f => f.name === newName).number
          personsBG
            .update(persons.find(f => f.name === newName).id, {name: newName, number: newNumber})
            .then(response => {
              setPersons(persons.map(p => p.number !== oldNumber ? p : response))
              setNewName('')
              setNewNumber('')
              setNotification(`'${newName}' phonenumber was updated!`)
              setTimeout(() => {
                setNotification(null)
              }, 10000)
            })

          
        }
    }
    
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification}/>
      <Filter filter={filter} handler={handleFilterChange}/>
      <h2>add new</h2>
      <form>
        <PersonForm name={newName} handler={handleNameChange} number={newNumber} handlernumber={handleNumberChange} />
        <div>
          <button type="submit" onClick={addName}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Person persons={persons} filter={filter} vanish={vanish}/>
    </div>
  )
}

export default App
