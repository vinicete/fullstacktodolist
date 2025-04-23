import { useState, useEffect } from "react"
import TaskGrid from "./TaskGrid"
import TaskInput from "./TaskInput"
import EditModal from "./EditModal"

function CardTodoList(){

  const [tasks,setTasks] = useState([])
  const [modalState, setModalState] = useState(false)
  const [editingTaskId, setEditingTaskId] = useState(null)

  useEffect(() => {
    const url = "http://localhost:3333/tasks"
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTasks(data)
        console.log(data)
      })
  }, [])

  const onRefreshTasks = (tasksFromBackend)=>{
    setTasks(tasksFromBackend)
  }

  const onEditingTask = (open,id)=>{
    setModalState(open)
    setEditingTaskId(id)
  }

  
  return(
    <div className="bg-blue-400 w-full min-h-screen flex items-center flex-col">
      <div className="w-[70%] h-[50%] mt-18 mb-18 bg-white rounded-lg p-8 flex flex-col gap-5">
        <TaskInput onAddTask={onRefreshTasks}/>
        <TaskGrid onEditingTask={onEditingTask} onRefreshTasks={onRefreshTasks} taskList={tasks}/>
      </div>

      {modalState && editingTaskId && <EditModal 
      onRefreshTasks={onRefreshTasks} 
      onEditingTask={onEditingTask}
      taskId={editingTaskId}
      />}
         
    </div>

  )
}

export default CardTodoList