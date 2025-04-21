import { useState } from 'react'
import {FaTrash} from 'react-icons/fa'

const DeleteButton = ({taskId, onRefreshTasks}) => {

  const [req,setReq] = useState()



  const handleDelete = ()=>{
    const url = `http://localhost:3333/task/${taskId}`
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res)=>{
      console.log(res);
      fetch("http://localhost:3333/tasks")
      .then((res) => res.json())
      .then((res) => {
        onRefreshTasks(res)
      })
    })
    .catch((e)=>{
      console.log(e)
    })
  }
  
  return ( 
  <button onClick={handleDelete} className="bg-red-500 text-white p-1.5 rounded-sm cursor-pointer">
    <FaTrash/>
  </button>
  );
}
 
export default DeleteButton;