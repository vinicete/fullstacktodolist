import { useState } from "react"


function TaskInput(){
  const [task,setTask] = useState()
  

  function handleSubmit(e){
    e.preventDefault()
    console.log(task)
  }

  return(

    <form onSubmit={handleSubmit} className="flex gap-3 justify-between">
      <input type="text"
       name="task"
       id="task" 
       placeholder="Adicionar tarefa" 
       onChange={(e)=>{setTask(e.target.value)}}
       className="border rounded-sm border-zinc-400 w-full pl-3"
       />
      <button className="bg-blue-400 p-2 px-4 rounded-sm text-white">
        +
      </button>
    </form>

  )
}


export default TaskInput