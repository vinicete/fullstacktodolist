import { useState } from "react"


function TaskInput({onAddTask}){
  const [task,setTask] = useState({
    title : "",
    created_at: Date.now().toLocaleString(),
    status : "pending"
  })
  

  function handleSubmit(e){
    e.preventDefault()

    const url = "http://localhost:3333/task"
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    .then((res)=>{
      return res.json()
    })
    .then((res)=>{
      console.log(res);

      fetch("http://localhost:3333/tasks")
      .then((res) => res.json())
      .then((data) => {
        onAddTask(data)
      })

      setTask({
        title : "",
        created_at: Date.now().toLocaleString(),
        status : "pending"
      })

      
    })
    .catch((e)=>{
      console.log(e)
    })
    
    console.log("finally: ",task)
  }

  return(

    <form onSubmit={handleSubmit} className="flex gap-3 justify-between">
      <input type="text"
       name="task"
       id="task" 
       value={task.title}
       placeholder="Adicionar tarefa" 
       onChange={(e)=>{setTask({
        title : e.target.value,
        created_at: Date.now().toLocaleString(),
        status : "pending"
      })}}

       className="border rounded-sm border-zinc-400 w-full pl-3"
       />
      <button className="bg-blue-400 cursor-pointer p-2 px-4 rounded-sm text-white">
        +
      </button>
    </form>

  )
}


export default TaskInput