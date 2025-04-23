import {FaPencilAlt} from 'react-icons/fa'

const EditButton = ({onEditingTask,taskId}) => {

  const handleEdit=()=>{
    onEditingTask(true,taskId)
  }

  return ( 
    <button onClick={handleEdit} className='bg-amber-500 text-white p-1.5 rounded-sm cursor-pointer'>
      <FaPencilAlt/>
    </button>
   );
}
 
export default EditButton;