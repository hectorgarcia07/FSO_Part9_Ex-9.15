import Part from './Part'
import { CoursePart } from '../types'

interface ContentProps {
  courseParts: CoursePart[]
}

const Content = ( props: ContentProps) => {
  const coursesInfo = props.courseParts.map(course => 
    <Part key={Math.floor(Math.random() * 10000)} course={course} />
  )
  return (
    <>{coursesInfo}</>
  )
}

export default Content