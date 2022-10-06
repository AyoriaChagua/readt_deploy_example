import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

export function TaskCard ({task}) {    
    const {deleteTask} = useContext(TaskContext)
    return (
        <div className='bg-gray-800 text-white p-4 rounded-md'>
            <h1 className='text-x font-bold capitalize'>{task.title}</h1>
            <p className='text-grat-500 text-sm'>{task.description}</p>
            <button className='bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-800' onClick={()=>deleteTask(task.id)}>
                Eliminar tarea
            </button>
        </div>
    )
}