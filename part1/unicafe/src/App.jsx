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

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const[ bad, setBad] = useState(0)
  return (
    <div>
      <Heading text="Give Feedback" />

      <Button onClick={()=>console.log('works')} text ="good" />
      <Button onClick={()=>console.log('works')} text ="neutral" />
      <Button onClick={()=>console.log('works')} text ="bad" />

      <Heading text="Statistics" />

      <Display text ="good" value={good} />
      <Display text ="bad" value={good} />
      <Display text ="neutral" value={good} />
    </div>
  )
}

export default App
