import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <br></br>
      <Button setter={setGood} text='good' reaction={good}/>
      <Button setter={setNeutral} text='neutral' reaction={neutral}/>
      <Button setter={setBad} text='bad' reaction={bad}/>
      <br></br>
      <Statistics good={good} neutral={neutral} bad={bad}/>

    </div>
  )
}

const Button = (props) => {
  return (
  <button onClick={() => props.setter(props.reaction + 1)}>{props.text}</button>
  )
}

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad

  if(props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return(
    <table>
      <tbody>
        <StatisticsLine text="good" value ={props.good} />
        <StatisticsLine text="neutral" value ={props.neutral} />
        <StatisticsLine text="bad" value ={props.bad} />
        <StatisticsLine text="all" value ={props.good + props.neutral + props.bad}/>
        <StatisticsLine text="average" value ={(props.good + (props.neutral*0) + (props.bad*-1))/all}/>
        <StatisticsLine text="positive" value ={(props.good/all)*100} text2='%'/>
      </tbody>
    </table>
  )
}



const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value} {props.text2}</td> 
    </tr>
  )
}


export default App