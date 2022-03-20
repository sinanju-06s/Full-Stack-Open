const Header = (props) => {
  return (
      <h1>
        {props.course}
      </h1>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.partx} {props.exercisex}</p>
    </div>
  )
}

const Content = (props) => {
  return (
      <div>
        <Part partx={props.part1} exercisex={props.exercises1}/>
        <Part partx={props.part2} exercisex={props.exercises2}/>
        <Part partx={props.part3} exercisex={props.exercises3}/>
      </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>Number of exercises {props.soma}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      
      <Content part1={part1} exercises1={exercises1} 
      part2={part2} exercises2={exercises2} 
      part3={part3} exercises3={exercises3} />
      
      <Total soma={exercises1+exercises2+exercises3}/>
    </div>
  )
}

export default App