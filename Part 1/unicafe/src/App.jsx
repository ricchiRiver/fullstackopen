import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (feedback) => {
    switch(feedback) {
      case "good":
        setGood(good+1)
        break
      case "neutral":
        setNeutral(neutral+1)
        break
      case "bad":
        setBad(bad+1)
        break
    }
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text = "good" onClick={() => handleClick("good")}/>
      <Button text = "neutral" onClick={() => handleClick("neutral")}/>
      <Button text = "bad" onClick={() => handleClick("bad")}/>

      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
      
    </div>
  )
}

const Statistics = ({good, neutral, bad}) => {
  let total = good + neutral + bad
  let average = (good - bad)/total
  let positive = (good/total)*100

  if(good === 0 && neutral === 0 && bad === 0) return(
    <div>
      <p>No feedback given</p>
    </div>
  )

  return (
    <div>
      <h1>statistics</h1>
      <TableData text = "good" val = {good} />
      <TableData text = "neutral" val = {neutral} />
      <TableData text = "bad" val = {bad} />
      <TableData text = "all" val = {total} />
      <TableData text = "average" val = {average} />
      <TableData text = "positive" val = {positive + "%"}/>
    </div>
  )
}

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const TableData = ({text, val}) => (
  <tr>
    <td>{text}</td>
    <td>{val}</td>
  </tr>
)

export default App