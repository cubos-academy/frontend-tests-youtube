export function generateNewTask(title: string) {
  const newTask = {
    id: Math.floor(Math.random() * 10000),
    title,
  };

  return newTask;
}
