import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks"; // obtengo la lista y la nombro data

export const TaskContext = createContext();
export function TaskContextProvider(props) {
  let x = 20;

  const [tasks, settasks] = useState([]); // uso el hook para crea una funcion y una variable que es un array vacio(la variable se llama tasks)

  function createTask(task) {
    settasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  //Pasar una funcion como prop de uno a otro se conoce como prop drilling
  function deleteTask(id) {
    settasks(tasks.filter((task) => task.id !== id));
  }

  useEffect(() => {
    settasks(data); //con el use effect haremos que use la funcion del hook anterior y de esa manera data será asignada a tasks
  }, []); //Esto se va ejecutar cuando cargue tasklist

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
