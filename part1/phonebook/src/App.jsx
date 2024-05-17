import { useState, useEffect } from 'react'
import axios from 'axios'
import phoneService from './services/phonebook'
import './App.css'

function Button ({onClick}){
  return(
    <div>
      <button onClick={onClick}>
        delete
      </button>
    </div>
  )
}

function Noti({msg}){
  if (!msg) return(<></>)
  return(
    <div className='addmsg'>
      {msg}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  
  useEffect(()=>{
    phoneService
      .getAll()
      .then(response=>
        setPersons(response.data)
      )}
  ,[persons])

  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [search, setSearch] = useState('')
  const [searchFinal , setSearchFinal] = useState('')
  const [Msg, setMsg] = useState()
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
          phoneService.create(new_name)
          .then(response=>{
            console.log(response)
          })
          setMsg(`Added ${newName}`)
          setPersons(persons.concat(new_name))
          setInterval(()=>setMsg(),5000)
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

  const delName=(id)=>{
    console.log('hi')
    console.log(id)
    if (window.confirm("Are you sure you want to delete this number?"))
      phoneService.del(id)
  }

  return (
    <div>
      <Noti msg={Msg}/>
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
      {personsToShow.map(person=>
      <div key={person.name}>
      <p >{person.name} {person.number}</p>
      <Button onClick={()=>{delName(person.id)}}/>
      </div>
      )}
    </div>
  )
}

export default App