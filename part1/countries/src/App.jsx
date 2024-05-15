import { useEffect, useState } from 'react'
import axios from 'axios'
import Display from './Display'


function App() {
  const [search, setSearch] = useState('')
  const [all, setAll] = useState([])
  const [con, setCon] = useState([])

  useEffect(()=>{
    const upd = []
    axios
    .get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then(response=>{
      response.data
      //console.log(response.data)
      response.data.forEach(con=>(upd.push(con.name.common)))
    })
    //console.log('cons', upd)
    setAll(upd)
  },[])

  useEffect(()=>{
    if (search!==''){
      //console.log('x', search)
      const newcon = all.filter(c=>(c.toLowerCase().includes(search.toLowerCase())))
      //console.log('n', newcon)
      setCon(newcon)
    }
    else
    {
      // console.log(search)
      // console.log('n')
      setCon([])
    }
  },[search])
  const handleChange = (event)=>{
    setSearch(event.target.value)
  }

  return (
    <div>
      <form>
        <div>
          Search: <input value={search} onChange={handleChange}/>
        </div>
      </form>
      <Display con={con} setCon={setCon}/>
    </div>
  )
}

export default App
