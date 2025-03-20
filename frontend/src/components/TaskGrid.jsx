import TaskItem from "./TaskItem";

const TaskGrid = () => {
  return ( 
    <table className="min-w-full">
      <thead className="min-w-full border-collapse border border-gray-300">
        <tr className="">
          <th className="border-r border-gray-300 p-2">Tarefa</th>
          <th className="border-r border-gray-300">Criada em</th>
          <th className="border-r border-gray-300">Status</th>
          <th>Ações</th>
        </tr>

        <TaskItem taskName={'aa'} createdAt={'aa'} status={'concluida'}/>
        
      </thead>
      
    </table>
   );
}
 
export default TaskGrid;