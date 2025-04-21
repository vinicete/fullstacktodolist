import TaskItem from "./TaskItem";

const TaskGrid = ({taskList, onRefreshTasks, onEditingTask}) => {
  return ( 
    <table className="min-w-full">
      <thead className="min-w-full border-collapse border border-gray-300">
        <tr className="">
          <th className="border-r border-gray-300 p-2">Tarefa</th>
          <th className="border-r border-gray-300">Criada em</th>
          <th className="border-r border-gray-300">Status</th>
          <th>Ações</th>
        </tr>


        {taskList.map(tasks => {
          return(
            <TaskItem onEditingTask={onEditingTask} onRefreshTasks={onRefreshTasks} taskName={tasks.title} createdAt={tasks.created_at} status={tasks.status} id={tasks.id}/>
          )
        })}

        {console.log(taskList)}

      </thead>
      
    </table>
   );
}
 
export default TaskGrid;