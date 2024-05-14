import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event)=>{
    event.preventDefault()
    //console.log('Submitted',event.target);
    const new_name = {
      name : newName
    }
    console.log(persons)
    if (persons.findIndex((e)=>e.name==new_name.name)===-1)
    {
      // console.log(persons.findIndex((e)=>e==new_name));
      // console.log(new_name);
      setPersons(persons.concat(new_name))
    }
    else
    {
      alert(`${newName} is already added to the phonebook`)
    }
    setNewName('')
  }

  const handleNameChange=(event)=>{
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName} >
        <div>
          name: <input value ={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person=><p key={person.name}>{person.name}</p>)}
    </div>
  )
}

export default App