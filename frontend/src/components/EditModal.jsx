function EditModal({onEditingTask}) {

    const handleClickOuside=()=>{
        onEditingTask(false)
    }
    return ( 
        <div onClick={handleClickOuside} className="fixed inset-0 flex justify-center items-center bg-black/20 backdrop-blur-[2px]">

            <div 
            onClick={(e) => e.stopPropagation()}
            className="w-[400px] bg-white rounded-md">
                <h3>Editar Task</h3>
            </div>
        </div>
     );
}

export default EditModal;