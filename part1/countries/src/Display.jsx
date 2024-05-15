import { useState, useEffect } from "react";
import axios from 'axios'


function Display({con,setCon}){
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
        <div key = {c}>
          <p>{c}</p>
          <button onClick={()=>setCon([c])}>show</button>
          </div>
        )}
        
        </div>
      )
    }
  }

export default Display