import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '9547123655' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')

  const addName = (event)=>{
    event.preventDefault()
    //console.log('Submitted',event.target);
    const new_name = {
      name : newName,
      number: newNum

    }
    console.log(persons)
    if (persons.findIndex((e)=>e.name==new_name.name)===-1)
    {
      // console.log(persons.findIndex((e)=>e==new_name));
      // console.log(new_name);
      if (persons.findIndex((e)=>e.number==new_name.number)!==-1)
        {
          {
            alert(`${newNum} is already added to the phonebook`)
          }
        }
        else
          setPersons(persons.concat(new_name))
    }
    else
    {
      alert(`${newName} is already added to the phonebook`)
    }
    setNewName('')
    setNewNum('')
  }

  const handleNameChange=(event)=>{
    //console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumChange=(event)=>{
    //console.log(event.target.value)
    setNewNum(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName} >
        <div>
          name: <input value ={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value ={newNum} onChange={handleNumChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person=><p key={person.name}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default App