import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [ tasks, setTasks ] = useState([])

  const fetchTasks = async () => {
    const res = await fetch(`http://localhost:5000/tasks/`)
    const data = await res.json()
    return data
  }

  const fetchTask = async  id => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }

  useEffect( () => {
    const getTasksFromServer = async ()=>{
      const getTasks = await fetchTasks()
      setTasks(getTasks)
    }
    getTasksFromServer()
  },[])

  const deleteTask = async id => {
    await fetch(
      `http://localhost:5000/tasks/${id}`, 
      { method:'DELETE' }
    )
    setTasks(  tasks.filter( task => task.id !== id ))
  }
  const addTask = async task => {
    const res = await fetch (
      `http://localhost:5000/tasks/`,
      { 
        method:'POST', 
        headers: {
          "Content-type":"application/json"
        },
        body:JSON.stringify(task)
      }
    )
    const data = await res.json()
    setTasks([...tasks, data])
  }
  const toggleReminder = async id => {
    const toggled = await fetchTask(id)
    const updTask = { ...toggled, reminder:!toggled.reminder}
    const res = await fetch(
      `http://localhost:5000/tasks/${id}`,
      { 
        method:'PUT', 
        headers: {
          "Content-type":"application/json"
        },
        body:JSON.stringify(updTask)
      }
    )
    const data = await res.json()
    setTasks(
      tasks.map( task =>
        task.id===id ?
          {  ...task, reminder:data.reminder  } 
          :
          task
      )
    )
  }

  return (
    <Router>
      <div className="container">
        <Header onAdd={()=>setShowAddTask(!showAddTask)}/>
        <Route path="/" exact component={
          (props) => (
            <>
              { showAddTask && <AddTask onAdd={addTask} /> }
              <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
              <Footer />
            </>
          )
        }  />
        <Route path="/about" component={ About } />
      </div>
    </Router>
  );
}
// class App extends React.Component {

//   render(){
//       return (
//             <div className="container">
//               <Header />
//             </div>
//       )
//     }
// }
export default App;
