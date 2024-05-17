import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  
  useEffect(()=>{
    axios
      .get('http://localhost:3001/persons')
      .then(response=>
        setPersons(response.data)
      )}
  ,[])

  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [search, setSearch] = useState('')
  const [searchFinal , setSearchFinal] = useState('')
  // console.log(search)
  // console.log(searchFinal,'y')
  const personsToShow = searchFinal==''?persons:persons.filter(person=> person.name.startsWith(searchFinal));

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
        else{
          axios.post('http://localhost:3001/persons',new_name)
          .then(response=>{
            console.log(response)
          })
          setPersons(persons.concat(new_name))
        }
          
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
  const handleSearchChange=(event)=>{
    setSearch(event.target.value)
  }

  const handleSearch=(event)=>{
    event.preventDefault()
    setSearchFinal(search)
    //console.log(searchFinal,'x')
  }

  return (
    <div>
      <form onSubmit={handleSearch} >
        <div>
          name: <input value ={search} onChange={handleSearchChange}/>
        </div>
        <div>
          <button type="submit">search</button>
        </div>
      </form>
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
      {personsToShow.map(person=><p key={person.name}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default App