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

function StatisticLine({text, value}){
  return(
    <tr><td>{text}</td><td> {value}</td></tr>
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
  if (good==0&&bad==0&&neutral==0)
    {
      return(
        <p> No feedback given</p>
      )
    }
  return (
    <table><tbody>
      <StatisticLine text ="good" value={good} />
      <StatisticLine text ="neutral" value={neutral} />
      <StatisticLine text ="bad" value={bad} />
      <StatisticLine text ="all" value={all} />
      <StatisticLine text ="average" value={avg} />
      <StatisticLine text ="positive" value={pos} />
      </tbody>
    </table>
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
      
      <Stats good={good} bad ={bad} neutral ={neutral} />
    </div>
  )
}

export default App
