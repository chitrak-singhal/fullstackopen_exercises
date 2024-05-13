import { useState } from 'react'

function Button({text, onClick}){
  return(
    <button onClick={onClick}>{text}</button>
  )
}

function randind(n,func,selected){
  let r = Math.random()
  r = r*n
  r =Math.floor(r)
  const upd = selected + 1;
  func(upd)
}

function votebox(n,selected,setVotes,votes,maxi, setMaxi){
  const upd = [...votes]
  upd[selected]+=1
  setVotes(upd)
  if (upd[selected]>upd[maxi])
  {
    setMaxi(selected)
  }
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  let n = (anecdotes.length)
  const [selected, setSelected] = useState(0)
  const [maxi, setMaxi] = useState(0)
  const [votes, setVotes] = useState(Array(n).fill(0))

  return (
    <div>
      <h1> Anecdote of the day</h1>
      {anecdotes[selected]}<br />
      has {votes[selected]} votes<br />
      <Button text="new anecdote" onClick={()=>randind(n,setSelected,selected)} />
      <Button text="vote" onClick={()=>votebox(n,selected,setVotes,votes,maxi,setMaxi)} />

      <h1> Anecdote with most votes</h1>
    {anecdotes[maxi]}<br />
    has {votes[maxi]} votes<br />
    </div>
  )
}

export default App