import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  const [ tasks, setTasks ] = useState([
      {
          id:1,
          text:'play games',
          date:'any moment alone',
          reminder:false,
      },
      {
          id:2,
          text:'learn coding/code',
          date:'any moments when stoned',
          reminder:true,
      },
      {
          id:3,
          text:'paint miniatures',
          date:'whenever in peace',
          reminder:true,
      },
      {
          id:4,
          text:'exercise',
          date:'while watching tv',
          reminder:true,
      }
  ])

  const deleteTask = (id) => {
    setTasks(  tasks.filter( task => task.id !== id )  )
  }
  const toggleReminder = (id) => {
    setTasks( tasks.map ( task => task.id === id ? { ...task, reminder: !task.reminder } : task ))
  }
  return (
    <div className="container">
      <Header />
      <AddTask />
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
    </div>
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
