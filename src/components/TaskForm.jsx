import {useState, useContext} from 'react'
import {TaskContext}  from '../context/TaskContext'

function TaskForm() {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const {createTask} = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault(); //para quitar el comportamiento normal de la aplicacion 
    createTask({
      title,
      description
    })
    setTitle('')
    setDescription('')
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className='text-2xl font-bold text-white mb-3'>Create a task</h1>
        <input placeholder="Escribe tu tarea" 
          onChange={(e)=>setTitle(e.target.value)}
          value = {title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea placeholder='Write the description of task'
        onChange={e => setDescription(e.target.value) }
        value = {description}
        className="bg-slate-300 p-3 w-full mb-2"

        ></textarea>
        <button
        className='bg-indigo-500 px-3 py-1 text-whitemax-w-md rounded-md'>Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;