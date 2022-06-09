import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";
import {courseParts} from "./types"

const App = () => {
  const courseName = "Half Stack application development";
  const numOfExercise = courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)
  
  return (
    <div>
      <Header courseName={courseName} />
      <Content courseParts={courseParts} />
      <Total numOfExercise={numOfExercise} />
    </div>
  );
};

export default App;