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
function Total({parts}){
  let sum = parts.reduce(
    (accumulator, current)=>accumulator+current.exercises,0,);
    //console.log(sum);
  return (
    <>
    <p><b>total of {sum} exercises</b></p>
    </>
  )
}

function Course({course}){
  return (
    <>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total parts ={course.parts} />
    </>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return(
    <div>
      {courses.map(course=><Course key={course.id} course={course} />)}
    </div>
  )
}

export default App