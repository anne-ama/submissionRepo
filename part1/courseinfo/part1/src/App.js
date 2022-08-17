const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}

const Content = (props) =>{
  console.log(props)
  return <li>{props.name}: {props.total} exercises </li>
}

const App = () => {
  const Course = {
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
      <Header course={Course.name}/>
      <ul>
        <Content 
          name={Course.parts[0].name} 
          total={Course.parts[0].exercises}/>
      </ul>
    </div>
  )
}

export default App
