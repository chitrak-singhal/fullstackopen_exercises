import { useEffect, useState } from 'react'
import axios from 'axios'

function Display({con}){
  //console.log({con})
  const [country, setCountry] = useState(null);
  useEffect(()=>{
    if(con.length!==1) return;
    axios
    .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${con[0]}`)
    .then(response=>{
      setCountry(response.data)
    })
  },[con])
  if (con.length>10){
    return(
      <div>
        Too many matches, specify another filter
      </div>
    )
  }
  else if (con.length==1){ 
    return(
      <div>
        {country?(
          <div>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <div>{Object.keys(country.languages).map(l=><p key={l}>{country.languages[l]}</p>)}</div>
            <img src={country.flags.svg } style={{ height: '200px' }} ></img>
          </div>
        ):(
          <p>Loading.... </p>
        )}
      </div>
    )
  }
  else if (con.length==0){
    <div></div>
  }
  else{
    return(
      <div>
      {con.map(c=>
        <p key={c}>{c}</p>
      )}
      
      </div>
    )
  }
}

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
      <Display con={con}/>
    </div>
  )
}

export default App
