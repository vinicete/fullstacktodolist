const connection = require('./connection')

const getAll = async ()=>{

  const [tasks] = await connection.execute('SELECT * FROM tasks')
  return tasks
}

const createTask = async (task)=>{

  const {title} = task;

  const query = 'INSERT INTO tasks (title, status, created_at) VALUES (?,?,?)'

  const dateUTC = new Date(Date.now()).toUTCString()
  const [createdTask] = await connection.execute(query,[title,'Pendente',dateUTC])
    return {insertId: createdTask.insertId}
}

const deleteTask = async (id)=>{
  const removedTask = await connection.execute('DELETE FROM tasks WHERE id = ?',[id])
  return removedTask
}

const updateTask = async (id, task)=>{

  const {title, status} = task
  const [updatedTask] = await connection.execute('UPDATE tasks SET title = ?, status = ? WHERE id = ?',[title,status,id])
  return updatedTask
}

module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask
}