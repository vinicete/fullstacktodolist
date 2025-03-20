const express = require('express')
const tasksController = require('./controllers/tasksController')

const router = express.Router()
const tasksMiddleware = require('./middlewares/tasksMiddleware')

router.get('/', (req,res)=>{
  res.status(200).send("aloooas")
})

router.get('/tasks', tasksController.getAll)
router.post('/task',tasksMiddleware.validateBody,tasksController.createTask)
router.delete('/task/:id',tasksController.deleteTask)
router.put('/task/:id',tasksMiddleware.validateBody,tasksController.updateTask)

module.exports = router