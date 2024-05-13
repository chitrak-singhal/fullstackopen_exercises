function Header({name}){
  return (
    <>
    <h1>{name}</h1>
    </>
  )
}
function Part({part}){
  //console.log('works')
  return(
    <>
   <p>
        {part.name} {part.exercises}
      </p>
      </>
  )
}
function Content({parts}){
  //console.log(parts)
  return (
    <div>
   {parts.map(
    part=>
      <Part key={part.id} part={part} />
   )}
    </div>
  )
}
// function Total({parts}){
//   return (
//     <>
//     <p>Number of exercises {part1.exercises+part2.exercises+part3.exercises}</p>
//     </>
//   )
// }

function Course({course}){
  return (
    <>
    <Header name={course.name} />
    <Content parts={course.parts} />
    </>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App