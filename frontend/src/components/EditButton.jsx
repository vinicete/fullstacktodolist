import {FaPencilAlt} from 'react-icons/fa'

const EditButton = ({onEditingTask}) => {

  const handleEdit=()=>{
    onEditingTask(true)
  }

  return ( 
    <button onClick={handleEdit} className='bg-amber-500 text-white p-1.5 rounded-sm cursor-pointer'>
      <FaPencilAlt/>
    </button>
   );
}
 
export default EditButton;