import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

//rfce crea la base de ls funciones que se van a utilizar
//clg es para hacer un console.log()  de manera mas rapida
//useStateSnippet... Tengo que buscar que otras oci
function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm/>
        <TaskList/>
      </div>
    </main>
  );
}

export default App;
