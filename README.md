# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

1. AddToDo Component (Parent Component):

This is the main component that manages the state and contains child components.

-states used ```
const [title, setTitle] = useState("") //from input 
   const [content, setContent] = useState("") //from input 
   const [toDo, setToDo] = useState([])  //  toDo: An array that stores the list of active (not completed) todo
   const [completedToDo, setCompletedToDo] = useState([])// completedToDo: An array that stores the list of completed todo items
   const [idCounter, setIdCounter] = useState(0)``` // to generate unique IDs for new todo items.

This parent component  passes props to child components:
a-WorkingContainer receives toDo, onDelete, and onComplete as props.

b-CompletedContainer receives completedToDo, onMoveBack, and onDelete as props.

WorkingContainer Component (Child Component): It passes down props to ContainerBoxWorking.
CompletedContainer Component (Child Component): Similar to WorkingContainer, but for completed tasks.

ContainerBoxWorking and ContainerBoxCompleted Components: These are the smallest units that display individual todo items.
