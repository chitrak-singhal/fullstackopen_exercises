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
  
  export default function Course({course}){
    return (
      <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts ={course.parts} />
      </>
    )
  }
  