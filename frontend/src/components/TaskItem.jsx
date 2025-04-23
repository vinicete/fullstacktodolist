import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

const TaskItem = ({taskName, createdAt, status, id, onRefreshTasks, onEditingTask}) => {

  function handleChange(){
    
  }
  return (  
    <tr className="border-t border-gray-300 ">
      <th className="border-r border-gray-300 font-medium text-md">{taskName}</th>
      <th className="border-r border-gray-300 font-medium text-md">{createdAt}</th>
      <th className="border-r border-gray-300 font-medium text-md">
        
        <select name="status" 
        id="status"
        value={status}
        onChange={handleChange}
        >
          <option value="pendente">Pendente</option>
          <option value="emAndamento">Em andamento</option>
          <option value="concluida">Concluida</option>        
        </select></th>
      <th className="border-r border-gray-300 font-medium text-md flex gap-2 justify-center p-1 items-center">
        <EditButton taskId={id} onEditingTask={onEditingTask}/>
        <DeleteButton onRefreshTasks={onRefreshTasks} taskId={id}/>
      </th>
    </tr>
   );
}
 
export default TaskItem;