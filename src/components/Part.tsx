import { CoursePart } from '../types'

interface PartProps {
  course: CoursePart
}

const Part = ({course}: PartProps ) => {
  const exaustiveType = (type: never): never => {
    throw new Error(`Error ${type} is not valid`)
  }

  let element;
  
  switch(course.type){
    case 'normal':
      element = <p>{course.name} {course.type} {course.exerciseCount} {course.description}</p>
      break
    case 'submission':
      element = <p>{course.name} {course.type} {course.exerciseCount} {course.description} {course.exerciseSubmissionLink}</p>
      break;
    case 'groupProject':
      element = <p>{course.name} {course.type} {course.exerciseCount} {course.groupProjectCount}</p>
      break;
    case 'special':
      element = <p>{course.name} {course.type} {course.exerciseCount} {course.type} {course.requirements}</p>
      break;
    default:
      exaustiveType(course)
      break;
  }

  return <>{element}</>
}

export default Part