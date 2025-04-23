import { useState,useEffect } from "react";
import {FaTrash,FaCheck} from 'react-icons/fa'

function EditModal({onEditingTask, onRefreshTasks,taskId}) {

    
    const handleClickOuside=()=>{
        onEditingTask(false)
    }

    const [editTask,setEditTask] = useState({
        title: '',
        status: "pendente"
    })

    
    const handleSubmit =(e)=>{
        e.preventDefault()
        const url = `http://localhost:3333/task/${taskId}`

        fetch(url,{
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(editTask)
        })
        .then((res)=>{
            console.log(res)
            fetch("http://localhost:3333/tasks")
            .then((res) => res.json())
            .then((data) => {
                onRefreshTasks(data)
                onEditingTask(false)
            })
        })
    }

    const[status,setStatus]=useState()
    
    return ( 
        <div onClick={handleClickOuside} className="fixed inset-0 flex justify-center items-center bg-black/20 backdrop-blur-[2px]">

            <div 
            onClick={(e) => e.stopPropagation()}
            className="w-[400px] bg-white rounded-md p-3 gap-3 flex flex-col items-center justify-center">
                <div className="w-full">
                    <h3 className="font-medium text-lg ml-3">Editar Task</h3>
                </div>
                <form className=" flex flex-col gap-4">
                    <div className="flex gap-4">
                        <input className="border rounded-sm"
                        onChange={(e)=>{
                            setEditTask({
                            ...editTask,
                            title: e.target.value
                        })}}
                        type="text" name="" id="" />
                        <select className="border rounded-sm p-1" name="status"
                            id="status"
                            value={editTask.status}
                            onChange={(e) => {
                                setEditTask({
                                  ...editTask,
                                  status: e.target.value
                                })
                              }}
                        
                        
                            >
                            <option value="pendente">Pendente</option>
                            <option value="emAndamento">Em andamento</option>
                            <option value="concluida">Concluida</option>
                        </select>
                    </div>

                    <div className="flex justify-end gap-2">
                        <button onClick={handleSubmit} className="bg-green-500 text-white p-1.5 rounded-sm cursor-pointer">
                            <FaCheck/>
                          </button>

                          <button onClick={handleClickOuside} className="bg-red-500 text-white p-1.5 rounded-sm cursor-pointer">
                              <FaTrash/>
                            </button>
                    </div>
                </form>
            </div>
        </div>
     );
}

export default EditModal;