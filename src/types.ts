// this is the new coursePart variable
export const courseParts: CoursePart[] = [
  {
    name: "Fundamentals",
    exerciseCount: 10,
    description: "This is the leisured course part",
    type: "normal"
  },
  {
    name: "Advanced",
    exerciseCount: 7,
    description: "This is the harded course part",
    type: "normal"
  },
  {
    name: "Using props to pass data",
    exerciseCount: 7,
    groupProjectCount: 3,
    type: "groupProject"
  },
  {
    name: "Deeper type usage",
    exerciseCount: 14,
    description: "Confusing description",
    exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev",
    type: "submission"
  },
  {
    name: "Backend development",
    exerciseCount: 21,
    description: "Typing the backend",
    requirements: ["nodejs", "jest"],
    type: "special"
  }
]

// new types
interface CoursePartBase {
  name: string;
  exerciseCount: number;
  type: string;
  key?: number;
}
/* interface Courses {
  courseParts: CoursesParts[]
} */


interface SpecialCourse extends CoursePartBase{
  type: "special";
  requirements: string[];
  description: string
}

interface CoursesDescriptoin extends CoursePartBase{
  description: string
}

interface CourseNormalPart extends CoursesDescriptoin {
  type: "normal";
}

interface CourseSubmissionPart extends CoursesDescriptoin {
  type: "submission";
  exerciseSubmissionLink: string;
}

interface CourseProjectPart extends CoursePartBase {
  type: "groupProject";
  groupProjectCount: number;
}

export type CoursePart = CourseNormalPart | CourseProjectPart | CourseSubmissionPart | SpecialCourse;

