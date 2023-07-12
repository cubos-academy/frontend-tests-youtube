import { useState } from "react";
import { generateNewTask } from "../../util/taskUtil";

function TodoList() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState<{ id: number; title: string }[]>([]);

  function handleAddNewTask() {
    if (!input) return;

    const newTask = generateNewTask(input);

    setTasks([...tasks, newTask]);
  }

  return (
    <div>
      <button onClick={handleAddNewTask}>Add</button>
      <input
        type="text"
        placeholder="Adicionar tarefa"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
