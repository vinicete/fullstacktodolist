import {FaTrash} from 'react-icons/fa'

const DeleteButton = () => {
  return ( 
  <button className="bg-red-500 text-white p-1.5 rounded-sm cursor-pointer">
    <FaTrash/>
  </button>
  );
}
 
export default DeleteButton;