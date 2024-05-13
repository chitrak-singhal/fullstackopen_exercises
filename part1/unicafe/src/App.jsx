import { useState } from 'react'

function Heading({text}){
  return(
    <h1>{text}</h1>
  )
}

function Button({text, onClick}){
  return(
    <button onClick={onClick}>{text}</button>
  )
}

function Display({text, value}){
  return(
    <p>{text} {value}</p>
  )
}

function increment(value, func){
  const upd_value = value +1;
  func(upd_value);
}

function Stats({good, bad, neutral}){
  const all = (good+bad+neutral)
  const avg = (good*1+bad*-1)/all
  const pos = (good)/all
  return (
    <>
        <p> all {all}</p>
        <p>Average {avg}</p>
        <p> Positive {pos}</p>
    </>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const[ bad, setBad] = useState(0)
  return (
    <div>
      <Heading text="Give Feedback" />

      <Button onClick={()=>increment(good,setGood)} text ="good" />
      <Button onClick={()=>increment(neutral,setNeutral)} text ="neutral" />
      <Button onClick={()=>increment(bad,setBad)} text ="bad" />

      <Heading text="Statistics" />

      <Display text ="good" value={good} />
      <Display text ="neutral" value={neutral} />
      <Display text ="bad" value={bad} />
      
      <Stats good={good} bad ={bad} neutral ={neutral} />
    </div>
  )
}

export default App
