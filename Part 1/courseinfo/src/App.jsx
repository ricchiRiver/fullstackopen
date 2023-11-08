const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header text = {course.name} />
      <Content array = {course.parts} />
      <Total total = {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>
    </div>
  )
}

const Header = (props) => {
  return(
    <h1>
      {props.text}
    </h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name = {props.array[0].name} exercises = {props.array[0].exercises}/>
      <Part name = {props.array[1].name} exercises = {props.array[1].exercises}/>
      <Part name = {props.array[2].name} exercises = {props.array[2].exercises}/>
    </div>
  )
}

const Part = (props) => {
  return(
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Total = (props) => {
  return(
    <p>
      Number of exercises {props.total}
    </p>
  )
}

export default App