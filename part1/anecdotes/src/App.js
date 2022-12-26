import { useState } from 'react'

function random(max) {
  return Math.floor(Math.random() * max);
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [voteList, setVoteList] = useState([0, 0, 0, 0, 0, 0, 0]);

  return (
    <div>
      <h1>Anedocte of the day</h1>
      <br></br>
      {anecdotes[selected]}
      <br></br>
      <Vote vote={selected} id={selected} setter={setVoteList} voteList={voteList} />
      <Random setter={setSelected} array={anecdotes}/>
      <br></br>
      <h1>Anedocte with the most votes</h1>
      <br></br>
      <Famous array={voteList} text={anecdotes}/>
    </div>
  )
}

const Random = (props) => {
  return(
    <button onClick={() => props.setter(random(props.array.length))}>
      next anecdote
    </button>
    )
}

const Vote = (props) => {
  
  let votes = props.voteList

  function increaseVote(id) {
    const clone = [...votes]
    clone[id] += 1
    return (
      clone
    )
  }

  return(
    <><p>has {votes[props.vote]} votes</p>
    <button onClick={() => props.setter(increaseVote(props.id))}> 
      vote {console.log(votes)}
    </button></>
  )
}

const Famous = (props) => {
  const highest = Math.max(...props.array)
  return(
    <p>
    {props.text[props.array.indexOf(highest)]}
    <br></br>
    has {highest} votes {console.log(highest)}
    </p>
  )
}


export default App