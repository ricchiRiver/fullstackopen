import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))
  const [selected, setSelected] = useState(0)

  const randomInt = (max) => Math.floor(Math.random() * max)
  const handleVote = (index) => {
    const newArray = [...votes]
    newArray[index] += 1
    setVotes(newArray)
  }

  const max = Math.max(...votes)
  const index = votes.indexOf(max)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdotes={anecdotes} votes={votes} anecdoteIndex={selected} />

      <button onClick={() => handleVote(selected)}>vote</button>
      <button onClick={() => setSelected(randomInt(anecdotes.length))}>next anecdote</button>

      <h1>Anecdote with most votes</h1>
      <Anecdote anecdotes={anecdotes} votes={votes} anecdoteIndex={index} />
    </div>
  )
}

const Anecdote = ({anecdoteIndex, anecdotes, votes}) => (
  <div>
    <p>{anecdotes[anecdoteIndex]}</p>
    <p>has {votes[anecdoteIndex]} votes</p>
  </div>
)

export default App