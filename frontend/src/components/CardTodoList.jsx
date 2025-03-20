import TaskGrid from "./TaskGrid"
import TaskInput from "./TaskInput"

function CardTodoList(){

  return(
    <div className="bg-blue-400 w-full h-screen flex justify-center">
      <div className="w-[70%] h-[50%] mt-18 bg-white rounded-lg p-8 flex flex-col gap-5">
        <TaskInput/>
        <TaskGrid/>
      </div>
         
    </div>

  )
}

export default CardTodoList